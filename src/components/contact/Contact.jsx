import React from 'react'
import './contact.css'
import {FaMailBulk} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'

const Contact = (props) => {
  return (
    <section className={`${props.darkMode ? 'dark' : 'light'}`} id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <FaMailBulk className='contact-option-icon' />
            <h4>Email</h4>
            {/* <h5>ilesanmibry@gmail.com</h5> */}
            <a
              href='mailto:ilebryson@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Send a message
            </a>
          </article>

          <article className='contact-option'>
            <FaTwitter className='contact-option-icon' />
            <h4>Twiter</h4>
            {/* <h5>AyoOfLagos</h5> */}
            <a
              href='https://twitter.com/codeghinux'
              target='_blank'
              rel='noreferrer'
            >
              Send a message
            </a>
          </article>

          <article className='contact-option'>
            <FaWhatsapp className='contact-option-icon' />
            <h4>Whatsapp</h4>
            {/* <h5>+234</h5> */}
            <a
              href='https://wa.me/2348140273725'
              target='_blank'
              rel='noreferrer'
            >
              Send a message
            </a>
          </article>
        </div>

        {/* <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
        </form> */}
      </div>
    </section>
  )
}

export default Contact