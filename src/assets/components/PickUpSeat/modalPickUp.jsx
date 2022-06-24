import React, {useState} from 'react';
import './modalPickUp.css';
import SoldOut from '../SoldOut/soldOut';
import ModalDog from '../ModalDog/ModalDog';

const ModalPickUp = ({setShowModalPickUp}) => {
  const [show, setShow] = useState(true)
  const [showModalSold, setShowSold] = useState(false);
  const [showModalSoldDog, setShowDogModal] = useState(false);
 
  return (
      <div className="modal__wrapper__Pickup">
          <div className="single__modal">
            <span className='close__modal__pickP'>
              <i className='ri-close-line' onClick={()=> setShowModalPickUp(false)}></i>

              <div className="menu__close">

                  <button onClick={() => setShow(true)}>All</button>

                  <button onClick={()=>setShow(false)}>Bogota</button>   
              
              </div>
            
                <div className='concert__option'>
                { show ?  <button className='btns concert__option'  onClick={()=> setShowSold(true)}>Bad Bunny - Medellin</button> : null}
                { show ?  <button className='btns concert__option' onClick={()=> setShowSold(true)}>Daddy Yankee - Medellin</button> : null}

    

                 <button className='btns concert__option' onClick={()=> setShowDogModal(true)}>Gorillaz - Bogota</button> 
                 <button className='btns concert__option'onClick={()=> setShowDogModal(true)}>Dua Lipa - Bogota</button>  
                 <button className='btns concert__option'onClick={()=> setShowSold(true)}>Harry Styles - Bogotá</button>
                </div>

                {showModalSold && <SoldOut setShowSold={setShowSold} /> }
                {showModalSoldDog && <ModalDog setShowDogModal={setShowDogModal} />}
             </span>
         </div>
    </div>
  );
};


export default ModalPickUp;