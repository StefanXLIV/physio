import React from 'react';
import logo from "../Images/logo18.png";
import '../App.css';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdLocalPhone, MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";



const Footer = () => {
    
    return(
<>
    <section className='footer'>
        <div className='up-footer'>
            <img src={logo} className='footer-logo' alt='' />
            <p>MADS rehab centar has therapists that are well educated to solve you any problems.</p>
        </div>
        <div className='mid-footer'>
        <div className='footer-info'>
                <h1>Contact Us</h1>
                <p><span><MdLocationOn /> Adress: </span>Novi Sad, Serbia</p>
                <p><span><MdLocalPhone /> Phone Number: </span>064/4872-552</p>
                <p><span><MdEmail /> Email: </span>madsrehab@gmail.com</p>
            </div>
            <div className='footer-info'>
                <h1>Working Hours</h1>
                <p><span><MdAccessTime /></span>Monday-Friday - <span>08-20h</span></p>
                <p>Saturday and Sunday - <span>Closed</span></p>
            </div>           
        </div>
        <div className='social-network'>
            <a href='https://www.facebook.com/' className='fb-network'><div ><FaFacebookF /></div></a>
            <a href='https://www.instagram.com/' className='instagram-network'><FaInstagram /></a>
        </div>
        <p class="copyright">Designed & Developed by <a href="">44DeV</a></p>   
    </section>
</>  
)}

export default Footer;