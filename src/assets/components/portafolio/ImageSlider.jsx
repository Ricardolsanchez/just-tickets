import React, {useState} from 'react';
import './imageSlider.css';
import { dataSlider } from './dataSlider';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import PickUpSeat from '../PickUpSeat/modalPickUp';


const ImageSlider = ({ slides }) => {
const [current, setCurrent] = useState(0);
const length = slides.length;

const[showModalPickUp, setShowModalPickUp] = useState(false);


const nextSlide = () => {
  setCurrent(current === length -1 ? 0 : current + 1)
};

const prevSlide = () => {
  setCurrent(current === 0 ? length  -1 : current - 1)
};

if (!Array.isArray(slides) || slides.length <= 0) {
  return null;
}
  
return (
    <section className='slider' id='concerts'>
      <h2 className='Recent-concerts'>Concerts</h2>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {dataSlider.map((slide, index) => {
        return(
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (<img src={slide.image} alt="Bogota & Medellin" className='image'/>)}
          </div> 
        );
      })}

      <div className="portfolio__content">
        <h5 className='bogmed'>Bogota & Medellin</h5>
      </div>

      <button className='see__aval' onClick={()=> setShowModalPickUp(true)}>See Avalibility</button>

      {showModalPickUp && <PickUpSeat setShowModalPickUp={setShowModalPickUp} />}

    
    </section> 
  );
};

export default ImageSlider;