import React from 'react';
import { withRouter } from 'react-router-dom';
import { Icon, Menu, Table } from 'semantic-ui-react';
import { parse } from 'query-string';

class DataTable extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { headers, rows, prev, next, fetch, history, match } = this.props;

		return (
			<Table>
				<Table.Header>
					<Table.Row>
						{headers.map(header => (
							<Table.HeaderCell key={header.id}>
								{header.label}
							</Table.HeaderCell>
						))}
					</Table.Row>
				</Table.Header>

				<Table.Body style={{ minHeight: '500px' }}>
					{rows.map(row => (
						<Table.Row
							style={{ cursor: 'pointer' }}
							key={row.id}
							onClick={() => history.push(`${match.url}/${row.id}`)}>
							{headers.map(header => (
								<Table.Cell key={header.id}>{row[header.name]}</Table.Cell>
							))}
						</Table.Row>
					))}
				</Table.Body>

				<Table.Footer>
					{console.log(prev, next)}
					<Table.Row>
						<Table.HeaderCell colSpan={headers.length}>
							<Menu floated="right" pagination>
								<Menu.Item
									as="a"
									icon
									disabled={!prev}
									onClick={() => fetch(parse(prev.split('?')[1]))}>
									<Icon name="chevron left" />
								</Menu.Item>
								<Menu.Item
									as="a"
									icon
									disabled={!next}
									onClick={() => fetch(parse(next.split('?')[1]))}>
									<Icon name="chevron right" />
								</Menu.Item>
							</Menu>
						</Table.HeaderCell>
					</Table.Row>
				</Table.Footer>
			</Table>
		);
	}
}

export default withRouter(DataTable);
