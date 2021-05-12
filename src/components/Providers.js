import React from 'react';
import '../App.css';
import {FaAmbulance, FaUserCheck, FaUserMd} from "react-icons/fa";
import Providing from './Providing';


const Providers = () => {

    return(
        <>
            <section className='providers'>
                <div className='providers-container'>
                    <ul className='providing-items'>
                    <Providing src={<FaUserCheck />} label='Individual work' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                    <Providing src={<FaUserMd />} label=' Well educated and certified therapists' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                    <Providing src={<FaAmbulance />} label='Coming to you' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Providers;