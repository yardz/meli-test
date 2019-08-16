import React from 'react';
import Currency from 'react-currency-formatter';

//@ts-ignore | there are no types
import RetinaImage from 'react-retina-image';

import './description.scss';

interface Props {
	description: {
		currency: string;
		price: number;
		details: string;
		condition: string;
		free_shipping: boolean;
	};
}
const ProductDescription: React.FunctionComponent<Props> = ({ description }) => {
	return (
		<div className="product-description">
			<span className="price">
				<Currency quantity={description.price} currency={description.currency} />
				{description.free_shipping && <RetinaImage src="/Assets/shipping.png" />}
			</span>
			<span className="details">{description.details}</span>
			<span className="condition">{description.condition}</span>
		</div>
	);
};

export default ProductDescription;
