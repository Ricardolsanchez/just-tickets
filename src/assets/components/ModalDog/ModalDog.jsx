import React from 'react';
import './ModalDog.css';
import ImgDog from '../../images/soldOUT.jpg';

const ModalDog = ({setShowDogModal}) => {
  return (
    <div className="modal__wrapper__Dog">
        <div className="single__modal__Dog">
            <h2 className='title__dog'>Congrats! we do have availability</h2>
            <img src={ImgDog} alt=""/>
            <p className='dog__message'>You would be redirected to a new page in a while</p>
            <h3 className='visitor__number'>Waitlist:</h3>
            <h4 className='number__Dog'>Visitor 34567788</h4>
            <span className='close__modal'>
              <i className='ri-close-line' onClick={()=> setShowDogModal(false)}></i>
            </span>
        </div>
    </div>
  )
}
  
export default ModalDog;