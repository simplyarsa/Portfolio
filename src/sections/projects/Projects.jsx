import React from 'react'
import './project.css'
import { data } from '../../project_data'
import Aos from 'aos'
import image from '../../images/2048.png'

const Projects = () => {
    Aos.init({ duration: 1000 });

    return (
        <>
            <div>
                {data.map((project => (
                    <div className='project-box' data-aos="slide-right">
                    <a href={project.link} target='_blank' rel='noreferrer' style={{textDecoration: 'none', color:'white'}} ><h1>{project.title}</h1></a>
                        <br></br>
                        <p >{project.desc}</p>
                        <div className='project-img' >
                            <a href={project.link} target='_blank' rel='noreferrer'  >
                            <img src={project.img}
                                    alt={project.title}
                                />

                            </a>
                        </div>
                        <div className='tech project-text'>
                            {project.stack.map((tech => (
                                <p className='tech-block'>{tech}</p>
                            )))}
                        </div>
                    </div>
                )))}

            </div>
        </>
    )
}

export default Projects