import React, {useState, useEffect} from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import { BsList, BsX } from "react-icons/bs";
import logo from "../Images/logo16.png";


const Navbar = () => {
    
    
    const[navbar, setNavbar] = useState(false);
    const[click, setClick] = useState(true);


    const changeNavBg = () => {
        if(window.scrollY > 0) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    const handleClick = () => {
        setClick(!click);
    }

    const closeNav = () => setClick(true);

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
    }, []);

    window.addEventListener('scroll', changeNavBg);
    
    return (    
        <nav className={navbar ? "navbar active" : "navbar"}>
            <NavLink to='/' className="logo" onClick={closeNav}><img src={logo} className='logo-img' /></NavLink>
            <ul className={ click ? "nav-links show-nav" : "nav-links"} onClick={handleClick}>
               <NavLink to='/' exact className="links" activeClassName="header-active"><li>Home</li></NavLink>
               <NavLink to='/therapy' className="links" activeClassName="header-active"><li>Therapy</li></NavLink>
               <NavLink to='/about' className="links" activeClassName="header-active"><li>About</li></NavLink>
               <NavLink to='/contact' className="links" activeClassName="header-active"><li>Contact</li></NavLink>
            </ul>
            <button type="button" className="nav-btn" onClick={handleClick}>
               {click ? <BsList /> : <BsX />}
            </button>
        </nav>
    ); 
}

export default Navbar;