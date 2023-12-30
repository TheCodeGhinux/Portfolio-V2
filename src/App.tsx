import React, { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
// import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import DarkModeToggle from './DarkModeToggle'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

const App = () => {
  // const location = useLocation()

  const [darkMode, setDarkMode] = useState(false)

  // const toggleDarkMode = () => {
  //   setDarkMode(prevDarkMode => !prevDarkMode)
  // }

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked)
  }

  const styles = {
    bg: {
      background: darkMode ? '#353b42' : '#f9f9f9',
    },
  }

  return (
    <>
      <div
      style={styles.bg}
      >
        {/* <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={darkMode} /> */}
        <DarkModeSwitch
        className='toggle'
          style={{ marginBottom: '2rem'  }}
          checked={darkMode}
          onChange={toggleDarkMode}
          size={50}
        />

        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className='layout-con'>
          <About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Experience darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Portfolio darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      {/* <Services /> */}
      {/* <Testimonials /> */}
    </>
  )
}

export default App
