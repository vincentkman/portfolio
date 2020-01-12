import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

function Home() {
    return (
        <div id='home' className='home'>
            <div className='home-title'>
                <h1>Hello, I'm Vincent K Man</h1>
                <p >Full Stack Developer</p>
            </div>
            <Link to='/about' className='home-link'>
                <button className='home-link-btn'><h2>EXPLORE</h2></button>
            </Link>
        </div>
    );
}

export default Home;