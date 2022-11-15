import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import {FaAward,FaUsers} from 'react-icons/fa'
import {GoProject} from 'react-icons/go'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={ME} alt="about-img" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon"/>
              <h5>Experience</h5>
              <small>3+ years of working</small>
            </article>

            <article className="about-card">
              <FaUsers className="about-icon"/>
              <h5>Clients</h5>
              <small>200+ clients worldwide</small>
            </article>

            <article className="about-card">
              <GoProject className="about-icon"/>
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos libero corrupti fugiat, quis error quia reiciendis deleniti perspiciatis officiis rerum doloremque! Cumque, illum dolore. Voluptatibus, quidem sint! Commodi rerum adipisci est, facilis similique 
          </p>

          <a href="#about" className="btn btn-primary">Let's Talk</a>

        </div>

      </div>
    </section>
  );
};

export default About;
