
import Awardsachivement from '@/components/AwardsAchivment/Awardsachivement';
import Banner from '@/components/Bannner/Banner';
import Department from '@/components/Department/Department';
import Dropdown from '@/components/Dropdown/Dropdown';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import EventsNews from '@/components/SportsNews/SportsNews';
import Testimonial from '@/components/Testimonial/Testimonial';
import TopReqruits from '@/components/TopRequits/TopReqruits';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Dropdown></Dropdown>
      <Navbar></Navbar>
      <Banner></Banner>
      <Department></Department>
      <Awardsachivement></Awardsachivement>
      <EventsNews></EventsNews>
      <Testimonial></Testimonial>
      <TopReqruits></TopReqruits>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
