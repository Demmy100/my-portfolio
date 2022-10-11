import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 1000,
    });
  }, [])
  return (
    <div className='w-[100%] bg-black py-10'>
      <div className='grad-bar has-gradient'></div>
      <div className="social flex items-center justify-center gap-8 my-10">
        <div  className='w-[50px] h-[50px] rounded-sm flex items-center justify-center bg-white social-icon relative' data-aos="zoom-in">
        <a href="https://github.com/Demmy100" target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={{color: 'black', fontSize: '2rem'}}/>
        </a>
        </div>
       <div className='w-[50px] h-[50px] rounded-sm flex items-center justify-center bg-white social-icon relative'  data-aos="zoom-in">
       <a href="https://twitter.com/Demmylamba" target="_blank" rel="noopener noreferrer" >
          <TwitterIcon style={{color: 'black', fontSize: '2rem'}}/>
        </a>
       </div>
        <div className='w-[50px] h-[50px] rounded-sm flex items-center justify-center bg-white social-icon relative'  data-aos="zoom-in">
        <a href="https://www.instagram.com/direct/inbox/" target="_blank" rel="noopener noreferrer" >
          <InstagramIcon style={{color: 'black', fontSize: '2rem'}}/>
        </a>
        </div>
        <div className='w-[50px] h-[50px] rounded-sm flex items-center justify-center bg-white social-icon relative'  data-aos="zoom-in">
        <a href="mailto:support@demiladeaduragbemi.com" target="_blank" rel="noopener noreferrer">
          <MailOutlineIcon style={{color: 'black', fontSize: '2rem'}}/>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
