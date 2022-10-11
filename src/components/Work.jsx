import React from "react";
import advice from "../img/Advice image3.png";
import fitness from "../img/fitness image.png";
import furniture from "../img/furniture image.png";
import hoobank from "../img/Hoobank image.png";
import insure from "../img/insure image.png";
import generator from "../img/image generator.png";
import manage from "../img/manage image.png";
import todolist from "../img/my todolist.png";
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
       <div className="card" data-aos="zoom-in">
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
       </div>
        {/*hoobank */}
       <div className="card" data-aos="zoom-in">
       <div className="flex flex-col card-inner">
          <div className="img__container card-front">
            <img src={hoobank} alt="" className="w-[100%] h-[300px] object-cover" />
          </div>
          <div className="btn__container flex items-center justify-center gap-6 card-back">
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
            <img src={fitness} alt="" className="w-[100%] h-[300px] object-cover" />
          </div>
          <div className="btn__container  flex items-center justify-center gap-6 card-back">
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
        <div className="card" data-aos="zoom-in">
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
        </div>
        {/*insure */}
       <div className="card"data-aos="zoom-in">
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
       </div>
        {/*todolist */}
        <div className="card" data-aos="zoom-in">
        <div className="flex flex-col card-inner">
          <div className="img__container card-front">
            <img src={todolist} alt="" className="w-[100%] h-[300px] object-cover" />
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
       <div className="card" data-aos="zoom-in">
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
       </div>
        {/*advise */}
        <div className="card" data-aos="zoom-in">
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
        </div>
      </div>
    </div>
  );
};

export default Work;
