import React from 'react'
import './about.css'
import GHAJ from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={GHAJ} alt="" />
          </div>
        </div>

        <div className="about-content">
          <p>I'm a Software Developer dedicated to improving skills through hands-on learning and development work. Proficient at mobile and desktop development environments, Html, CSS, Python, JS and other programming languages to produce clean code. Also, i'm a well-organized and collaborative team player with good communication and analytical abilities committed to working with businesses and organizations.</p>
          <div className="about-cards">
            <article className="about-card">
              <FaAward className='about-icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            
            <article className="about-card">
            <FiUsers className='about-icon' />
            <h5>Clients</h5>
            <small>30+ Worldwide</small>
            </article>
            
            <article className="about-card">
            <VscFolderLibrary className='about-icon' />
            <h5>Projects</h5>
            <small>40+ Projects</small>
            </article>
          </div>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>

      
    </section>
  )
}

export default about