import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VacationSection from './components/VacationSection';
import Info from './components/Info';
import Achievement from './components/Achievement';

import Carousel from './components/Carousel';
import Subscribe from './components/Subscribe';
import FooterPartOne from './components/FooterPartOne';
import FooterPartTwo from './components/FooterPartTwo';


function App() {
  return (
    <div>
      <Header  />
      
      <HeroSection />
      
      <VacationSection />

      <Info />
      <Achievement />
      
      <Carousel/>
      <Subscribe/>
      <FooterPartOne/>
      <FooterPartTwo/>
    </div>
  );
}

export default App;
