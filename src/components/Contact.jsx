import React from 'react'
import { useEffect,useRef,useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gbzjxi3', 'template_vve2dwn', form.current, '44siZrypfwYc0TqFx')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 1000,
    });
  }, [])
  return (
    <div id='contact' className='w-[100%] bg-black py-8'>
      <h1 className="header-text">Contact me</h1>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[800px] lg:px-0 px-10 mx-auto gap-6'>
        <input type="text" name="user_name" placeholder='Your Name' className='w-[100%] h-10 indent-2 border-none outline-none rounded-md p-2 text-black' data-aos="fade-down"/>
        <input type="email" name="user_email" placeholder='Your Email Address' className='w-[100%] h-10 indent-2 border-none outline-none rounded-md p-2 text-black' data-aos="fade-up"/>
        <textarea name="message" placeholder='Type Your Message Here....' className='w-[100%] h-28 indent-2 border-none outline-none rounded-md p-2 text-black' data-aos="fade-down"></textarea>
       
        <input type="submit" value="send" className="has-gradient grad-box w-[100%] h-10 p-2 text-white rounded-md" data-aos="flip-down"/>
        <span>{done && "Thanks for contacting me"}</span>
      </form>
    </div>
  )
}

export default Contact
