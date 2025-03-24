import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      
      {/* Add IDs for each section */}
      <section id="hero"><HeroSection /></section>
      <section id="works"><Achievements /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="achievements"><Stats /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><ContactForm /></section>

      <Footer />
    </Router>
  );
}

export default App;
