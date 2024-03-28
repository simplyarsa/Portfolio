import React, { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee";
import './skills.css'

const Skills2 = () => {
    const [status, setStatus] = useState(false);

    window.addEventListener('scroll', () => {
        setStatus(true)
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setStatus(false)
        }, 600);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='skills'>
            <Marquee
                play={status}
            >
                <div>
                <span> . </span>
                    <span> C++ . </span>
                    <span>JavaScript . </span>
                    <span>Python . </span>
                    <span>Java . </span>
                    <span>HTML . </span>
                    <span>CSS  </span>
                  
                    
                </div>
            </Marquee>
            <div style={{height:'30px'}}></div>
            <Marquee
                play={status}
                direction='right'
            >
                <div>
                    <span> . </span>
                    <span> ReactJS . </span>
                    <span>NodeJS . </span>
                    <span>Express . </span>
                    <span>MySQL . </span>
                    <span>MongoDB . </span>
                    <span>Tailwind </span>

                </div>
            </Marquee>
            <div style={{height:'30px'}}></div>
            <Marquee
                play={status}
                direction='left'
            >
                <div>
                    <span> . </span>
                    <span> Materialize . </span>
                    <span>Wordpress . </span>
                    <span>SCSS . </span>
                    <span>jQuery . </span>
                    <span>Bootstrap . </span>
                    <span>Firebase  </span>

                </div>
            </Marquee>
            <div style={{height:'30px'}}></div>
            <Marquee
                play={status}
                direction='right'
            >
                <div>
                <span> . </span>
                    <span> React Native . </span>
                   
                    <span>Unix Shell . </span>
                    <span>VS Code . </span>
                    <span>Flutter . </span>
                    <span>Dart . </span>
                    <span>Git  </span>
                </div>
            </Marquee>
            
        </div>
    )
}

export default Skills2