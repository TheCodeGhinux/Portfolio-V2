import React, { useState } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ghaj2.jpg'
import HeaderSocials from './HeaderSocials'
import {TypeAnimation} from 'react-type-animation'
// import DarkModeToggle from '../../DarkModeToggle'

const Header = (props) => {
  const [isDark, setIsDark] = useState(true)
  return (
    <header
      id='header'
      className={`${props.darkMode ? 'dark-header' : 'light-header'}`}
      dark-theme={isDark ? 'dark' : 'light'}
    >
      <div className='container header-container'>
        <div className='header-con-items'>
          <h5>Hi, I'm</h5>
          <h2 className='name'>Ayomide Ilesanmi</h2>
          <h2 className='alias'>The Code Ghinux</h2>

          <div className='animation-div'>
            <TypeAnimation
              sequence={[
                'Python Developer',
                4000,
                'Machine Learning Engineer',
                4000,
                'Back-end Developer',
                4000,
                // 'Cybersec Analyst',
                // 4000,
                '!Nerd',
                4000,
                () => {
                  console.log() // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper='h2'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '2em' }}
            />
          </div>
          <CTA />
          {/* <div className="me">
            <img src={ME} alt="me" />
          </div> */}
        </div>

        <HeaderSocials />

        <a href='#contact' className='scroll-down'>
          Scroll Down
        </a>
        {/* <DarkModeToggle
        /> */}
      </div>
    </header>
  )
}

export default Header
