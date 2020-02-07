import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import LandingPage from '../../components/LandingPage';
import { ProjectContext } from '../../context';
import Loading from '../../components/Loading';
import './portfolio-info.scss';

function PortfolioInfo() {
    const { id } = useParams();
    const { getProject } = useContext(ProjectContext);
    const project = getProject(id);
    if (!project) {
        return <Loading />;
    }
    const { img, title, github_link, live_link, skill1, skill2, skill3, skill4, skill5 } = project;
    return (
        <div className='portfolio-info'>
            <div className='portfolio-info-landing-page landing-page'>
                <LandingPage title='PORTFOLIO' route='/portfolio' btn_name='HOME' />
            </div>
            <>
                <h2 className='title'>{title}</h2>
                <div className='portfolio-info-btn'>
                    <Link to='/portfolio'>
                        <button className='portfolio-info-btn-first btn-default'>
                            Back to Portfolio
                                    </button>
                    </Link>
                    <button className='portfolio-info-btn-second btn-default'>
                        <a href={github_link} target="_blank" rel="noopener noreferrer" className='btn-default'>Github</a>
                    </button>
                    <button className='portfolio-info-btn-third btn-default'>
                        <a href={live_link} target="_blank" rel="noopener noreferrer" className='btn-default'>See Live</a>
                    </button>
                </div>
                <div className='portfolio-info-detail'>
                    <div>
                        <img src={`../${img}`} alt="single project" className='portfolio-info-detail-img' />
                    </div>
                    <div className='portfolio-info-detail-box'>
                        {/* <p className='portfolio-info-detail-box-description'>{description}</p> */}
                    </div>
                </div>
                <h2 className='portfolio-info-detail-box-title'>Skills Used</h2>
                <div className='portfolio-info-detail-box-icon'>
                    <i className={skill1}></i>
                    <i className={skill2}></i>
                    <i className={skill3}></i>
                    <i className={skill4}></i>
                    <i className={skill5}></i>
                </div>
            </>
        </div>
    );
}

export default PortfolioInfo;