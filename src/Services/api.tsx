import axios, { AxiosPromise } from 'axios';

interface Author {
	name: string;
	lastname: string;
}

interface Item {
	id: string;
	title: string;
	price: {
		currency: string;
		amount: number;
		decimals: number;
	};
	picture: string;
	condition: string;
	free_shipping: boolean;
	shipping_location: string;
}

export interface SearchResult {
	author: Author;
	categories: string[];
	items: Item[];
}

export const SearchApi = (query: string): AxiosPromise<SearchResult> => {
	return axios.get('http://localhost:3100/api/items', {
		params: {
			q: query,
		},
	});
};

interface ItemDetail extends Item {
	sold_quantity: number;
	description: string;
}
export interface ProductDetails {
	author: Author;
	item: ItemDetail;
}

export const ProductDetailApi = (id: string): AxiosPromise<ProductDetails> => {
	return axios.get(`http://localhost:3100/api/items/${id}`);
};
