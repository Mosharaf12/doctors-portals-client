import React from 'react';
import Banner from './Banner/Banner';
import Background from '../../../assets/images/bg.png'
import './Home.css'
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import ImgCard from './ImgCard/ImgCard';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Profile from '../Profile/Profile';
import Forms from '../Forms/Forms';


const Home = () => {
    return (
        <div>
            <div style={{backgroundImage: "url(" +  Background  + ")"}} className='mx-5 bg-img'>
            <Banner></Banner>
            </div>
            <InfoCards></InfoCards>
            <Services></Services>
            <ImgCard></ImgCard>
            <MakeAppointment></MakeAppointment>
            <Profile></Profile>
            <Forms></Forms>
        </div>
    );
};

export default Home;