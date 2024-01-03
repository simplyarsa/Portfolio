import React, {useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './skills.css'
import VisibilitySensor from "react-visibility-sensor";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    const skills = [{ skill: "HTML", percent: 90 }, { skill: "CSS", percent: 80 }, { skill: "Javascript", percent: 70 }, { skill: "React", percent: 60 }, { skill: "Node", percent: 50 }, { skill: "MongoDB", percent: 40 }]

    useEffect(()=>{
      AOS.init({duration:1000});
    }, [])
    return (

      <div class="container">
      {
        skills.map((skill) => (
          <div class="progress" >
            <span class="title timer" data-from="0" data-to={`${skill.percent}`} data-speed="1800" >{skill.skill}</span>
            <div class="overlay"></div>
            <div class="left"></div>
            <div class="right"></div>
          </div>
        ))
      }
        {/* <div class="progress">
            <span class="title timer" data-from="0" data-to="85" data-speed="1800">85</span>
            <div class="overlay"></div>
            <div class="left"></div>
            <div class="right"></div>
        </div> */}
    </div>
    
        // <VisibilitySensor>
        //     {({ isVisible }) => {
        //       const percentage = isVisible ? 90 : 0;
        //       return (
        //         <div className='skills-container'>
        //         <CircularProgressbar
        //           value={percentage}
        //           text={`${percentage}%`}
        //         />
        //         </div>
        //       );
        //     }}
        //   </VisibilitySensor>

        // <div className="skills" id="skills">
        //     <h1>Skills</h1>
        //     <div className="skills-container">
        //         {skills.map((skill) => (
        //             <div className='skill-box'>
        //                 <CircularProgressbar value={skill.percent} text={`${skill.skill}`} />                            
        //             </div>
        //         ))}
        //     </div>
        // </div>
    )
}

export default Skills