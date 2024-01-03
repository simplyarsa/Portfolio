import React from 'react'
import './project.css'
import {data} from '../../project_data'

const Projects = () => {
  
    return (
        <>
        <div>
            {data.map((project => (
                <div className='project-box'>
                    <h1>{project.title}</h1>
                    <p >{project.desc}</p>
                    <div className='project-img' >
                        <a href={project.link} target='_blank' rel='noreferrer'  >
                            <img src={project.img} />
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