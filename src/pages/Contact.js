import React from 'react';
import '../App.css';
import ContactInfo from '../components/ContactInfo';
import { IoIosArrowDropdown} from "react-icons/io";



const Contact = () => {
    
    return(
<>
    <section className='contact-banner'>
        <img className='contact-bg' />
        <h1 className="banner-text"><span className="contact-span">CONTACT</span> us</h1>
        <a href='#contact' className='contact-arrow'><IoIosArrowDropdown /></a>
    </section>
    <ContactInfo />
</>  
)}

export default Contact;