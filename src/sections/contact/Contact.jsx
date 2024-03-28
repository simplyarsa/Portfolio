import React, { useEffect, useRef, useState } from 'react'
import './contact.scss'
import styled from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';
import wave from "../../images/wave.svg"
import Wave from './Wave';
import emailjs from '@emailjs/browser';
import linkedin from "../../images/linkedin.svg"
import github from "../../images/github.svg"
import instagram from "../../images/instagram.svg"
import gmail from "../../images/gmail.svg"
import discord from "../../images/discord.svg"

const Contact = () => {
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, [])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_3ivzoic', 'template_v3lm8b7', form.current, 'XJKRW49sGgg9wM8cF')
    //   .then((result) => {
    //    
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  
      setSuccess(true);
      form.current.reset();
  };

  return (
    <div className='contact_container' style={{fontSize:'1rem'}}>
      <Wave />
      <div className='contactbox' >
        <h2 id="contact" className='heading'>// Contact Me</h2>
        <div className='contact-content'>
        <div className='contact-socials'>
        <img className='randomimage' data-aos="fade-right" src="https://cdnb.artstation.com/p/assets/images/images/034/008/543/original/jade-guilbot-astronaute-idle-gif.gif?1611154641" />
        
          <div>Mohd Arsalan Mehdi Rizvi</div>
          <div><u>simplyarsa15@gmail.com</u></div>
          <div>(+91) 9873930407</div>
          <div className='contact-social-links'>
          <a href='https://reactrouter.com/en/main/components/link' ><img src={linkedin} className='logoimg' /></a>
          <a href='https://reactrouter.com/en/main/components/link' ><img src={github} className='logoimg' /></a>
          <a href='https://reactrouter.com/en/main/components/link' ><img src={discord} className='logoimg' /></a>
          <a href='https://reactrouter.com/en/main/components/link' ><img src={gmail} className='logoimg' /></a>
          <a href='https://reactrouter.com/en/main/components/link' ><img src={instagram} className='logoimg' /></a>
        </div>
        </div>
        
        <div className='contact-me' >
          <h3>// Let's work together</h3>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" placeholder='Your Name'/>
            <label>Email</label>
            <input type="email" name="user_email" placeholder='Your Email' />
            <label>Message</label>
            <textarea name="message" placeholder='Leave a message' />
            {success && <div className='message'>Message sent successfully</div>}
            <input type="submit" value="Send" />
          </form>
        </div>

        
        </div>

      </div>
    </div>
  )
}

export default Contact

