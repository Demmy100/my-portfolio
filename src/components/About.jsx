import React from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 1000,
    });
  }, [])
  return (
    <div className="mt-16">
      <h1 className="header-text">About Me</h1>
      <div className="content text-center sm:text-[18px] text-[16px] 2xl:px-28 px-6" data-aos="zoom-in">
        <p>
          Hi, My name is Akinola Demilade John I'm a frontend developer based in Nigeria.I am passionate about building
          excellent software that improves the lives of those around me and also
          focused on creating clean and user-friendly experiences.
        </p>
        <p>
          I am currently open for an entry-level or part time opportunity where
          i can put my abilities and skills as a Front-End Developer and also a
          problem solver to good use. I am creative and a hard worker and would
          love to add value through my work. I would also like to collaborate
          with other young and experienced developers on any interesting open
          source projects. I have a willingness to learn and i am constantly
          looking forward to develop myself both as a developer and as a person in
          general.
        </p>
      </div>
    </div>
  );
};

export default About;
