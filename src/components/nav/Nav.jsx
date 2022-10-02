import React from 'react'
import './nav.css'
import { Link } from 'react-scroll'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
// import {BiBook} from 'react-icons/bi'
import {VscTools} from 'react-icons/vsc'
// import {RiServiceLine} from 'react-icons/ri'
import {HiOutlineBriefcase} from 'react-icons/hi'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <Link activeClass="active" to="header" spy={true} smooth={true} offset={0} duration={2000}><AiOutlineHome /></Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={2000}><AiOutlineUser /></Link>
      <Link to="experience" spy={true} smooth={true} offset={0} duration={2000}><VscTools /></Link>
      <Link to="portfolio" spy={true} smooth={true} offset={0} duration={2000}><HiOutlineBriefcase/></Link>
      <Link to="contact" spy={true} smooth={true} offset={0} duration={2000}><BiMessageSquareDetail /></Link>
    </nav>
  )
}

export default Nav