import React from 'react'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        AOS.init({
          delay: 100,
          duration: 1000,
        });
      }, [])
  return (
    <div id='skills' className='w-[100%] bg-black'>
      <h1 className='header-text pt-10'>Skills</h1>
      <div className="skill">
        <div className="skill__container has-gradient grad-box" data-aos="fade-down">
            <div className="skill__card">
                <p>HTML</p>
            </div>
        </div>
        <div className="skill__container has-gradient grad-box" data-aos="fade-up">
            <div className="skill__card">
                <p>CSS</p>
            </div>
        </div>
        <div className="skill__container has-gradient grad-box" data-aos="fade-down">
            <div className="skill__card">
                <p>Javascript</p>
            </div>
        </div>
        <div className="skill__container has-gradient grad-box" data-aos="fade-up">
            <div className="skill__card">
                <p>React</p>
            </div>
        </div>
        <div className="skill__container has-gradient grad-box" data-aos="zoom-in">
            <div className="skill__card">
                <p>Tailwindcss</p>
            </div>
        </div>
        <div className="skill__container has-gradient grad-box" data-aos="flip-up">
            <div className="skill__card">
                <p>Framer-Motion</p>
            </div>
        </div>
        <div className="skill__container has-gradient grad-box" data-aos="flip-down">
            <div className="skill__card">
                <p>AOS</p>
            </div>
        </div>
        <div className="skill__container has-gradient grad-box" data-aos="fade-up">
            <div className="skill__card">
                <p>Git</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
