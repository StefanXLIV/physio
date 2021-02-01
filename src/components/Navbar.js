import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { BsList, BsX } from "react-icons/bs";


const Navbar = () => {
    
    const[isOpen, setIsOpen] = useState(true);
    const[navbar, setNavbar] = useState(false);
    const[click, setClick] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

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

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
    }, []);

    window.addEventListener('scroll', changeNavBg);
    
    return (
       
        <nav className={navbar ? "navbar active" : "navbar"}>
            <Link to='/' className="logo"><h2>MADS</h2></Link>
            <ul className={ isOpen ? "nav-links show-nav" : "nav-links"} onClick={toggle}>
               <Link to='/' className="links"><li>Home</li></Link>
               <Link to='/about' className="links"><li>About</li></Link>
               <Link to='/contact' className="links"><li>Contact</li></Link>
            </ul>
            <button type="button" className="nav-btn" onClick={() => {toggle(); handleClick();}}>
               {click ? <BsList /> : <BsX />}
            </button>
        </nav>
    );
}

export default Navbar;