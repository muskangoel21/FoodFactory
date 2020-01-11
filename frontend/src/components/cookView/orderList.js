import React from 'react'
import {Link} from "react-router-dom";
import { Table } from 'semantic-ui-react'

const OrderList = () => (
    <div style={{marginTop:"50px"}}>
        <h1>Orders awaiting process</h1>
  <Table striped color="teal" key="teal">
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Order id</Table.HeaderCell>
        
        <Table.HeaderCell>Payment Status</Table.HeaderCell>
        <Table.HeaderCell>E-mail</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
      <Table.Cell><Link to="order">#0004</Link>
      <br /><p style={{color:"grey"}}>September 14, 2013</p>
      </Table.Cell>
        <Table.Cell>Canceled</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>Rs. 456</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>#0003
          <br /><p style={{color:"grey"}}>January 11, 2014</p>
      </Table.Cell>
        <Table.Cell>Cooking</Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell>Rs. 900</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>#0002
      <br /><p style={{color:"grey"}}>May 11, 2014</p>
      </Table.Cell>
        <Table.Cell>Prepared</Table.Cell>
        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
        <Table.Cell>Rs. 5732</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>#0001
      <br /><p style={{color:"grey"}}>September 14, 2013</p>
      </Table.Cell>
        <Table.Cell>Prepared</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>Rs. 703</Table.Cell>
      </Table.Row>
     
    </Table.Body>
  </Table>
  </div>
)

export default OrderList
