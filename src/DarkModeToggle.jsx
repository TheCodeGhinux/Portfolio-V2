import React, { useState, useEffect } from 'react'
// import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle'

const DarkModeToggle = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // useEffect(() => {
  //   // Check local storage for user preference
  //   const savedDarkMode = localStorage.getItem('darkMode')
  //   if (savedDarkMode) {
  //     setIsDarkMode(JSON.parse(savedDarkMode))
  //   }
  // }, [])

  // const toggleDarkMode = () => {
  //   const newDarkMode = !isDarkMode
  //   setIsDarkMode(newDarkMode)
  //   localStorage.setItem('darkMode', JSON.stringify(newDarkMode))

  //   // You can also add logic to toggle dark mode in your entire app
  //   document.body.classList.toggle('dark-mode', newDarkMode)
  // }

  return (
    <div className='dark-mode-toggle'>
      <input
        type='checkbox'
        id='darkModeToggle'
        className='toggle'
        onChange={() => props.toggleDarkMode(!props.isDarkMode)}
        checked={props.isDarkMode}
      />
      <label htmlFor='darkModeToggle'>Dark Mode</label>
    </div>
  )
}

export default DarkModeToggle
