import React from 'react'
import './footer.css'
// import {BsLinkedin} from 'react-icons/bs'
import {BsFillSuitHeartFill} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <section id='Footer'>
      <footer>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href='#' className='footer-logo'>
          The CODE GHINUX
        </a>

        <ul className='permalinks'>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          {/* <li><a href="#services">Services</a></li> */}
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          {/* <li><a href="#testimonials">Testimonials</a></li> */}
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>

        <div className='footer-socials'>
          <a href='https://linkedin.com/in/giy'>
            {/* <BsLinkedin /> */}
          </a>
          <a href='https://instagram.com/Ayoflagos'>
            <FiTwitter />
          </a>
          <a href='https://twitter.com/codeghinux'>
            <FiInstagram />
          </a>
        </div>

        <div className='footer-copyright'>
          {/* <small>&copy; The CODE GHINUX. All rights reserved</small> */}
          <h4>
            Built with <BsFillSuitHeartFill /> by <span>The Code Ghinux</span>
          </h4>
        </div>
      </footer>
    </section>
  )
}

export default Footer