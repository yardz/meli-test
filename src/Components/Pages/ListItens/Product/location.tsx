import React from 'react';

import './location.scss';

interface Props {
	location: string;
}
const ProductLocation: React.FunctionComponent<Props> = ({ location }) => {
	return <span className="product-location">{location}</span>;
};

export default ProductLocation;
