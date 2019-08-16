import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

import './breadcrumb.scss';

interface Category {
	name: string;
	url?: string;
}
interface Props {
	categories?: Category[];
}
const BreadcrumbComponent: React.FunctionComponent<Props> = ({ categories }) => {
	if (!categories) {
		return null;
	}
	const last = categories.length - 1;
	return (
		<div className="breadcrumb-component">
			<Container fluid>
				<Row>
					<Col xs={12}>
						<Breadcrumb>
							{categories.map((categorie, key) => {
								const active = key === last;
								return (
									<Breadcrumb.Item key={key} href={categorie.url} active={active}>
										{categorie.name}
									</Breadcrumb.Item>
								);
							})}
						</Breadcrumb>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default BreadcrumbComponent;
