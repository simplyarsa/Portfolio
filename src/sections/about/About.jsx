import React, { useRef } from 'react'
import './about.css'
// import VanillaTilt from 'vanilla-tilt';
// import Tilt from 'react-tilt'
// import { FaDiscord, FaGithub } from 'react-icons/fa';
// import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import linkedin from "../../images/linkedin.svg"
import github from "../../images/github.svg"
import instagram from "../../images/instagram.svg"
import gmail from "../../images/gmail.svg"
import discord from "../../images/discord.svg"
import { Link } from 'react-router-dom';

const About = () => {

  const nameRef = useRef()
  console.log("nameref", nameRef.current)

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  const handleMouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 60);
  }

  return (
    <div className='details'>
      <div className='text'>
        Hi, I am <h1 className='about-main' onMouseOver={handleMouseover} data-value="ARSALAN">ARSALAN</h1>
        <div className='about-text'>
          <p>Developer</p>
          <p>Developer</p>
          <p>Developer</p>
          {/* &ensp; random text <br /> */}
        </div>
        <div className='socials'>
          <a href='https://reactrouter.com/en/main/components/link' ><img src={linkedin} className='logoimg' /></a>
          <a href='https://reactrouter.com/en/main/components/link' ><img src={github} className='logoimg' /></a>
          <a href='https://reactrouter.com/en/main/components/link' ><img src={discord} className='logoimg' /></a>
          <a href='https://reactrouter.com/en/main/components/link' ><img src={gmail} className='logoimg' /></a>
          <a href='https://reactrouter.com/en/main/components/link' ><img src={instagram} className='logoimg' /></a>
        </div>
      </div>
      <div>
        <img class="imgarsalan" src="https://images.unsplash.com/photo-1666005487638-61f45819c975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
      </div>
    </div>
  )
}

export default About