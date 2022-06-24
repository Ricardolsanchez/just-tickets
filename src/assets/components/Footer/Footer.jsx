import React from 'react'

import { Container } from 'reactstrap';

import './Footer.css'

const Footer = () => {
  return (
    <footer className='pb-4'>
        <Container className='text-center footer'>
            <p>Copyright 2022, Developed by Ricardo Sánchez.. All rights Reserved</p>
        </Container>
    </footer>
  );
};

export default Footer;