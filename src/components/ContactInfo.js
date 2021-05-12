import React from 'react';
import '../App.css';
import { MdLocalPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { GiBattery100, GiBattery25 } from "react-icons/gi";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const ContactInfo = () => {

    return(
        <>
            <section className='contact-card-container'>
                <div className='contact-card-wrap'>
                    <div className='contact-card'>
                        <div className='contact-icon'><MdLocalPhone /></div>
                        <p>064/4872-552</p>
                    </div>
                    <div className='contact-card'>
                    <div className='contact-icon'><MdLocationOn /></div>
                        <p>Novi Sad, Serbia</p>
                    </div>
                    <div className='contact-card'>
                    <div className='contact-icon'><MdEmail /></div>
                        <p>madsrehab@gmail.com</p>
                    </div>
                </div>
                <div className='working-hours' id='contact'>
                    <div className='working-hours-wrap'>
                            <div className='contact-form'>
                                <h1>Contact Us</h1>
                                <input type="text" name="" placeholder="Full Name" className='input'/>
                                <input type="email" name="" placeholder="Email" className='input'/>
                                <input type="tel" name="" placeholder="Phone" className='input'/>
                                <textarea type="text" name="" placeholder="Message..." className='input'/>
                                <input type='submit' value='Send' className='input-btn' />
                                
                                <span className='circle one'></span>
                                <span className='circle two'></span>
                            </div>                   
                            <div className='working-hours-card'>
                                <h1>Working Hours</h1>
                                <p><span><GiBattery100 /></span>: Monday-Friday - 08h-20h</p>
                                <p><span><GiBattery25 /></span>: Saturday and Sunday - Closed</p>
                                <h2>Follow us on:</h2>
                                <div className='social-logos'>
                                <a href='https://www.facebook.com/' className='fb-logo'><FaFacebookSquare /></a>
                                <a href='https://www.instagram.com/' className='instagram-logo'><FaInstagramSquare /></a>
                                </div>
                                <span className='circle3'></span>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactInfo;