import React, { useState } from 'react';
import { SkillsData } from './SkillsData.jsx';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Languages', 'Front-end', 'Back-end', 'AI', 'Design'];

  const filteredSkills = activeCategory === 'All'
    ? SkillsData
    : SkillsData.filter(skill => {
      if (Array.isArray(skill.category)) {
        return skill.category.includes(activeCategory);
      }
      return skill.category === activeCategory;
    });

  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <span className="skills-sub-title">Skills</span>
        <h2 className="skills-main-title">What I Do Best</h2>
        <p className="skills-desc">Technologies and Tools I Work With</p>
      </div>

      <div className="skills-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="card-top">
              <h3 className="skill-name">{skill.name}</h3>

              <div className="skills-badges-wrapper" style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                {Array.isArray(skill.category) ? (
                  skill.category.map((cat, i) => (
                    <span key={i} className={`skill-badge ${cat.toLowerCase().replace('-', '')}`}>
                      {cat}
                    </span>
                  ))
                ) : (
                  <span className={`skill-badge ${skill.category.toLowerCase().replace('-', '')}`}>
                    {skill.category}
                  </span>
                )}
              </div>

            </div>
            <div className="card-bottom">
              <span className="skill-percentage">{skill.percentage}</span>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: skill.percentage }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;