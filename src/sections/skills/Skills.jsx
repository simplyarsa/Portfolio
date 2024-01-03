import React, { useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './skills.css'
import VisibilitySensor from "react-visibility-sensor";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  const skills = [{ text: "C++", percent: 80 }, { text: "HTML", percent: 90 }, { text: "CSS", percent: 85 }, { text: "Javascript", percent: 90 }, { text: "React.JS", percent: 80 },{text: 'jQuery', percent: 70}, { text: "Node.JS", percent: 80 }, { text: "MongoDB", percent: 70 }, { text: "Express", percent: 85 }, {text: "REST APIs", percent: 80}, {text: "MySQL", percent: 70}, {text: "Wordpress", percent: 75}]

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

  return (

    <div className='skill-container'>
      {skills.map((skill) => (
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? skill.percent : 0;
            return (
              <div className='skill-box'>
                <CircularProgressbar
                  value={percentage}
                  text={`${skill.text}`}
                  styles={buildStyles({
          
                    strokeLinecap: 'butt',

                    // Text size
                    textSize: '16px',
                    // pathTransitionDuration: 0.5,
                    
                    // textColor: '#f88',
                    trailColor: '#d6d6d6',
                  })}
                />
              </div>

            );
          }}
        </VisibilitySensor>
      ))}
    </div>

  )
}

export default Skills