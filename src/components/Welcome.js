import React from 'react';
import '../App.css';
import wbg from "../Images/wbg1.jpg";

const Welcome = () => {
    return(
        <>
        <section className='welcome'>
            <h1>Welcome!</h1>
            <div className='welcome-info'>
                <p>Doctors save lives, <span className='welcome-span'>Physiotherapist</span> makes the life worth living!</p>
                <a href='/about' className='welcome-btn'>Read About Us</a>
            </div>
            <img src={wbg} className='welcome-img' alt=''/>
        </section>
        </>
    )
}

export default Welcome;