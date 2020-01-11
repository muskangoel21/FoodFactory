import React from "react";
import { Link } from "react-router-dom";
import img from "../../img/logo.png";
import { Dropdown } from 'semantic-ui-react'

// const foodOptions = [
//     {
//         key: 'Jenny Hess',
//         text: 'Jenny Hess',
//         value: 'Jenny Hess',
//         image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
//       },
//       {
//         key: 'Elliot Fu',
//         text: 'Elliot Fu',
//         value: 'Elliot Fu',
//         image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
//       },
//       {
//         key: 'Stevie Feliciano',
//         text: 'Stevie Feliciano',
//         value: 'Stevie Feliciano',
//         image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
//       },
//   ]


const Navb = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <img src={img} alt="Food Factory"></img>
        </Link>
      </h1>
      <ul>
        
      {/* <li >
      
      <Dropdown
      className="active"
      text='Orders'
      labeled
      options={foodOptions}
      style={{color:"white" }}
    />   
    
      </li> */}
      
        <li>
          <Link to=""><span class="glyphicon glyphicon-log-in">   </span>  Logout</Link>
        </li>
       
      </ul>
    </nav>
  );
};
export default Navb;
