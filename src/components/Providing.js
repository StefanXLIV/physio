import React from 'react';
import '../App.css';

const Providing = (props) => {

    return(
        <>
            <div className='providng-item'>
                    <div className='providing-image'>{props.src}</div>
                    <h2>{props.label}</h2>
                    <p>{props.text}</p>
            </div>
        </>
    )
}

export default Providing;