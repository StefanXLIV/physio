import React from 'react';
import '../App.css';
import team1 from "../Images/team1.jpg";
import team2 from "../Images/team2.jpg";
import team3 from "../Images/team3.jpg";
import team4 from "../Images/team4.jpg";
import TeamMember from './TeamMember';
import { Link } from 'react-router-dom'; 


const Team = () => {
    return(
    <>
        <section className='team'>
            <h1>Our Team</h1>
            <ul className='team-container'>
                <TeamMember src={team1} label='Mariana' />
                <TeamMember src={team2} label='David' />
                <TeamMember src={team3} label='Anne' />
                <TeamMember src={team4} label='Stephen' />
            </ul>
            <Link to='/about' className='team-btn'>Check Our Team</Link>
        </section>
    </>
    );
}

export default Team;