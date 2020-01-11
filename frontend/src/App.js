import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import About from "./components/About/About";
import homepage from "./components/dashboard/homepage";
import Nav from "./components/dashboard/Nav";
import product from "./components/dashboard/product";
import orders from "./components/cookView/orders";
import orderList from "./components/cookView/orderList";
import Navb from "./components/cookView/navb";

import "./App.css";
const App = () => (
  <Router>
    <Fragment>
        <Nav />   
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
         <Route exact path="/home" component={homepage} /> 
         <Route exact path="/product" component={product} /> 
         <Route exact path="/order" component={orders} /> 
         <Route exact path="/orderList" component={orderList} /> 
        
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
