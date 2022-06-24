import React, {useState} from 'react'
import "./SideMenu.css";
import ModalSignUp from '../ModalSignUp/modalSignUp';
import Modal from '../Modal/Modal';

const navLinks = [
    {
        display: 'Home',
        url: '#home'
    },
    {
        display: 'About',
        url: '#about'
    },
    {
        display: 'Services',
        url: '#services'
    },
    {
        display: 'Concerts',
        url: '#concerts'
    },
    {
        display: 'Contact',
        url: '#contact'
    },

];  

const SideMenu = ({setShowModalMenu}) => {
    const [showModalTwo, setShowModalTwo] = useState(false);
    const[showModal, setShowModal] = useState(false);
  return (
    <div className='modal__wrapper__menu'>
        <div className="single__modal__menu">
            <span className='close__modal__menu'>    
              <i className='ri-close-line' onClick={()=> setShowModalMenu(false)}></i>
            </span>

            <div className="nav__menu__side">
                <ul className='nav__list__side'>
                    {navLinks.map((item,index) => (
                        <li className='nav__item__side' key={index}>
                            <a onClick={()=> setShowModalMenu(false)} href={item.url}>{item.display}</a>
                        </li>
                    ))}
                </ul>
            </div> 

             <div className="nav__right__side">
                <button className ='botonos__header__side'onClick={()=>  setShowModal(true)} >Log In</button>
                <button className= 'botonos__header__side'onClick={()=> setShowModalTwo(true)}>Sign Up</button>
            </div>

            
        </div>
            {showModal && <Modal setShowModal={setShowModal} /> }
            {showModalTwo && <ModalSignUp setShowModalTwo={setShowModalTwo} />}
    </div>
  )
}

export default SideMenu;