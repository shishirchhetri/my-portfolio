import React from "react";
import "./portfolio.css";
let module = require('./data')
let data = module.data

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {data.map((data) => {
          return (
            <article key={data.id} className="portfolio-item">
              <div className="portfolio-item-img">
                <img src={data.img} alt={data.title} />
              </div>
              <h3 className="portfolio-title">{data.title}</h3>
              <div className="portfolio-item-link">
                <a href={data.github} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href={data.demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
