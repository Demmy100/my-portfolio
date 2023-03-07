import React from "react";
import fitMain from "../img/fitMain.png";
import hoobank from "../img/Hoobank image.png";
/* import insure from "../img/insure image.png";
import generator from "../img/image generator.png";
import furniture from "../img/furniture image.png";
import advice from "../img/Advice image3.png";
import manage from "../img/manage image.png"; */
import todolist from "../img/my todolist.png";
import demmyStore from '../img/demmyStore.png'
import hotelImage from '../img/hotelImage.png'
import photoEditor from '../img/photoEditor.png'
import quizImage from '../img/quizImage2.png'
import weatherImage from '../img/weatherImage.png'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Work = () => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 1000,
    });
  }, [])
  return (
    <div className="w-[100%] bg-black pt-20" id="work">
      <h1 className="header-text">Projects</h1>
      <div className="sm:px-8 px-4 py-10 work__container">
        {/*furniture */}
       {/* <div className="card" data-aos="zoom-in">
       <div className="flex flex-col card-inner">
          <div className="img__container card-front">
            <img src={furniture} alt="" className="w-[100%] h-[300px] object-cover" />
          </div>
          <div className="btn__container card-back flex items-center justify-center gap-6">
            <a href="https://furniture-landing-page-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="work__link">
              DEMO
            </a>
            <a
              href="https://github.com/Demmy100/Furniture-landing-app"
              target="_blank"
              rel="noopener noreferrer" className="work__link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
       </div> */}
       {/*demmyStore */}
       <div className="card" data-aos="zoom-in">
        <div className="card-inner flex flex-col">
          <div className="img__container card-front">
            <img src={demmyStore} alt="" className="w-[100%] h-[100%]"/>
          </div>
          <div className="flex items-center justify-center gap-6 card-back">
            <a href="https://demmy-store.netlify.app/" target="_blank" rel="noopener noreferrer" className="work__link">
              DEMO
            </a>
            <a
              href="https://github.com/Demmy100/demmyStore"
              target="_blank"
              rel="noopener noreferrer" className="work__link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
       </div>
       {/*hotel booking */}
       <div className="card" data-aos="zoom-in">
        <div className="flex flex-col card-inner">
          <div className="img__container card-front">
            <img src={hotelImage} alt="" className="w-[100%] h-[100%]"/>
          </div>
          <div className="flex items-center justify-center gap-6 card-back">
            <a href="https://demmy-booking.netlify.app/" target="_blank" rel="noopener noreferrer" className="work__link">
              DEMO
            </a>
            <a
              href="https://github.com/Demmy100/Hotel-booking"
              target="_blank"
              rel="noopener noreferrer" className="work__link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
       </div>
       {/*photo editor */}
       <div className="card" data-aos="zoom-in">
        <div className="flex flex-col card-inner">
          <div className="img__container card-front">
            <img src={photoEditor} alt="" className="w-[100%] h-[100%]"/>
          </div>
          <div className="flex items-center justify-center gap-6 card-back">
            <a href="https://demmy-editor.netlify.app/" target="_blank" rel="noopener noreferrer" className="work__link">
              DEMO
            </a>
            <a
              href="https://github.com/Demmy100/photo-editor"
              target="_blank"
              rel="noopener noreferrer" className="work__link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
       </div>
       {/*weather app */}
       <div className="card" data-aos="zoom-in">
       <div className="flex flex-col card-inner">
          <div className="img__container card-front">
            <img src={weatherImage} alt="" className="w-[100%] h-[100%]"/>
          </div>
          <div className="flex items-center justify-center gap-6 card-back">
            <a href="https://demmy-weather.netlify.app/" target="_blank" rel="noopener noreferrer" className="work__link">
              DEMO
            </a>
            <a
              href="https://github.com/Demmy100/weather-app"
              target="_blank"
              rel="noopener noreferrer" className="work__link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
       </div>
       {/*quiz app */}
       <div className="card" data-aos="zoom-in">
       <div className="flex flex-col card-inner">
          <div className="img__container card-front">
            <img src={quizImage} alt="" className="w-[100%] h-[100%]"/>
          </div>
          <div className="flex items-center justify-center gap-6 card-back">
            <a href="https://demmy-quiz.netlify.app/" target="_blank" rel="noopener noreferrer" className="work__link">
              DEMO
            </a>
            <a
              href="https://github.com/Demmy100/Quiz-App"
              target="_blank"
              rel="noopener noreferrer" className="work__link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
       </div>
        {/*hoobank */}
       <div className="card" data-aos="zoom-in">
       <div className="flex flex-col card-inner">
          <div className="img__container card-front">
            <img src={hoobank} alt="" className="w-[100%] h-[100%]"/>
          </div>
          <div className="flex items-center justify-center gap-6 card-back">
            <a href="https://modern-bank-app-landing-page.netlify.app/" target="_blank" rel="noopener noreferrer" className="work__link">
              DEMO
            </a>
            <a
              href="https://github.com/Demmy100/Hoobank-landing-page"
              target="_blank"
              rel="noopener noreferrer" className="work__link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
       </div>
        {/*fitness */}
        <div className="card" data-aos="zoom-in">
        <div className="flex flex-col card-inner">
          <div className="img__container card-front">
            <img src={fitMain} alt=""   className="w-[100%] h-[100%] r"/>
          </div>
          <div className="flex items-center justify-center gap-6 card-back">
            <a href="https://gym-balance.netlify.app/" target="_blank" rel="noopener noreferrer" className="work__link">
              DEMO
            </a>
            <a
              href="https://github.com/Demmy100/fitness-landing-page"
              target="_blank"
              rel="noopener noreferrer" className="work__link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
        </div>
        {/*manage */}
       {/*  <div className="card" data-aos="zoom-in">
        <div className="flex flex-col card-inner">
          <div className="img__container card-front">
            <img src={manage} alt="" className="w-[100%] h-[300px] object-cover" />
          </div>
          <div className="btn__container flex items-center justify-center gap-6 card-back">
            <a href="https://manage-landing-page-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="work__link">
              DEMO
            </a>
            <a
              href="https://github.com/Demmy100/manage-landing-page"
              target="_blank"
              rel="noopener noreferrer" className="work__link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
        </div> */}
        {/*insure */}
       {/* <div className="card"data-aos="zoom-in">
       <div className="flex flex-col card-inner">
          <div className="img__container card-front">
            <img src={insure} alt="" className="w-[100%] h-[300px] object-cover" />
          </div>
          <div className="btn__container flex items-center justify-center gap-6 card-back">
            <a href="https://insure-landing-page-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="work__link">
              DEMO
            </a>
            <a
              href="https://github.com/Demmy100/Insure-landing-page"
              target="_blank"
              rel="noopener noreferrer" className="work__link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
       </div> */}
        {/*todolist */}
        <div className="card" data-aos="zoom-in">
        <div className="flex flex-col card-inner">
          <div className="img__container card-front ">
            <img src={todolist} alt=""  className="w-[100%] h-[100%] object-cover"/>
          </div>
          <div className="btn__container flex items-center justify-center gap-6 card-back">
            <a href="https://todolist-page-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="work__link">
              DEMO
            </a>
            <a
              href="https://github.com/Demmy100/My-Todolist"
              target="_blank"
              rel="noopener noreferrer" className="work__link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
        </div>
        {/*image */}
       {/* <div className="card" data-aos="zoom-in">
       <div className="flex flex-col card-inner">
          <div className="img__container card-front">
            <img src={generator} alt="" className="w-[100%] h-[300px] object-cover" />
          </div>
          <div className="btn__container flex items-center justify-center gap-6 card-back">
            <a href="https://advise-generator-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="work__link">
              DEMO
            </a>
            <a
              href="https://github.com/Demmy100/image-generator-app"
              target="_blank"
              rel="noopener noreferrer" className="work__link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
       </div> */}
        {/*advise */}
        {/* <div className="card" data-aos="zoom-in">
        <div className="flex flex-col card-inner">
          <div className="img__container card-front">
            <img src={advice} alt="" className="w-[100%] h-[300px] object-cover" />
          </div>
          <div className="btn__container flex items-center justify-center gap-6 card-back">
            <a href="http://" target="_blank" rel="noopener noreferrer" className="work__link">
              DEMO
            </a>
            <a
              href="https://github.com/Demmy100/Advise-Generator"
              target="_blank"
              rel="noopener noreferrer" className="work__link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
        </div> */}
      </div>
    </div>
  );
};

export default Work;
