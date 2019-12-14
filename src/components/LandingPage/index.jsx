import React from 'react';
import Carousel from '../Carousel';
import { Link } from 'react-router-dom';
import './landing-page.scss';

function LandingPage({ children, title, subtitle, route, btn_name }) {
    return (
        <div className='landing-page-inner'>
            <h1 className='landing-page-inner-item'>{title}</h1>
            <p className='landing-page-inner-item'>{subtitle}</p>
            <Link to={route}>
                <button className="landing-page-inner-item-btn btn-default"><h2>{btn_name}</h2></button>
            </Link>
            <div className='landing-page-inner-item-carousel'>
                <Carousel />
            </div>
            {children}
        </div>
    );
}

export default LandingPage;