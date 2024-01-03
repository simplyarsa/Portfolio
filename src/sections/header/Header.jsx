import React from 'react'
import './header.css'
import Logo from '../../images/Logo.jpeg'

const Header = () => {

  // add drawer and make it responsive

  

  return (
    <div class="header">
    <img href="#default" class="logo" src={Logo} />
    <a href="#experience">// experience</a>
    <a href="#skills">// skills</a>
    <a href="#projects">// projects</a>
    <a href="#contact">// contact</a>
    </div>
  )
}

export default Header