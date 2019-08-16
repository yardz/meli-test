import React from 'react';
import './listItens.scss';

import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import Product from './Product';

interface Products {
	id: string;
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
	products: Products[];
}
const ListItens: React.FunctionComponent<Props> = ({ products }) => {
	return (
		<>
			<div className="list-itens">
				<Container>
					<Row>
						<Col>
							<div className="inner-content">
								<Container className="no-padding">
									{products.map((product, key) => (
										<Row key={key} className="product" noGutters>
											<Col>
												<Link to={`/items/${product.id}`}>
													<Product.Image src={product.image} />
													<Product.Description description={product.description} />
												</Link>
											</Col>
											<Col xs={12} md={3}>
												<Link to={`/items/${product.id}`}>
													<Product.Location location={product.location} />
												</Link>
											</Col>
										</Row>
									))}
								</Container>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default ListItens;
