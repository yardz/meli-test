import { Injectable, HttpService, BadRequestException } from '@nestjs/common';
import to from 'await-to-js';
// import { chain, isEmpty } from 'lodash';

import { SearchResult, SearchResponse, ResponseItens, Item, ProductDetails } from './api.interfaces';

@Injectable()
export class ApiService {
	constructor(private readonly httpService: HttpService) {}

	async search(query: string, limit: number): Promise<any> {
		const [err, apiResponse] = await to(
			this.httpService
				.get(`https://api.mercadolibre.com/sites/MLA/search`, {
					params: { q: query },
				})
				.toPromise(),
		);
		if (!!err) {
			throw new BadRequestException('request-error');
		}

		const searchResponse: SearchResponse = apiResponse.data;
		const response: SearchResult = {
			author: {
				name: '',
				lastname: '',
			},
			categories: this.getCategories(searchResponse),
			items: this.getItens(searchResponse.results, limit),
		};
		return response;
	}

	private getCategories(searchResponse: SearchResponse): string[] {
		const categories: string[] = searchResponse.filters
			.filter(filter => filter.id === 'category')
			.map(filter => filter.values)
			.reduce((prev: string[], values) => {
				const names = values
					.map(value => (value.path_from_root ? value.path_from_root : []))
					.map(paths => paths.map(category => category.name))
					.reduce((base, current) => base.concat(current), []);
				return prev.concat(names);
			}, []);
		return categories;
	}

	private getItens(results: ResponseItens[], limit: number): Item[] {
		const itens: Item[] = results.map(
			(item): Item => ({
				id: item.id,
				condition: item.condition,
				free_shipping: item.shipping.free_shipping,
				picture: item.thumbnail,
				price: {
					amount: this.removeDecimlas(item.price),
					currency: item.currency_id,
					decimals: this.countDecimals(item.price),
				},
				title: item.title,
				shipping_location: item.seller_address.city.name,
			}),
		);
		return itens.slice(0, limit);
	}

	async productDetails(id: string): Promise<ProductDetails> {
		const [errItem, item] = await to(this.httpService.get(`https://api.mercadolibre.com/items/${id}`).toPromise());
		const [errDescription, description] = await to(
			this.httpService.get(`https://api.mercadolibre.com/items/${id}/description`).toPromise(),
		);

		if (!!errItem || errDescription) {
			throw new BadRequestException('request-error');
		}

		return {
			author: {
				name: '',
				lastname: '',
			},
			item: {
				id,
				title: item.data.title,
				picture: item.data.pictures[0].secure_url,
				condition: item.data.condition,
				free_shipping: item.data.free_shipping,
				sold_quantity: item.data.sold_quantity,
				price: {
					amount: this.removeDecimlas(item.data.price),
					currency: item.data.currency_id,
					decimals: this.countDecimals(item.data.price),
				},
				shipping_location: null,
				description: description.data.plain_text,
			},
		};
	}

	private countDecimals(value: number) {
		if (Math.floor(value) === value) {
			return 0;
		}
		return value.toString().split('.')[1].length || 0;
	}

	private removeDecimlas(value: number) {
		return value * Math.pow(10, this.countDecimals(value));
	}
}
