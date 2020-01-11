import  React  from  'react';
import img from "../../img/showcase.jpg";
import { Component } from 'react';
import { Button,Card } from 'react-bootstrap';

class product extends Component {
state = {
      name: ''
  }
  render() {
      return (
          <div style={{marginTop:"50px"}}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Buy</Button>
    {/* <Input
        size='mini'
    placeholder='Quantity'
    type='number'
    defaultValue='1'
    action={ user ? {
      color: 'teal',
      icon: 'plus cart',
      content: 'Add to cart',
    } : {
      color : 'blue',
      content: "Sign Up to Purchase",
      icon : "Signup",
    } }
  /> */}
  </Card.Body>
</Card>
</div>
      );
  }
};

export default product;