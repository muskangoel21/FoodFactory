import React, {Component} from "react";
import { Link } from "react-router-dom";
import img from "../../img/logo.png";
import {  Header, Image, Modal } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react'


const foodOptions = [
  {
    key: 'Veg',
    text: 'Veg',
    value: 'Veg',

  },
  {
    key: 'Non-Veg',
    text: 'Non-Veg',
    value: 'Non-Veg',

  },
  {
    key: 'Burger',
    text: 'Burger',
    value: 'Burger',
  
  },
  {
    key: 'Pizza',
    text: 'Pizza',
    value: 'Pizza',
   
  },
  {
    key: 'TeaQ',
    text: 'TeaQ',
    value: 'TeaQ',

  },
  {
    key: 'Meals',
    text: 'Meals',
    value: 'Meals',
    
  },
]

class Nav extends Component {
    render(){
    return (
<nav class="navbar bg-dark">
    <h1 style={{float:"left"}}>
      <Link to="" > <img src={img} alt="Food Factory"></img></Link>
    </h1>
    <ul class="nav navbar-nav " style={{fontSize: "13px" }}>
      <li class="active"><Link to=""><span class="glyphicon glyphicon-home">  Home</span></Link></li>

      <li><Link to=""> <span class="glyphicon glyphicon-shopping-cart" > Cart</span></Link></li>
   
      <li  style={{margin:"15px"}}>
      <span  class="glyphicon glyphicon-filter" style={{color:"white"}}>
      <Dropdown
      className="active"
      text='Filter'
      labeled
      options={foodOptions}
      style={{color:"white" }}
    />   
     </span>
      </li>

      <li> <Modal trigger={<a class="glyphicon glyphicon-user"> Account</a>}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
          <Modal.Description>
            <Header>Details of User</Header>
            <form>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value="Muskan"
            // onChange={this.handleInputChange} 
            />
        </label>
        <br/>
        <br/>
        <label>
          Phone No.*:
          <input
            name="phno"
            type="text"
            value="9463442088"
            // onChange={this.handleInputChange} 
            />
        </label>
        <br/>
        <br/>
        <label>
          Email     :
          <input
            name="email"
            type="email"
            value="muskangoel21@gmail.com"
            // onChange={this.handleInputChange} 
            />
        </label>
        <br/>
        <br/>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value="123456"
            // onChange={this.handleInputChange} 
            />
        </label>
        <br/>
        <br/>
        <input type="submit" className="btn btn-primary" value="Update" />
      </form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
      </li>
      
     

      <li><Link to=""><span class="glyphicon glyphicon-log-in"></span>  Logout</Link></li>
    </ul>
</nav>
  );
  }
}
export default Nav;
