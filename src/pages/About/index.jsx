import React from 'react';
import LandingPage from '../../components/LandingPage';
import { Jumbotron } from 'reactstrap';
import './about.scss'

function About() {
    return (
        <div id='about' className='about'>
            <div className='about-landing-page landing-page'>
                <LandingPage title='ABOUT' route='/portfolio' btn_name='SEE MY PORTFOLIO' />
            </div>
            <div className='about-container'>
                <h1 className='title'>About me</h1>
                <Jumbotron>
                    <p>Hi, my name is Vincent and I'm a self-taught Front-End Developer and work in Accounting based in London, UK. I enjoy solving real-world problems and turning them into simple, mobile-first ready, fully responsive and beautiful designs. As I code every single day, my passion for web development continues to grow massively. After putting a lot of thought about my future career, I made a big decision and chose to follow my passion in Web Development. I started learning HTML5, CSS3, and JavaScript using the free resources from Free Code Camp, Coursera. When I finally became serious in this field, I immediately signed up for Treehouse Front End Development Techdegree. Learning from the online resources significantly boosted my coding skills and gave me a good foundation for building first-class websites as a Front-End Developer. When I am not coding or trying to position objects correctly, I usually cook, go to the gym or out photographing.
                        </p>
                </Jumbotron>
            </div>
        </div>
    );
}

export default About;
