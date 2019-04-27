import React, { Component } from 'react';
import axios from 'axios'
import ProjectCard from './ProjectCard'

class Projects extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    this.readProjects()
  }

  async readProjects() {
    let projects = await axios.get('./projects.json')
    this.setState({projects: projects.data})
  }

  render() {
    let projectsList = this.state.projects.map(project => {
      return(
        <div key={project.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 inline-block">
          <ProjectCard project={project}/>
        </div>
      )
    })
    return (
      <>
        {projectsList}
      </>
    );
  }
}

export default Projects;