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
import Layout from './components/layout/Layout'

const App = () => {
  // const location = useLocation()

  const [darkMode, setDarkMode] = useState(true)

  // const toggleDarkMode = () => {
  //   setDarkMode(prevDarkMode => !prevDarkMode)
  // }

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked)
  }

  const styles = {
    bg: {
      background: darkMode ? '#282c30' : '#f0f0f0',
    },


    layout_bg: {
      background: darkMode ? '#353b42' : '#ffffff',
    },
  }

  return (
    <>
      <div className='app' style={styles.bg}>
        {/* <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={darkMode} /> */}
        <Layout style={styles.layout_bg}>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className='layout-con'>
            <About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Experience darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Portfolio darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </Layout>

        <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <DarkModeSwitch
          className='toggle'
          style={{ marginBottom: '2rem' }}
          checked={darkMode}
          onChange={toggleDarkMode}
          size={50}
        />
      </div>
      {/* <Services /> */}
      {/* <Testimonials /> */}
    </>
  )
}

export default App
