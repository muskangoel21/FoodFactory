import React, { Component } from 'react';
import { Icon, Step  } from 'semantic-ui-react';
import { Divider, Header, Table } from 'semantic-ui-react';

class orders extends Component {
    state = { open: false }
  
    render() {
        return (
    <div style={{marginTop:"50px"}}>
 <React.Fragment>
    <Divider horizontal>
      <Header as='h4'>
        <Icon name='tag' />
        Progess Bar
      </Header>
    </Divider>

    <Step.Group>
    <Step active href='http://google.com'>
      <Icon name='utensils' />
      <Step.Content>
        <Step.Title>Cooking</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>
    <Step completed href='http://google.com'>
      <Icon name='tick' />
      <Step.Content>
        <Step.Title>Prepared</Step.Title>
        <Step.Description>Grab your food</Step.Description>
      </Step.Content>
    </Step>
    <Step href='http://google.com'>
      <Icon name='delete' />
      <Step.Content>
        <Step.Title>Cancel Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>

    <Divider horizontal>
      <Header as='h4'>
        <Icon name='user' />
        Information
      </Header>
    </Divider>

    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={2}>Name</Table.Cell>
          <Table.Cell>Muskan</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Phone No</Table.Cell>
          <Table.Cell>9463442088</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Items</Table.Cell>
          <Table.Cell>
              <ul>
                  <li>Title of dishes(quantity)</li>
                  <li>Title of dishes(quantity)</li>
              </ul>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Amount</Table.Cell>
          <Table.Cell>price</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </React.Fragment>
  <input type="submit" className="btn btn-primary" value="delete" />
  
  </div>
)
}
}

export default orders;


