import React from 'react'
import { Link } from "react-router-dom";
import logo from "logo.svg";
import styled from "styled-components";
import { ButtonContainer } from './Button';


function Navbar() {

   return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>

         <Link to="/" >
            <img src={logo} alt="store" className='navbar-brand' />
         </Link>
         <ul className="navbar-nav align-items-center">
            <li className="nav-item ">
               <Link to="/" className='nav-link'>Phone products</Link>
            </li>
         </ul>
         <Link to="/cart" className='margin-left-auto' >
            <ButtonContainer >
               <span className='mr-2'>
                  <i className="fas fa-cart-plus" />
                  my cart
               </span>
            </ButtonContainer>
         </Link>
      </NavWrapper >
   )
}

const NavWrapper = styled.nav`
background-color: var(--mainBlue);
.nav-link{
   color:var(--mainWhite) !important;
   font-size: 1.3rem;
   text-transform: capitalize;
};

`


export default Navbar