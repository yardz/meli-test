import React from 'react';
import Currency from 'react-currency-formatter';

import './price.scss';

import { Button } from 'react-bootstrap';

interface Props {
	condition: {
		condition: string;
		sold_quantity: number;
	};
	title: string;
	price: {
		currency: string;
		amount: number;
	};
}
const ProductPrice: React.FunctionComponent<Props> = ({ condition, title, price }) => {
	return (
		<div className="product-price-details">
			<span className="estado">
				{condition.condition} - {condition.sold_quantity} {condition.sold_quantity !== 1 ? 'vendidos' : 'vendido'}
			</span>
			<h1 className="title">{title}</h1>
			<h2 className="price">
				<Currency quantity={price.amount} currency={price.currency} />
			</h2>

			<div className="buy-btn">
				<Button size="lg" variant="info">
					Comprar
				</Button>
			</div>
		</div>
	);
};

export default ProductPrice;
