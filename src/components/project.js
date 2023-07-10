import React from 'react';
import './project.scss';

const Project = () => {
  const projects = [
    {
      text: './images/todo.png',
      link: 'https://example.com/project1',
    },
    {
      text: './images/weather.png',
      link: 'https://example.com/project2',
    },
   
  ];

  return (
    <div className="project">
      <div className="container">
        <h2>
          <span>Project</span>
        </h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="project-main">
                <div className="project-main-image">
                    <h4>
                        {project.text}
                    </h4>
                </div>
                <div className="project-main-content">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Project {index + 1}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
