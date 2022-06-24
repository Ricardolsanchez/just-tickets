import React from 'react'
import './modalSignUp.css'
import ImgGoogle from '../../images/google.png';

const ModalSignUp = ({setShowModalTwo}) => {
   
  return (
    <div className="modal__wrapper__Sign">
        <div className="single__modal__Sign">
            <div className="buttonSign">
                <button className='voton__new__modal__Sign'>Sign Up</button>
                <img src={ImgGoogle} alt=''></img>
            </div>
            <div className="close__modal__Sign">
                 <i className='ri-close-line' onClick={()=> setShowModalTwo(false)}></i>
            </div> 

            <div className="modal__first__titles">
                <h6 className='title'>Sign Up</h6>
                <p className='terms'>Enter your details below</p>
            </div>

            <div className="full__name">
                <h5 className='name-sign'>Full Name</h5>
                <span className='name-remix'><i class="ri-shield-user-fill"></i></span>
                <input type='text' placeholder=''/>
            </div>

            <div className="phone__number">   
                <h5 className='titlephone__new'>Phone number</h5>
                <span className='phone-remix'><i class="ri-phone-fill"></i></span>
                <input type='text' placeholder='' className='phone__input'/>
            </div> 

            <div className="New__password__sign">   
                <h5 className='titlephone__new__password'>New Password</h5>
                <span className='password-remix'><i class="ri-lock-fill"></i></span>
                <input type='text' placeholder='' className='phone__input'/>
            </div>

            <div className="New__email__sign">   
                <h5 className='titlephone__new__email'>Email Address</h5>
                <span className='password-email'><i class="ri-mail-line"></i></span>
                <input type='text' placeholder='' className='phone__input'/>
            </div>
        </div>
    </div>
  )
}

export default ModalSignUp