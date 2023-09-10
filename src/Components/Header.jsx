import React from 'react'
import { AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../Assets/Images/sitelogo.png';
import flag from '../Assets/Images/flag1.png';
import flag3 from '../Assets/Images/flag3.png';
import flag5 from '../Assets/Images/flag5.png';
import { Link } from 'react-router-dom';

 const Header=() =>{
    const navData = [
        {Linkvalue:'Home', link:'/'},
        {Linkvalue:'By Token', link:'/token'},
        {Linkvalue:'Why WHTLX?', link:'/Whlx'},
        {Linkvalue:'Whitepaper', link:'/whitepaper'},
        {Linkvalue:'Partners', link:'/partners'}
    ]
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark  static-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img className="logo-header" src={logo} alt="Logo" />
                        </a>
                        <ul>
                            {navData.map(item=>(
                            <li><Link to={item.link}>{item.Linkvalue}</Link></li>
                            ))}
                        </ul>
                    </div>
                </nav> 
    </div>
  )
}
export default Header;

