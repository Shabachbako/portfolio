import React, { useEffect, useState } from "react";
import "./Stats.css";
import { FaTrophy, FaBriefcase, FaUsers, FaCrown } from "react-icons/fa";

const Stats = () => {
  const statsData = [
    { icon: <FaTrophy />, value: 14, suffix: "%", label: "Job Achievements" },
    { icon: <FaBriefcase />, value: 50, suffix: "+", label: "Years of Experience" },
    { icon: <FaUsers />, value: 1500, suffix: "", label: "Happy Clients" },
    { icon: <FaCrown />, value: 50, suffix: "+", label: "Projects Completed" },
  ];

  // State to track animated values
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.value) {
            newCounts[index] = Math.min(newCounts[index] + Math.ceil(stat.value / 50), stat.value);
          }
          return newCounts;
        });
      }, 30);
    });

    // Clear intervals after animation completes
    setTimeout(() => {
      intervals.forEach((interval) => clearInterval(interval));
    }, 2000);

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <section className="stats">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-icon">{stat.icon}</div>
            <h2 className="stat-value">{counts[index]}{stat.suffix}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
