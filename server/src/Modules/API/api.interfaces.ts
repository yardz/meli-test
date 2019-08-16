interface Author {
	name: string;
	lastname: string;
}

export interface Item {
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

interface ItemDetail extends Item {
	sold_quantity: number;
	description: string;
}
export interface ProductDetails {
	author: Author;
	item: ItemDetail;
}

// RESPONSE
interface ResponseSimpleElement {
	id: string;
	name: string;
}
interface Seller {
	id: number;
	power_seller_status: string;
	car_dealer: boolean;
	real_estate_agency: boolean;
	tags: string[];
}
interface Installments {
	quantity: number;
	amount: number;
	rate: number;
	currency_id: string;
}
interface Address {
	state_id: string;
	state_name: string;
	city_id: string;
	city_name: string;
}
interface Shipping {
	free_shipping: boolean;
	mode: string;
	tags: string[];
	logistic_type: string;
	store_pick_up: boolean;
}
interface Attribute {
	value_id: string;
	value_name: string;
	value_struct: any;
	attribute_group_id: string;
	attribute_group_name: string;
	source: number;
	id: string;
	name: string;
}
interface SellerAddress {
	id: string;
	comment: string;
	address_line: string;
	zip_code: string;
	country: ResponseSimpleElement;
	state: ResponseSimpleElement;
	city: ResponseSimpleElement;
	latitude: string;
	longitude: string;
}
export interface ResponseItens {
	id: string;
	site_id: string;
	title: string;
	seller: Seller;
	price: number;
	currency_id: string;
	available_quantity: number;
	sold_quantity: number;
	buying_mode: string;
	listing_type_id: string;
	stop_time: string;
	condition: string;
	permalink: string;
	thumbnail: string;
	accepts_mercadopago: boolean;
	installments: Installments;
	address: Address;
	shipping: Shipping;
	seller_address: SellerAddress;
	attributes: Attribute[];
	original_price: any;
	category_id: string;
	official_store_id: any;
	catalog_product_id: any;
	reviews: any;
	tags: string[];
}
interface Paging {
	total: number;
	offset: number;
	limit: number;
	primary_results: number;
}
interface Filter {
	id: string;
	name: string;
	type: string;
}
interface ValueFilter {
	id: string;
	name: string;
	path_from_root?: ResponseSimpleElement[];
	results: number;
}
interface FilterUsed extends Filter {
	values: ValueFilter[];
}
interface FilterAvailable extends Filter {
	values: ValueFilter[];
}
export interface SearchResponse {
	site_id: string;
	query: string;
	paging: Paging;
	results: ResponseItens[];
	secondary_results: any[];
	related_results: any[];
	product_results: any[];
	sort: ResponseSimpleElement;
	available_sorts: ResponseSimpleElement[];
	filters: FilterUsed[];
	available_filters: FilterAvailable[];
}
