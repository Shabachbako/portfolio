import React from "react";
import "./Skills.css";

// Import skill images
import figmaIcon from "../assets/figma.png";
import sketchIcon from "../assets/sketch.jpg";
import xdIcon from "../assets/xd.jpg";
import wordpressIcon from "../assets/wp.jpg";
import reactIcon from "../assets/react.jpg";
import javascriptIcon from "../assets/js.jpg";

const skillsData = [
  { name: "Figma", image: figmaIcon, percentage: "92%" },
  { name: "Sketch", image: sketchIcon, percentage: "80%" },
  { name: "XD", image: xdIcon, percentage: "85%", highlight: true },
  { name: "WordPress", image: wordpressIcon, percentage: "99%" },
  { name: "React", image: reactIcon, percentage: "89%" },
  { name: "JavaScript", image: javascriptIcon, percentage: "93%" },
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
