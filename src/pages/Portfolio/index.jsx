import React from 'react';
import LandingPage from '../../components/LandingPage';
import { Jumbotron } from 'reactstrap';
import AllProjects from '../../components/portfolio-components/AllProjects';
import './portfolio.scss';

function Portfolio() {
    return (
        <div className='portfolio'>
            <div className='portfolio-landing-page landing-page'>
                <LandingPage title='PORTFOLIO' route='/contact' btn_name='CONTACT ME' />
            </div>
            <h1 className='title'>My Portfolio</h1>
            <Jumbotron className='portfolio-jumbotron'>
                <AllProjects />
            </Jumbotron>
        </div>
    )
}

export default Portfolio;
