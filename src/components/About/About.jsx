import "./About.css";
import wa1 from "../../assets/wa1.png";
import { FaCode, FaLaptopCode, FaPalette, FaJava } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { AiOutlineMail } from "react-icons/ai";
import { TbSettingsCode } from "react-icons/tb";
import { AiOutlineDatabase } from "react-icons/ai";
import { BiPalette } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";






import SkillBars from "./SkillBars";
import "./ExperienceTimeline.css"

function About() {
  return (
    <section className="about container" >
      <h2></h2>
      <div className="about-contact">

        <div className="contact">
          <h3>Contact</h3>
          <p>
            <AiOutlineMail className="icon-contact" size={20} color="var(--wood)"/> <span>6810210573@psu.ac.th</span>
          </p>
          <p>
            <SlLocationPin className="icon-contact" size={20} color="var(--wood)"/> <span>Hat Yai, Songkhla, Thailand</span>
          </p>
          <p>
            <LiaPhoneVolumeSolid className="icon-contact" size={20} color="var(--wood)"/> <span>065-0744-252</span>
          </p>
          <p>
            <RiInstagramLine className="icon-contact" size={20} color="var(--wood)"/> <span>Sixname6n_</span>
          </p>
          
          
        </div>
        
        <div className="skills">
          <h3>Core Skills</h3>
          <SkillBars
            skills={[
              { name: "Frontend", value: 80 },
              { name: "Backend", value: 75 },
              { name: "DevOps", value: 60 },
            ]}
          />
        </div>

      </div>

      <div className="about-content">
        <p className="section-subtitle">About Me</p>
        <h2 className="section-title">Who am I?</h2>
        <p className="about-description">
         I'm an Information Technology student at Prince of Songkla University. I enjoy developing modern web applications and continuously improving my skills in both front-end and back-end development. I have experience working with React, Java, PHP, SQL, and MySQL to build responsive, user-friendly, and efficient web applications. My goal is to become a Full-Stack Developer by expanding my technical knowledge and gaining real-world experience through an internship.
        </p>

        <div className="about-skills">
          <div className="about-card">
            <FaCode />
            <span>Front-end Development</span>
          </div>

          <div className="about-card">
            <TbSettingsCode />
            <span>Back-end Development</span>
          </div>

          <div className="about-card">
            <AiOutlineDatabase />
            <span>Database Management</span>
          </div>

          <div className="about-card">
            <BiPalette />
            <span>UI / UX Design</span>
          </div>
        </div>

        <div id="experience"></div>
        
        <div className="exp-timeline">

            <h2 className="exp-timeline__title">Internship Experience</h2>

            <div className="exp-timeline__list">
              <div className="exp-timeline__item">
                <span className="exp-timeline__dot" />
                <div className="exp-timeline__card">
                  <h3 className="exp-timeline__role">IT Intern</h3>
                  <h4 className="exp-timeline__role"></h4>
                  <p className="exp-timeline__meta">
                    D.P Computer Co., Ltd. <span className="exp-timeline__dash">•</span> 28 Febuary 2024 - 27 April 2024

                  </p>
                  <ul className="exp-timeline__points">
                    <li>Diagnosed and repaired computer hardware and software issues.</li>
                    <li>Assembled and configured computer systems according to customer requirements.</li>
                    <li>Performed maintenance and troubleshooting for printers and related devices.</li>
                    <li>Provided technical support and assistance to customers.</li>
                  </ul>
                </div>
              </div>

              <div className="exp-timeline__item">
                  <span className="exp-timeline__dot" />

                  <div className="exp-timeline__card">
                    <h3 className="exp-timeline__role">Sales Assistant, IT Intern</h3>
                    <p className="exp-timeline__meta">
                      D.P Computer Co., Ltd. <span className="exp-timeline__dash">•</span> 8 July 2022 - 17 September 2022
                    </p>
                    <ul className="exp-timeline__points">
                      <li>Assisted customers in selecting computer products and accessories.</li>
                      <li>Provided product recommendations and basic technical support.</li>
                      <li>Assisted technicians with basic computer assembly and maintenance tasks.</li>
                      <li>Supported basic troubleshooting of computer systems.</li>
                    </ul>
                  </div>

              </div>

            </div>

        </div>
        
        <div id="skills"></div>

      
      </div>
            
      
    </section>
  );
}

export default About;