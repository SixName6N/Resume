// src/components/Skills/Skills.jsx
import React, { useState } from 'react'; 
import { SkillsData } from './SkillsData.jsx'; // ตรวจสอบตัวเล็ก-ใหญ่ของชื่อไฟล์ให้ตรงกับในโฟลเดอร์ด้วยนะครับ
import './Skills.css';

const Skills = () => {
  // 1. แก้ไขค่าเริ่มต้นเป็น 'All' ให้ตรงกับในกลุ่ม categories
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Languages', 'Front-end', 'Back-end', 'AI', 'Design'];

  // 2. ปรับลอจิกการกรองให้ฉลาดขึ้น: รองรับทั้งกรณีที่ category เป็นข้อความธรรมดา และเป็น Array (แบบ JavaScript)
  const filteredSkills = activeCategory === 'All'
    ? SkillsData
    : SkillsData.filter(skill => {
        if (Array.isArray(skill.category)) {
          return skill.category.includes(activeCategory);
        }
        return skill.category === activeCategory;
      });

  return (
    <section className="skills-section" >
      <div className="skills-header">
        <span className="skills-sub-title">Skills</span>
        <h2 className="skills-main-title">What I Do Best</h2>
        <p className="skills-desc">Technologies and Tools I Work With</p>
      </div>

      {/* ส่วนปุ่ม Filter */}
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

      {/* ส่วนการ์ดแสดงผลทักษะ */}
      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="card-top">
              <h3 className="skill-name">{skill.name}</h3>
              
              {/* 3. เปลี่ยนจาก skill.badge มาสร้างป้ายอัตโนมัติจาก category แทน สะดวกกว่าเยอะครับ */}
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