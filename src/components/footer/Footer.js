import React from 'react'
import './footer.css'
import {AiFillInstagram,AiFillTwitterCircle,AiFillFacebook} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <h2>ShishirChhetri</h2>
        </div>

        <ul className="footer-links">
          <li><a href="# ">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer-socials">
          <a href="https://facebook.com"><AiFillFacebook/></a>
          <a href="https://instagram.com"><AiFillInstagram/></a>
          <a href="https://twitter.com"><AiFillTwitterCircle/></a>
        </div>

        <div className="footer-copy">
          <p><strong>&copy; </strong> ShishirChhetri {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer