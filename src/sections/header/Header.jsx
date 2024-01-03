import React, {useEffect, useState} from 'react'
import './header.css'
import Logo from '../../images/Logo.jpeg'

const Header = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const [show, setShow] = useState(false);
  const handleClick = ()=>{
    console.log("yes")
    if(width <= breakpoint){
      setShow(!show);
    }
  }
    

  return (
    <div class="header">
    <div className='logo-img'>
      <img href="#default" class="logo" src={Logo} onClick={handleClick} />
    </div>
  
    <div class="header-right" style={show ? {display: "none"} : {display: "block"}}>
    <a href="#experience">// experience</a>
    <a href="#skills">// skills</a>
    <a href="#projects">// projects</a>
    <a href="#contact">// contact</a>
    </div>
    </div>
  )
}

export default Header