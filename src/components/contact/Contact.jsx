import React from 'react'
import './contact.css'
import {FaMailBulk} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <FaMailBulk className='contact-opiton-icon' />
            <h4>Email</h4>
          
            <a href="mailto:ilebryson@gmail.com" target= "_blank" rel="noreferrer">Send a message</a>
          </article>
          
          <article className="contact-option">
            <FaTwitter className='contact-opiton-icon' />
            <h4>Twiter</h4>
            
            <a href="https://twitter.com/codeghinux" target= "_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact-option">
            <FaWhatsapp className='contact-opiton-icon' />
            <h4>Whatsapp</h4>
            
            <a href="https://wa.me/2348140273725" target= "_blank" rel="noreferrer">Send a message</a>
          </article>

        </div>

       
      </div>
    </section>
  )
}

export default Contact