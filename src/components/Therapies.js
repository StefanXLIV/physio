import React from 'react';
import TherapyCards from './TherapyCards';
import '../App.css';
import pnf from "../Images/pnf.jpg";
import dns from "../Images/dns.jpg";
import massage from "../Images/massage.jpg";
import electrotherapy from "../Images/electrotherapy.jpg";
import kinesiotherapy from "../Images/kinesiotherapy.jpg";
import manualtherapy from "../Images/manualtherapy.jpg";
import ktape from "../Images/ktape.jpg";
import beauty from "../Images/beauty.jpg";

const Therapies = () => {

   

    return(
        <>
        <section className='therapies'>
            <h1>Therapies</h1>
            <p>Methods that we do in our clinic</p>
            <div className='cards-container'>
                <ul className='therapy-cards'>
                <TherapyCards src={pnf} label='PNF' path='/therapy'  />
                <TherapyCards src={dns} label='DNS' path='/therapy'  />
                <TherapyCards src={kinesiotherapy} label='Kinesiotherapy' path='/therapy'  />
                <TherapyCards src={manualtherapy} label='Manual therapy' path='/therapy'  />
                <TherapyCards src={electrotherapy} label='Electrotherapy' path='/therapy'  />
                <TherapyCards src={ktape} label='Kinesiology Tape' path='/therapy'  />
                <TherapyCards src={massage} label='Massage' path='/therapy'  />
                <TherapyCards src={beauty} label='Beauty treatment'  path='/therapy'  />
                </ul>
            </div>
        </section>
        </>
    )
}

export default Therapies;