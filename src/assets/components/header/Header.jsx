import React, {useState, useEffect} from 'react';
import { Container } from 'reactstrap';
import './Header.css';
import Currency from '../Currency/Currency';
import Modal from '../Modal/Modal';
import ModalSignUp from '../ModalSignUp/modalSignUp'
import SideMenu from '../SideMenu/SideMenu';

 
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

const Header = (props) => {

    const [showModalTwo, setShowModalTwo] = useState(false);
    const[showModal, setShowModal] = useState(false);
    const[showModalMenu, setShowModalMenu] = useState(false);
    return (
        <header className="header">
            <Container>
                <div className="navigation d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h5>Justickets</h5>
                    </div>

                <input type='text' placeholder='Search...' className='search__bar'></input> 

                    <div className="nav__menu">
                        <ul className='nav__list'>
                            {navLinks.map((item,index) => (
                                <li className='nav__item' key={index}>
                                    <a href={item.url}>{item.display}</a>
                                </li>
                            ))}
                        </ul>
                    </div>    
                        

                    <div className="nav__right d-flex align-item-center gap-4">
                        <button className ='botonos__header' onClick={()=> setShowModal(true)}>Log In</button>
                        <button className= 'botonos__header' onClick={()=> setShowModalTwo(true)}>Sign Up</button>
                    
                    {showModal && <Modal setShowModal={setShowModal} /> }

                    {showModalTwo && <ModalSignUp setShowModalTwo={setShowModalTwo} />}
                    
                        <span className="mobile__menu">
                            <i className='ri-menu-5-line' onClick={()=> setShowModalMenu(true)}></i>
                        </span>

                    {showModalMenu && <SideMenu setShowModalMenu={setShowModalMenu} />}
                    </div>
                </div>
            </Container>
        </header>
        );
    };

    export default Header;