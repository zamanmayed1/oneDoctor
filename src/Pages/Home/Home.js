import React from 'react';
import Banner from './Banner';
import Exceptional from './Exceptional';
import HomeAppointment from './HomeAppointment';
import HomeContactus from './HomeContactus';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';
import Footer from '../Shared/Footer'

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <Exceptional />
            <HomeAppointment />
            <Testimonial />
            <HomeContactus />
            <Footer />

        </div>
    );
};

export default Home; <h1>Home</h1>