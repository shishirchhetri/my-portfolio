import React from 'react'
import './services.css'
import {TiTick} from 'react-icons/ti'

const Services = () => {
  return (
   <section id="services">
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services-container">

      <div className="services-inner">
      <div className="services-header  ">
        <h3>UI/UX Design</h3>
        <div className="services-content">
          <ul>
            <li><TiTick className='services-icon'/> Lorem ipsum dolor sit amet consectetur.</li>
            <li><TiTick className='services-icon'/> Lorem ipsum dolor sit amet consectetur.</li>
            <li><TiTick className='services-icon'/> Lorem ipsum dolor sit amet consectetur.</li>
            <li><TiTick className='services-icon'/> Lorem ipsum dolor sit amet consectetur.</li>
            <li><TiTick className='services-icon'/> Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>
      </div>
      </div>

<div className="services-inner">
      <div className="web-development services-header ">
        <h3>Web Development</h3>
        <div className="services-content">
          <ul>
            <li><TiTick className='services-icon'/> Lorem ipsum dolor sit amet consectetur.</li>
            <li><TiTick className='services-icon'/> Lorem ipsum dolor sit amet consectetur.</li>
            <li><TiTick className='services-icon'/> Lorem ipsum dolor sit amet consectetur.</li>
            <li><TiTick className='services-icon'/> Lorem ipsum dolor sit amet consectetur.</li>
            <li><TiTick className='services-icon'/> Lorem ipsum dolor sit amet consectetur.</li>
            <li><TiTick className='services-icon'/> Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>
      </div>
      </div>

<div className="services-inner">
      <div className="content-creation services-header">
        <h3>Content Creation</h3>
        <div className="services-content">
          <ul>
            <li><TiTick className='services-icon'/> Lorem ipsum dolor sit amet consectetur.</li>
            <li><TiTick className='services-icon'/> Lorem ipsum dolor sit amet consectetur.</li>
            <li><TiTick className='services-icon'/> Lorem ipsum dolor sit amet consectetur.</li>
            <li><TiTick className='services-icon'/> Lorem ipsum dolor sit amet consectetur.</li>
            <li><TiTick className='services-icon'/> Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
   </section>
  )
}

export default Services