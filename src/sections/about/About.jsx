import React, { useRef } from 'react'
import './about.css'
// import { FaDiscord, FaGithub } from 'react-icons/fa';
// import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import linkedin from "../../images/linkedin.svg"
import github from "../../images/github.svg"
import instagram from "../../images/instagram.svg"
import gmail from "../../images/gmail.svg"
import leetcode from "../../images/leetcode.svg"
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import mainPhoto from '../../images/MohdArsalan.jpg'

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
          <p>a 3rd-year undergraduate student pursuing B. Tech at Jamia Millia Islamia, New Delhi, India.</p>
          <p>I am a full stack web developer (MERN Stack) with strong problem-solving skills and proficiency in Data Structures and Algorithms (DSA).</p>
          {/* &ensp; random text <br /> */}
        </div>
        <div className='socials'>
          <a href='https://www.linkedin.com/in/arsalan-rizvi-3944b2236/' ><img src={linkedin} className='logoimg' /></a>
          <a href='https://github.com/simplyarsa' ><img src={github} className='logoimg' /></a>
          <a href='https://leetcode.com/simplyarsa15' ><img src={leetcode} className='logoimg' /></a>
          <a href="mailto:simplyarsa15@gmail.com" ><img src={gmail} className='logoimg' /></a>
          <a href='https://www.instagram.com/arsalannn_15/' ><img src={instagram} className='logoimg' /></a>
        </div>
      </div>
      <div>
      <Tilt>
        <img class="imgarsalan" src={mainPhoto} />
      </Tilt>
      </div>
    </div>
  )
}

export default About