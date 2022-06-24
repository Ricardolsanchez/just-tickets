import React, {useState} from 'react';
import './about.css';

import { Container, Row, Col } from 'reactstrap';

import Bogota from './Bogota';  

import Medellin from './Medellin';

import crowdImg from '../../../assets/images/crowd.png';


const About = () => {
 
    const [aboutFilter, setAboutFilter] = useState ('ABOUT')

  return (
    <section id="about">
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h2 className='title__about__main'>About and Next Concerts</h2>
                </Col>
                <Col lg="4" md='3'>
                    <div className="about__btns d-flex flex-column align-items-center">
                        <button className= {`about__btn ${aboutFilter == 'ABOUT' ? 'about__btn-active' : ''}`} onClick={()=>setAboutFilter('ABOUT')}>About Us!</button>
                        <button className= {`about__btn ${aboutFilter == 'BOGOTA' ? 'about__btn-active' : ''}`}  onClick={()=>setAboutFilter('BOGOTA')}>Bogota</button>
                        <button className= {`about__btn ${aboutFilter == 'MEDELLIN' ? 'about__btn-active' : ''}`} onClick={()=>setAboutFilter('MEDELLIN')}>Medellin</button>  
                    </div>
                </Col>
                <Col lg="8" md='9'>
                
                    {
                        aboutFilter == 'ABOUT' && <div className="about__content__wrapper d-flex gap-5">
                      

                        <div className="about__content w-75">
                            <h2>We are the new App created in Bogota Colombia</h2>
                            <p>If you want to be part of the best concerts in your area you can download this app. 
                            We also can provide you the best way to save money for your next concerts, purchasing
                            merchandise and more!</p>

                            <div className="social__links">
                                <h6 className='mb-3'>Connect with us</h6>
                                <span><a href="http://www.twitter.com"><i className='ri-twitter-line'></i></a></span>
                                <span><a href="http://www.instagram.com"><i className='ri-instagram-line'></i></a></span>
                            </div>
                        </div>
                    </div>
                    }

                    {
                        aboutFilter =='BOGOTA' && <Bogota />   
                    }

                    {
                        aboutFilter == 'MEDELLIN' &&  <Medellin />  
                    }

                </Col>
            </Row>
            <div className="img__about">
            <img src={crowdImg} alt='' />
        </div>

        <Row>
                    <Col lg='12'>
                        <h2 className='services__title'>Savings!</h2>
                        <h3 className='services__info'>You can save money throughout the whole year for the next concert</h3>
                    </Col>

                    <Col lg='4' md='6' sm='6'>
                        <div className="single__services">
                            <span className="service__icon">
                                <i className="ri-money-dollar-box-line"></i>
                            </span>
                            <h3 className='Services__last__title'>Your savings would be in the app!</h3>
                        </div>
                    </Col>
                </Row>
        </Container>      
    </section>
  );
};

export default About; 