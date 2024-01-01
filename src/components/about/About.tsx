import React from 'react'
import './about.css'
import GHAJ from '../../assets/me.jpg'
import { FaAward, FaTools } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const about = (props) => {
  return (
    <section className={`${props.darkMode ? 'dark' : 'light'}`} id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      {/* Removed class:  about-container */}
      <div className='container about-con'>
        {/* <div className="about-me">
          <div className="about-me-image">
            <img src={GHAJ} alt="" />
          </div>
        </div> */}

        <div className='about-content'>
          <p>
            I'm a Software Engineer dedicated to improving skills through
            hands-on learning and development work. Proficient at mobile and
            desktop development environments, Python, TypeScript, NodeJs, Java and other programming languages to produce clean code. Also, i'm a
            well-organized and collaborative team player with good communication
            and analytical abilities committed to working with businesses and
            organizations.
          </p>
          <div className='cards-con'>
            <div className='about-cards'>
              <article className='about-card'>
                <FaAward className='about-icon' />
                <h3 className="icon-header">Experience</h3>
                <h5>3+ years</h5>
              </article>

              <article className='about-card'>
                <FaTools className='about-icon' />
                <h3 className="icon-header">Tools</h3>
                <div className='lang'>
                  <h5>Django</h5>
                  <h5>NestJS</h5>
                  <h5>ExpressJs</h5>
                  <h5>SringBoot</h5>
                  <h5>Flask</h5>
                  <h5>FastApi</h5>
                </div>
              </article>

              <article className='about-card'>
                <VscFolderLibrary className='about-icon' />
                <h3 className="icon-header">Projects</h3>
                <h5>40+ Projects</h5>
              </article>
            </div>
          </div>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default about
