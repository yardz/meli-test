import React from 'react';

import './productDetails.scss';

import { Container, Row, Col } from 'react-bootstrap';
import { useProductState } from '../../../Hooks';

import Product from './Product';

interface Product {
	image: string;
	location: string;
	description: {
		currency: string;
		price: number;
		details: string;
		condition: string;
		free_shipping: boolean;
	};
}

interface Props {
	productId: string;
}
const ProductDetails: React.FunctionComponent<Props> = ({ productId }) => {
	const [loading, product] = useProductState(productId);
	if (!product || loading) {
		return null;
	}

	return (
		<>
			<div className="product-details">
				<Container>
					<Row>
						<Col>
							<div className="inner-content">
								<Container className="no-padding">
									<Row className="product">
										<Col xs={12} md={8}>
											<Product.Image src={product.item.picture} />
										</Col>
										<Col xs={12} md={4}>
											<Product.Price
												title={product.item.title}
												price={{
													currency: product.item.price.currency,
													amount: product.item.price.amount / Math.pow(10, product.item.price.decimals),
												}}
												condition={{
													condition: product.item.condition,
													sold_quantity: product.item.sold_quantity,
												}}
											/>
										</Col>
									</Row>
									<Row className="product">
										<Col xs={12} md={8}>
											<Product.Description description={product.item.description} />
										</Col>
									</Row>
								</Container>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default ProductDetails;
