import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import Contact from './pages/contact';
import Product from './pages/product';
import LoginPage from './pages/login-page';
import Mail from './pages/mail';

class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/about-us" component={AboutUs}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/mail" component={Mail}></Route>
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App;