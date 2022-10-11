import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 1000,
    });
  }, []);
  return (
    <header>
      <nav className="flex relative justify-between items-center w-[100%] 2xl:px-12 px-8 py-8">
        <div className="logo text-[15px] cursor-pointer">demmydev</div>
        <ul className="list-none sm:flex hidden gap-8">
          <Link spy={true} smooth={true} to="about">
            <li
              className="nav-items cursor-pointer text-[20px] text-white"
              id="#about"
              data-aos="fade-down"
            >
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="skills">
            <li
              className="nav-items cursor-pointer text-[20px] text-white"
              id="#skills"
              data-aos="fade-down-left"
            >
              Skills
            </li>
          </Link>
          <Link spy={true} smooth={true} to="work">
            <li
              className="nav-items cursor-pointer text-[20px] text-white"
              id="#work"
              data-aos="fade-down-right"
            >
              Projects
            </li>
          </Link>
          <Link spy={true} smooth={true} to="contact">
            <li
              className="nav-items cursor-pointer text-[20px] text-white"
              id="#contact"
              data-aos="fade-up"
            >
              Contact
            </li>
          </Link>
        </ul>
        {/*mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <CloseIcon
              style={{ fontSize: "2rem", cursor: "pointer" }}
              onClick={() => setToggle((prev) => !prev)}
            />
          ) : (
            <MenuIcon
              style={{ fontSize: "2rem", cursor: "pointer" }}
              onClick={() => setToggle((prev) => !prev)}
            />
          )}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } absolute z-[1000] top-[130px] right-[30px] bg-white/40 backdrop-blur-md p-4 rounded-md`}
          >
            <ul className="list-none flex flex-col gap-4">
              <Link spy={true} smooth={true} to="about">
                <li
                  className="nav-items cursor-pointer text-[20px] text-white"
                  id="#about"
                  data-aos="fade-down"
                >
                  About
                </li>
              </Link>
              <Link spy={true} smooth={true} to="skills">
                <li
                  className="nav-items cursor-pointer text-[20px] text-white"
                  id="#skills"
                  data-aos="fade-down-left"
                >
                  Skills
                </li>
              </Link>
              <Link spy={true} smooth={true} to="work">
                <li
                  className="nav-items cursor-pointer text-[20px] text-white"
                  id="#work"
                  data-aos="fade-down-right"
                >
                  Projects
                </li>
              </Link>
              <Link spy={true} smooth={true} to="contact">
                <li
                  className="nav-items cursor-pointer text-[20px] text-white"
                  id="#contact"
                  data-aos="fade-up"
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div className="grad-bar has-gradient"></div>
    </header>
  );
};

export default Navbar;
