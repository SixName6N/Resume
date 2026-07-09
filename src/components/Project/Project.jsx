// src/components/Projects/Projects.jsx
import React from 'react';
import { projectsData } from './projectsData.jsx';
import './Project.css';

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>
      
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            {/* ส่วนรูปภาพ */}
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            
            {/* ส่วนเนื้อหา */}
            <div className="project-content">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              {/* ส่วนป้าย Tag เทคโนโลยี */}
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span className="project-tag" key={index}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;