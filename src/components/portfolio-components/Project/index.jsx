import React from 'react';
import { Link } from 'react-router-dom';
import './project.scss';

function Project({ id, img, title }) {
    return (
        <>
            <div className='all-projects-container'>
                <div className='all-projects-item'>
                    <img src={img} alt="project" className='all-projects-item-img img' />
                    <div className='all-projects-item-overlay overlay'>
                        <Link
                            to={`/portfolio/${id}`}
                        >
                            <i className="fas fa-search all-projects-item-overlay-icon icon"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='all-projects-item-detail detail'>
                <p>{title}</p>
            </div>
        </>
    );
}

export default Project;


