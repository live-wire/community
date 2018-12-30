import React from 'react';
import {Icon, Menu, Table} from 'semantic-ui-react';

class DataTable extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {headers, rows, prev, next} = this.props;

		return (
			<Table>
				<Table.Header>
					<Table.Row>
						{headers.map(header => <Table.HeaderCell key={header.id}>{header.label}</Table.HeaderCell>)}
					</Table.Row>
				</Table.Header>

				<Table.Body style={{ minHeight: '500px' }}>
					{rows.map(row => <Table.Row key={row.id}>
						{headers.map(header => <Table.Cell key={header.id}>{row[header.name]}</Table.Cell>)}
					</Table.Row>)}

				</Table.Body>

				<Table.Footer>
					<Table.Row>
						<Table.HeaderCell colSpan={headers.length}>
							<Menu floated="right" pagination>
								<Menu.Item as="a" icon disabled={!prev}>
									<Icon name="chevron left"  />
								</Menu.Item>
								<Menu.Item as="a" icon disabled={!next}>
									<Icon name="chevron right"/>
								</Menu.Item>
							</Menu>
						</Table.HeaderCell>
					</Table.Row>
				</Table.Footer>
			</Table>
		);
	}
}

export default DataTable;
