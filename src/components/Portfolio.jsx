import React from "react";
import "./Portfolio.css";

// Import images from assets (if using src/assets folder)
import project1 from "../assets/cryptcorn.png";
import project2 from "../assets/banqio.png";
import project3 from "../assets/dashboard.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "CRYPTCORN WEBSITE- A website explaining benefits of cryptocurrency",
      date: "March 24, 2025",
      readTime: "React.Js",
      image: project1,
      link: "https://cryptcorn.netlify.app/",
    },
    {
      id: 2,
      title: "BANQIO- A banking website",
      date: "March 18, 2025",
      readTime: "React.Js",
      image: project2,
      link: "https://banqio.netlify.app/",
    },
    {
      id: 3,
      title: "CRYPTO DASHBOARD- A dashboard for crypto-currency assets",
      date: "March 12, 2025",
      readTime: "React.Js",
      image: project3,
      link: "https://getrichdazhboard.netlify.app",
    },
  ];

  return (
    <section className="portfolio-section">
      <h2 className="section-title">My Recent Work</h2>
      <div className="portfolio-container">
        {projects.map((project) => (
          <div className="portfolio-card" key={project.id}>
            <a href={project.link} className="portfolio-image">
              <img src={project.image} alt={project.title} />
            </a>
            <div className="portfolio-info">
              <p className="portfolio-meta">
                {project.date} • {project.readTime}
              </p>
              <h3 className="portfolio-title">
                <a href={project.link}>{project.title}</a>
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all">
        <a href="#" className="view-all-btn">View All →</a>
      </div>
    </section>
  );
};

export default Portfolio;
