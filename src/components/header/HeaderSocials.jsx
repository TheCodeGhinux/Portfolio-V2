import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className='header-socials' >
        <a href="https://linkedin.com/in/giy" target="_blank" rel="noreferrer" ><BsLinkedin/></a>
        <a href="https://github.com/thecodeghinux" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://twitter.com/codeghinux" target="_blank" rel="noreferrer"><IoLogoTwitter /></a>
    </div>
  )
}

export default HeaderSocials