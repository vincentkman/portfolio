import React from 'react';
import { items } from './projectData';

let ProjectContext = React.createContext();
let ProjectConsumer = ProjectContext.Consumer;

class ProjectProvider extends React.Component {
    constructor() {
        super();
        this.state = {
            projectItems: []
        }
    }

    componentDidMount() {
        this.setProjects(items)
    }

    setProjects = (projects) => {
        let projectItems = projects.map(item => {
            let project = { ...item };
            return project;
        });
        this.setState({
            projectItems,
        });
    }

    getProject = (id) => {
        const tempProjects = [...this.state.projectItems];
        const project = tempProjects.find(item => item.id === id);
        return project;
    }

    render() {
        return (
            <>
                <ProjectContext.Provider value={{
                    ...this.state,
                    getProject: this.getProject, 
                }}>
                    {this.props.children}
                </ProjectContext.Provider>
            </>
        )

    }
}

export { ProjectProvider, ProjectConsumer, ProjectContext };