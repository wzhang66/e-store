import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {ButtonContainer} from '../UI/Button/Button';
import logo from '../../assets/logo.svg';

const navbar = (props) => {
  return(
    <NavWrapper className = "navbar navbar-expand-sm navbar-dark bg-primary px-sm-5">
      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand img-fluid"/>
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/show" className="nav-link">
            Store
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/about" className="nav-link">
            About
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
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  background-color:var(--mainBlue) !important;
  margin-top: 1rem;
  .nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;

  }
`;


export default navbar;
