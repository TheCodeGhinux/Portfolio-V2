import React from 'react'
import CV from '../../assets/cv24.pdf'

const CTA = (props) => {
  return (
    <div className='cta'>
      <a
        href={CV}
        download
        className={`${props.props.darkMode ? 'dark' : 'light'} btn btn-primary`}
      >
        Download CV
      </a>
      {/* <a href="#contact" className='btn btn-primary' >Let's Talk</a> */}
    </div>
  )
}

export default CTA