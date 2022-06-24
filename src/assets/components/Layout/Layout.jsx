import React, { Fragment } from 'react';
import Header from '../header/Header';
import HeroSection from '../HeroSection/HeroSection';
import About from '../about/About';
import Services from '../services/Services';
import Footer from "../Footer/Footer"
import Portafolio from '../portafolio/ImageSlider';
import Contact from '../Contact/Contact';
import { dataSlider } from '../portafolio/dataSlider';
const Layout = () => {
  return (
    <Fragment>
        <Header />
        <HeroSection />
        <About />
        <Services />
        <Portafolio slides={dataSlider} />
        <Contact />
        <Footer /> 

    </Fragment>
  );
};

export default Layout;