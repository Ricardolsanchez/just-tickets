import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './services.css';
import coinImg from '../../images/coin.png';
import lupaImg from '../../images/lupa.png';
import whiteImg from '../../images/blanco.jpg';
import cellPhome from '../../images/cell.png'



const Services = () => {
  return (
        <section id='services'> 
            <Container>
                <div className='titles'>
                  <h1 className='service__title'>You can save more money!</h1>
                    <h3 className='service__title__small'>You can save with us in a safety way</h3>
                    
                    <h2 className='service__title__lupa'>You can also look up for local and big concerts</h2>
                    <h3 className='service__title__lupa__small'>using the search bar and the city</h3> 
                </div>
                
                <div className='refer__img'>
                    <img src={cellPhome} alt=""/>
                </div>

                    <div className="img__Coin w-100">
                        <img src={coinImg} alt='' className='w-50'/>
                    </div>

                    <div className="img__white w-100">
                        <img src={whiteImg} alt='' className='w-100'/>
                    </div> 
            </Container>
         </section>
  );
};


export default Services;