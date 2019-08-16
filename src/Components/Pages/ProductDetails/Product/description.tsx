import React from 'react';

import './description.scss';

interface Props {
	description: string;
}
const ProductDescription: React.FunctionComponent<Props> = ({ description }) => {
	return (
		<div className="product-description">
			<h2>Descrição do Produto</h2>
			<div className="description">{description}</div>
		</div>
	);
};

export default ProductDescription;
