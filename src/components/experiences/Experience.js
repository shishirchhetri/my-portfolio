import React from "react";
import "./experience.css";
import { MdVerified } from "react-icons/md";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experiences</h2>
      <div className="container exp-container">
        <div className="front-end">
          <h2>Frontend Development</h2>
          <div className="exp-content">
          <article className="exp-detail">
            <h4><MdVerified className="verified-icon"/>HTML</h4>
            <small className="text-light">Experienced</small>
          </article>

          <article className="exp-detail">
            <h4><MdVerified className="verified-icon"/>CSS</h4>
            <small className="text-light">Experienced</small>
          </article>

          <article className="exp-detail">
            <h4><MdVerified className="verified-icon"/>Tailwind</h4>
            <small className="text-light">Experienced</small>
          </article>

          <article className="exp-detail">
            <h4><MdVerified className="verified-icon"/>Bootstrap</h4>
            <small className="text-light">Experienced</small>
          </article>

          <article className="exp-detail">
            <h4><MdVerified className="verified-icon"/>JavaScript</h4>
            <small className="text-light">Experienced</small>
          </article>

          <article className="exp-detail">
            <h4><MdVerified className="verified-icon"/>React</h4>
            <small className="text-light">Experienced</small>
          </article>
          </div>
          
        </div>

        <div className="back-end">
          <h2>Backend Development</h2>
          <div className="exp-content">
          <article className="exp-detail">
            <h4><MdVerified className="verified-icon"/>Node JS</h4>
            <small className="text-light">Intermediate</small>
          </article>

          <article className="exp-detail">
            <h4><MdVerified className="verified-icon"/>MongoDB</h4>
            <small className="text-light">Beginner</small>
          </article>

          <article className="exp-detail">
            <h4><MdVerified className="verified-icon"/>PHP</h4>
            <small className="text-light">Intermediate</small>
          </article>

          <article className="exp-detail">
            <h4><MdVerified className="verified-icon"/>MySQL</h4>
            <small className="text-light">Beginner</small>
          </article>

          <article className="exp-detail">
            <h4><MdVerified className="verified-icon"/>Python</h4>
            <small className="text-light">Intermediate</small>
          </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
