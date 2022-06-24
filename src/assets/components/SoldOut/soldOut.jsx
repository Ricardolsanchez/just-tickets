import React from 'react'
import './soldOut.css';
import Imgsold from '../../images/soldout.png';


const soldOut = ({setShowSold}) => {
  return (
    <div className='modal__wrapper__Sold'>
        <div className="single__modal__Sold">
            <div className="main__title__sold">
                <h1 className='main__sold'>SOLD OUT</h1>
                <img src={Imgsold} alt=""/>
                <p className='message'>Sorry! you have to be faster next time</p>
            </div>
            <span className='close__modal'>
              <i className='ri-close-line' onClick={()=> setShowSold(false)}></i>
            </span>
        </div>
    </div>
  )
}

export default soldOut