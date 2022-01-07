import React from 'react';
import Navbar from '../Shared/Navbar';
import Hero from './Hero';
import NewsCards from './NewsCards/NewsCards';

const Home = () => {
    return (
        <>
           <Navbar/>
           <Hero/>
           <NewsCards/>
        </>
    );
};

export default Home;