import React from "react";
import "./Skills.css";

// Import skill images
import figmaIcon from "../assets/figma.png";
import sketchIcon from "../assets/html.png";
import xdIcon from "../assets/css.png";
import wordpressIcon from "../assets/wp.jpg";
import reactIcon from "../assets/react.jpg";
import javascriptIcon from "../assets/js.jpg";
import githubIcon from "../assets/githubb.png";
import githubDesktopIcon from "../assets/githubdesktop.png";

const skillsData = [
  { name: "Figma", image: figmaIcon, percentage: "80%" },
  { name: "HTML", image: sketchIcon, percentage: "80%" },
  { name: "CSS", image: xdIcon, percentage: "85%", highlight: true },
  { name: "WordPress", image: wordpressIcon, percentage: "85%" },
  { name: "React", image: reactIcon, percentage: "95%" },
  { name: "JavaScript", image: javascriptIcon, percentage: "82%" },
  { name: "Github", image: githubIcon, percentage: "97%" },
  { name: "Github Desktop", image: githubDesktopIcon, percentage: "98%" },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills-title">My <span className="highlight">Skills</span></h2>
      <p className="skills-description">
        We put your ideas and thus your wishes in the form of a unique web project that 
        inspires you and your customers.
      </p>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className={`skill-card ${skill.highlight ? "highlighted" : ""}`}>
            <img src={skill.image} alt={skill.name} className="skill-icon" />
            <p className="skill-percentage">{skill.percentage}</p>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
