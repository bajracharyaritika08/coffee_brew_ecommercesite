import React from 'react'
import {NavLink} from 'react-router-dom'
import logo_ooty from '../../images/logo_ooty.png'
import brew_mix_logo from '../../image/brew_mix_logo.png'
import '../../styles/navbar/Navbar.css'
import { FaHeart,FaShoppingCart,FaSearch,FaUserAlt} from "react-icons/fa";
import { useState } from 'react'
export const NavBar = () => {
    const [navbar , setNavbar] = useState(false);
    const changeNavBackground =()=>{
        if(window.scrollY >= 80){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeNavBackground)


    const allTea =[{
        "heading":"Red Tea",
        "types":"RT Black Tea",
        "types":"Chai Tea",
        "types":"RT Black Tea",
        "types":"RT Black Tea",
    }]
    
  return (
    <>
        <div className={navbar ? "header active" : "header"} >
            
                <div className="navlogo">
                    <NavLink to='/'>
                         <img src={brew_mix_logo} alt="Ooty logo" className='ooty_logo'/>
                    </NavLink>
                </div>
                <div className="nav-items">
                    <NavLink exact to="./HomePage">Home</NavLink>
                    <NavLink exact to="./Machines" >Machines</NavLink>
                    <NavLink exact to="./HomePage">Featured</NavLink>
                    <NavLink exact to="./HomePage">News</NavLink>
                    <NavLink exact to="./HomePage">Pages</NavLink>
            
            </div>
            <div className="icons">
            <FaHeart className='fahearts'/>
            <FaShoppingCart className='fashopping'/>
            <FaSearch className='fasearch'/>
            <NavLink exact to="./LoginPage" className="login_icon">
            <FaUserAlt className='fauser'/>
            </NavLink>
            </div>
        </div>
    </>
  )
}
