import React from 'react';
import Therapies from '../components/Therapies';
import Welcome from '../components/Welcome';
import background from "../Images/bg1.jpg";
import '../App.css';
import Team from '../components/Team';
import LogoSlider from '../components/LogoSlider';
import Providers from '../components/Providers';



const Home = () => {
    return(
        <>
        <section className='banner'>
            <img src={background} alt='' />
            <h1 className="banner-text">Rehabilitation clinic <span className="home-span">MADS</span></h1>
        </section>
        <Welcome />
        <Providers />
        <Therapies />
        <Team />
        <LogoSlider />
        </>
    )
}

export default Home;