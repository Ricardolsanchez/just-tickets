import React, {useState} from 'react';
import './Modal.css';



const Modal = ({setShowModal}) => {
    
  return (
        <div className="modal__wrapper">
          <div className="single__modal__log">
            <span className='close__modal__log'>
              <i className='ri-close-line' onClick={()=> setShowModal(false)}></i>
            </span>
            <div className="buttonlog">
                <button className='btn__new__modal'>Log In</button>
            </div>
              <h6 className='title'>Log in</h6>
              <p className='terms'>Enter your details below to contine</p>
            
            <div className="text__main">
              <h5 className='name'>Username/Email</h5>
              <span className='envelope'><i class="ri-mail-line"></i></span>
              <input type='text' placeholder=''/>
            </div>
            <div className="password__section">
              <h5 className='password'>Password</h5>
              <span><i class="ri-lock-2-line"></i></span>
                <input type='password'/>
            </div>
          </div>
        </div>  
    );
};
export default Modal;