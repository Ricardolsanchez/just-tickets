import React from 'react'
import './Contact.css'

import { Container,Row,Col } from 'reactstrap'

import Form from '../form/Form';

const Contact = () => {
  return (
    <section id='contact'>
        <Container>
            <Row>
            
            <div className="wrapped__total">
                    <Col lg='12' className='mb-5'>
                        <h2 className="getIN">Get in Touch</h2>
                    </Col>

                    <Col lg='6' md ='6'>
                        <div className="contact__info-container d-flex align-items-center gap-5">
                            <div className="single__info-box w-50">
                                <h6>Address</h6>
                                <p>Bogota, Colombia</p>
                            </div>
                            
                            <div className="single__info-box w-50">
                                <h6>Phone</h6>
                                <p>+880 123 456 8890</p>
                            </div>
                        </div>
                        
                        <div className="contact__info-container d-flex align-items-center gap-5">
                            <div className="single__info-box w-50">
                                <h6>Email</h6>
                                <p>example@gmail.com</p>
                            </div>
                            
                            <div className="single__info-box w-50">
                                <h6>Location</h6>
                                <p>Cl. 120 70 19, Bogota</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <Form />
                    </Col>
                </div>
            </Row>
        </Container>
    </section>
  );
};

export default Contact