import React from 'react'
// import './services.css'
import {BiCheck} from 'react-icons/bi'

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());


const Services = () => {
  return (
    <section id="experience">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <ScrollContainer>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
            <span style={{ fontSize: "40px" }}>
              <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
            </span>
          </div>
        </ScrollPage>
      </ScrollContainer>

      {/* <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>FrontEnd Development</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon' />
              <p>Built single website with ReactJs.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Built mutliple pages website with NextJs.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Produced websites compatible with multiple browsers.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Teamed on user-centric design strategy in the translation of  UX and business requirements into coded solutions.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Translated verbal customer requirements into written use cases and testable development stories.</p>
            </li>

          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>Machine Learning & Artificial Intelligence</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon' />
              <p>Proficiency in Data analysis with Machine learning libraries.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Built image classification with TensorFlow and other ML libraries.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Built  models for prediction with machine learning libraries.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Built  models for classificatin with machine learning libraries.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Built AI models for face recognition, Image collage.</p>
            </li>

          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>Pyhton </h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon' />
              <p>Collaborated effectively with members of software development team to develop processes to automate the task and increase work efficiency.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Modified existing Python software to correct coding errors, upgrade interfaces and improve overall performance.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p> Handled scripting tasks for debugging and automation using Python.</p>
            </li>

            <li>
              <BiCheck className='service-list-icon' />
              <p>Designed front-end websites relying heavily on data-driven back-end processing.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Worked independently to design, develop and test code.</p>
            </li>
            
          </ul>
        </article>
      </div> */}
    </section>
  )
}

export default Services