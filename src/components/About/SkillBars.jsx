import React, { useEffect, useRef, useState } from "react";
import "./SkillBars.css";

export default function SkillBars({ skills, title = "" }) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skillbars" ref={containerRef}>
      {title && <h3 className="skillbars__title">{title}</h3>}

      <div className="skillbars__list">
        {skills.map((skill, i) => (
          <SkillRow
            key={skill.name}
            name={skill.name}
            value={skill.value}
            visible={visible}
            delay={i * 150}
          />
        ))}
      </div>
    </div>
  );
}

function SkillRow({ name, value, visible, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    const startTimeout = setTimeout(() => {
      const duration = 1100;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * value));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [visible, value, delay]);

  return (
    <div className="skillbars__row">
      <div className="skillbars__labels">
        <span className="skillbars__name">{name}</span>
        <span className="skillbars__percent">{count}%</span>
      </div>

      <div className="skillbars__track">
        <div
          className="skillbars__fill"
          style={{
            width: visible ? `${value}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        >
          <span className="skillbars__shine" />
        </div>
      </div>
    </div>
  );
}