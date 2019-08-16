import React from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';

import './mainContainer.scss';
import { Container, Row, Col } from 'react-bootstrap';

import { SearchBar, Breadcrumb } from './Shared';
import { ListItens, ProductDetails } from '../Pages';

import { useSearchState } from '../../Hooks';

interface Props extends RouteComponentProps {
	id?: string;
}
const MainContainer: React.FunctionComponent<Props> = ({ history, location, match }) => {
	const { search } = queryString.parse(location.search) as { search?: string };
	const [loading, searchResult, requestSearch] = useSearchState(search);

	const request = (query: string) => {
		requestSearch(query);
		history.push(`/items?search=${query}`);
	};

	const categories = searchResult ? searchResult.categories.map(categorie => ({ name: categorie })) : undefined;
	const products = searchResult
		? searchResult.items.map(item => ({
				id: item.id,
				image: item.picture,
				location: item.shipping_location,
				description: {
					currency: item.price.currency,
					price: item.price.amount / Math.pow(10, item.price.decimals),
					details: item.title,
					condition: item.condition,
					free_shipping: item.free_shipping,
				},
		  }))
		: undefined;
	return (
		<>
			<div className="header">
				<Container>
					<Row>
						<Col className="offset-1" xs={10}>
							<SearchBar term={search} search={request} />
						</Col>
					</Row>
				</Container>
			</div>
			<Container>
				<Row>
					{!loading && (
						<>
							<Col className="offset-1" xs={10}>
								<Breadcrumb categories={categories} />
							</Col>
							<Col className="offset-1" xs={10}>
								<Switch>
									<Route exact path="/" />
									<Route exact path="/items" render={props => products && <ListItens products={products} />} />
									<Route path="/items/:id" render={props => <ProductDetails productId={props.match.params.id} />} />
								</Switch>
							</Col>
						</>
					)}
				</Row>
			</Container>
		</>
	);
};

export default withRouter(MainContainer);
