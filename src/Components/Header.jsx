import React from 'react'
import { AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../Assets/Images/Logo.png';

 const Header=() =>{
  return (
    <div className='flex'>
        <div className="logo">
        <img src={logo} alt="" />
        </div>
        <ul>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Combos</a></li>
          <li><a href="#">Joggers</a></li>
        </ul>
        <div className="header-search-bar">
          <input type="text" placeholder='Search' />
          <ul className="header-icons">
            <li><a href="#">{AiOutlineHeart}</a></li>
            <li><a href="#">{AiOutlineUser}</a></li>
            <li><a href="#">{AiOutlineShoppingCart}</a></li>
          </ul>
        </div>
    </div>
  )
}
export default Header;

