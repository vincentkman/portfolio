import React from 'react';
import LandingPage from '../../components/LandingPage';
import Form from '../../components/contact-components/Form'
import { Jumbotron } from 'reactstrap';

import './contact.scss'

function Contact() {
    return (
        <div id='contact' className='contact'>
            <div className='contact-landing-page landing-page'>
                <LandingPage title='CONTACT' route='/portfolio' btn_name='SEE MY PORTFOLIO' />
            </div>
            <div className='contact-container'>
                <h1 className='title'>Contact me</h1>
                <Form />
                <Jumbotron>
                    <p><i class="fas fa-phone-alt"></i>
                        <a href='tel: 07375270289'>07375270289</a></p>
                    <p><i class="fas fa-map-marker"></i>
                        London, UK</p>
                    <p><i class="fas fa-envelope-open"></i>
                        <a href='mailto:vincentkman@yahoo.com'>vincentkman@yahoo.com</a></p>
                </Jumbotron>
            </div>
        </div>
    );
}

export default Contact;
