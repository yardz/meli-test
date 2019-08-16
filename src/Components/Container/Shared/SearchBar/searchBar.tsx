import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

import { useInputState } from '../../../../Hooks';

//@ts-ignore | there are no types
import RetinaImage from 'react-retina-image';

import './searchBar.scss';

interface Props {
	search: (query: string) => void;
	term?: string;
}
const SearchBar: React.FunctionComponent<Props> = ({ search, term }) => {
	const [query, updateQuery] = useInputState(term || '');
	const onClick = () => {
		search(query);
	};
	return (
		<div className="search-bar">
			<Container fluid>
				<Row>
					<Col xs={3} md={1}>
						<RetinaImage src="/Assets/logo.png" />
					</Col>
					<Col xs={9} md={11}>
						<InputGroup>
							<FormControl
								placeholder="Nunca dejes de buscar"
								aria-label="Nunca dejes de buscar"
								value={query}
								onChange={updateQuery}
							/>
							<InputGroup.Append>
								<Button variant="secondary" onClick={onClick}>
									<RetinaImage src="/Assets/search.png" />
								</Button>
							</InputGroup.Append>
						</InputGroup>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SearchBar;
