import React from 'react';
import { ProjectConsumer } from '../../../context';
import Project from '../Project';
import './all-projects.scss';


function AllProjects() {
    return (
        <ProjectConsumer>
            {allProjects => {
                let {projectItems} = allProjects;
                return (
                    <div className='all-projects'>
                        {
                            projectItems.map(project => (
                                <Project
                                    key={project.id}
                                    {...project}
                                />
                            ))
                        }
                    </div>
                );
            }}
        </ProjectConsumer>
    )
}

export default AllProjects
