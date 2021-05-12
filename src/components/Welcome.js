import React from 'react';
import '../App.css';
import wbg1 from "../Images/wbg1.jpg";
import wbg from "../Images/wbg.jpg";
import { Link } from 'react-router-dom'; 


const Welcome = () => {
    return(
        <>
        <section className='welcome'>
            <h1>Welcome!</h1>
            <div className='welcome-info'>
                <p>Doctors save lives, <span className='welcome-span'>Physiotherapist</span> makes the life worth living!</p>
                <img src={wbg} className='welcome-img1' alt=''/>
                <Link to='/about' className='welcome-btn'>Read About Us</Link>
            </div>
            <img src={wbg1} className='welcome-img' alt=''/>
        </section>
        </>
    )
}

export default Welcome;