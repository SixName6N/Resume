import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">Hello, I'm</p>

        <h1 className="hero-title">
          PHROMAMORN PHONGPRASROED
        </h1>

        {/* ย้าย Style ไปไว้ใน CSS เพื่อให้ทำ Responsive ได้ */}
        <h2 className="hero-tagline">
          Full-Stack Developer • Seeking Internship Opportunities
        </h2>

        <p className="hero-description">
          An Information Technology student passionate about Full-Stack Development,
          creating responsive web applications with intuitive UI/UX and scalable backend systems.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>

          <a
            href="https://github.com/SixName6N"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            
          >
            My GitHub
          </a>
          <h2 id="about"></h2>
          <h2 id="contact"></h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;