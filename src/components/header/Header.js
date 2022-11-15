import React from 'react'
import CTA from './CTA'
import './header.css'
import MYimg from "../../assets/me.png"
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Shishir Chhetri</h1>
        <h5 className="text-light">Frontend Developer
        </h5>
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={MYimg} alt="My image" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header