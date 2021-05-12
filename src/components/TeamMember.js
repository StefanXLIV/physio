import React from 'react';
import '../App.css';

const TeamMember = (props) => {

    return(
        <>
        <li className='team-member'>
            <img src={props.src} className='team-image' />
            <div className='team-info'>
                <h2>{props.label}</h2>
                <p>physiotherapist</p>
            </div>
        </li>
        </>
    )
}

export default TeamMember;