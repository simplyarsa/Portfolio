import { useState, useEffect, useRef } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import Header from './sections/header/Header';
import Projects from './sections/projects/Projects';
import Skills from './sections/skills/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Timeline from './sections/work/Timeline';
import Skills2 from './sections/skills/Skills2';


function App() {

  // useEffect(()=>{
  //   AOS.init({duration:1000});
  // }, [])
  const blobRef=useRef();

  const blob = document.getElementById("blob");

  // window.addEventListener('scroll', ()=>{
  //   let height=document.body.scrollHeight;
  //   // document.body.style.backgroundSize=`${(100 + window.scrollY/5)}%`
  //   document.body.style.backgroundSize=`${(200 - window.scrollY/25)}%`
  // })

  document.addEventListener('mousemove', async function(event) {
    const { pageX, pageY } = event;

   blobRef.current.animate({
    left: `${pageX}px`,
    top: `${pageY}px`
  }, { duration: 3000, fill: "forwards" });
  }); 

  return (
    <div className="App" >
     <div id="blob" ref={blobRef} ></div> 
      {/* <div id="blur"></div> */}
      <Header  />
      <About />

      <h2 id="experience" className='heading'>// Work-Experience</h2>       
      <Timeline />
      <h2 id="skills" className='heading'>// Skills</h2> 
      {/* <Skills />  */}
      <Skills2 />
      <h2 id="projects" className='heading'>// Projects</h2>
      <Projects />
      <Contact />  
    </div>
  );
}

export default App;
