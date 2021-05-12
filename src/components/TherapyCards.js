import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 

const TherapyCards = (props) => {

    return(
        <>
        <li className='card'>
            <div className='card-wrap'>
                <Link className='card-link' to={props.path}>
                    <img src={props.src} className='card-image' />
                    <h2>{props.label}</h2>
                </Link>
            </div>
        </li>
        </>
    )
}

export default TherapyCards;