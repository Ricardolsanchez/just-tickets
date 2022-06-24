import React, {useState} from 'react';
import './herosection.css';
import { Container,Row,Col } from 'reactstrap';
import handImg from '../../../assets/images/hand.png';
import appleImg from '../../../assets/images/Appstore.png';
import googleImg from '../../../assets/images/Googleplay.png';




const HeroSection = () => {


  return (
      <section className='hero__section' id="home">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">

                <h1 className='hero__title mb-3'>The Best App for the concerts you want to be in!</h1>
                  <h5 className='mb-4'>You can get the App!</h5>
                  <h2 className='download mb-5'>Download </h2>

                  <div className="social__media">
                    <img src={appleImg} alt="" className='w-100'/>
                    <img src={googleImg} alt="" className='w-100'/>
                  </div>

                  <div className="mt-4 hero__btns d-flex align-items-center gap-4">
                    <button className='btn hire__btn'>
                      <a href='#'>Get the App</a>
                    </button>
                  </div>
              </div>
            </Col>


            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={handImg} alt='' className='w-100'/>
              </div> 
            </Col>
          </Row>
        </Container>
    </section>
  );
};

export default HeroSection;