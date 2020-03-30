import React from 'react';
import {Route,Switch} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Detail from './components/ProductList/Product/Detail/Detail';
import Cart from './components/Cart/Cart';
import WrongPage from './components/WrongPage/WrongPage';
import Home from './components/Home/Home';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component = {Home} />
        <Route path="/show" exact component = {ProductList} />
        <Route path="/detail" exact component = {Detail} />
        <Route path="/cart" component = {Cart} />
        <Route component = {WrongPage}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
