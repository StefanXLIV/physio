import React from 'react';
import '../App.css';


const AboutTherapy = (props) => {
    return(
        <div className='about-team'>
             <div className='about-img-container'><img src={props.src} className='about-team-image' alt='' /></div>
            <div className='about-team-info'>
                <h2>{props.label}</h2>
                <p>{props.text}</p>
            </div>       
        </div>
    )
}

export default AboutTherapy;