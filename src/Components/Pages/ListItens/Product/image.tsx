import React from 'react';

import { Image } from 'react-bootstrap';

import './image.scss';

interface Props {
	src: string;
}
const ProductImage: React.FunctionComponent<Props> = ({ src }) => {
	return (
		<>
			<Image className="product-image" fluid src={src} />
		</>
	);
};

export default ProductImage;
