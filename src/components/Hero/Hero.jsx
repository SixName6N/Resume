import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

          <p className="hero-subtitle">
            Hello, I'm
          </p>
          <h1 className="hero-title">
            PHROMAMORN PHONGPRASROED ฟหดฟหดฟหดฟด
          </h1>
          <h2 style={{color:"var(--accent)",fontSize:"22px"}}>
            Full-Stack Developer • Seeking Internship Opportunities
          </h2>
          <p className="hero-description">
              An Information Technology student passionate about Full-Stack Development, creating responsive web applications with intuitive UI/UX and scalable backend systems.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="">
              <button className="btn-primary">
                <p>Get in Touch</p>
              </button>
            </a>

            <a href="#projects" className="">
              <button className="btn-secondary">
                <p>View Work</p>
              </button>
            </a>
          </div>
      </div>

      

    </section>
  );
}

export default Hero;