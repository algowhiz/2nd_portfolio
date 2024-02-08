import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa';
import { RxLinkedinLogo } from 'react-icons/rx';
import { FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import 'animate.css';
import Typewriter from "typewriter-effect";

const Hero = () => {
  const [isMenuVisible, setMenuVisibility] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200;

      if (scrollPosition > threshold) {
        setMenuVisibility(false);
      } else {
        setMenuVisibility(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div name="Home" className="flex flex-col items-center justify-center min-h-screen">
      <h1 className=" md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-3 animate__animated animate__fadeInUp text-center text-lg">
        Hello, I am Manish Kadam
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-3xl 2xl:text-4xl font-semibold mb-6 animate__animated animate__fadeIn">
        <Typewriter
      options={{
        strings: ["Frontend Web Developer", "Traveller", "Chess Enthusiast"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
      </h2>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-300 text-center mb-8 animate__animated animate__fadeIn">
        Passionate about creating user-friendly and visually appealing web experiences.
      </p>
      <Link to="Project">
        <a
          href="Project"
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          View Projects
        </a>
      </Link>


      {isMenuVisible && (
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-117px]  hover:ml-[0px] duration-300 bg-blue-600 p-3 rounded">
              <a href="https://www.linkedin.com/in/manishkadam1/" className="flex justify-between items-center text-gray-300 w-full">
                LinkedIn <RxLinkedinLogo size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-117px]  hover:ml-[0px] duration-300 bg-pink-700 p-3 rounded">
              <a href="" className="flex justify-between items-center text-gray-300 w-full">
                Instagram<FaInstagram size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-117px]  hover:ml-[0px] duration-300 bg-gray-700 p-3 rounded">
              <a href="https://github.com/algowhiz" className="flex justify-between items-center text-gray-300 w-full">
                GitHub<FaGithub size={30} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hero;
