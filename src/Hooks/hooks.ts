import { useState, useEffect } from 'react';

import { SearchResult, SearchApi, ProductDetails, ProductDetailApi } from '../Services/api';

export const useInputState = <T>(initial: T): [T, (event: any) => void] => {
	const [state, updateState] = useState<T>(initial);
	const update = (event: any) => {
		updateState(event.target.value);
	};
	return [state, update];
};

export const useSearchState = (initial?: string): [boolean | undefined, SearchResult | undefined, (query: string) => void] => {
	const [result, resultUpdate] = useState<SearchResult | undefined>(undefined);
	const [loading, loadingUpdate] = useState<boolean | undefined>(undefined);
	const update = (query: string) => {
		loadingUpdate(true);
		resultUpdate(undefined);
		SearchApi(query)
			.then(response => {
				const result = response.data;
				resultUpdate(result);
			})
			.finally(() => {
				loadingUpdate(false);
			});
	};

	useEffect(() => {
		if (initial) {
			update(initial);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return [loading, result, update];
};

export const useProductState = (id: string): [boolean | undefined, ProductDetails | undefined, (id: string) => void] => {
	const [result, resultUpdate] = useState<ProductDetails | undefined>(undefined);
	const [loading, loadingUpdate] = useState<boolean | undefined>(undefined);
	const update = (productId: string) => {
		loadingUpdate(true);
		resultUpdate(undefined);
		ProductDetailApi(productId)
			.then(response => {
				const result = response.data;
				resultUpdate(result);
			})
			.finally(() => {
				loadingUpdate(false);
			});
	};

	useEffect(() => {
		if (id) {
			update(id);
		}
	}, [id]);

	return [loading, result, update];
};
