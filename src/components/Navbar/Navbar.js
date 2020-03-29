import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../UI/Button/Button';

import logo from '../../assets/logo.svg';

const navbar = (props) => {
  return(
    <nav className = "navbar navbar-expand-sm navbar-dark bg-primary px-sm-5">
      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand"/>
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/show" className="nav-link">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus"/>
          </span>
          My Cart
        </ButtonContainer>
      </Link>
    </nav>
  );
}

export default navbar;
