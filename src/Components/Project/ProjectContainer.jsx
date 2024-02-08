import React from 'react';
import iImage from './netflix.png';
import iImage2 from './curr.png';
import iImage3 from './drag.png';
import iImage4 from './mole.png';
import { FaHtml5, FaPhp } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { FaSquareJs, FaReact } from 'react-icons/fa6';
import { GrMysql } from 'react-icons/gr';
import { useSpring, animated } from 'react-spring';

  const projects = [
    {
      id: 1,
      imgSrc: iImage,
      projectName: 'Netflix-UI',
      projectDesc: `Built with React.js and powered by Redux, this project is a faithful recreation of the Netflix user interface. Leveraging React's component-based architecture and Redux for state management, it delivers a seamless and interactive browsing experience reminiscent of the popular streaming platform.  `,
      langIcons: [<FaHtml5 key="html" size={30} />, <IoLogoCss3 key="css" size={30}/>, <FaSquareJs key="js" size={30}/>,<FaReact key="react" size={30} />],
      link:'https://github.com/algowhiz/Clones/tree/main/src',
    },
    {
      id: 2,
      imgSrc: iImage2,
      projectName: 'Currency Converter',
      projectDesc: `Welcome to the Currency Converter! This tool allows you to convert between different currencies, providing you with up-to-date exchange rates. Simply enter the amount, select the source currency, choose the target currency, and click the "Convert" button to get the converted amount. I had use Api call for currency as well as for flags  `,
      langIcons: [<FaHtml5 key="html" size={30} />, <IoLogoCss3 key="css" size={30}/>, <FaSquareJs key="js" size={30}/>],
      link:'https://github.com/algowhiz/Projects/tree/main/api',
    },
    {
      id: 3,
      imgSrc: iImage3,
      projectName: 'Dragon game',
      projectDesc: `Welcome to the Currency Converter! This tool allows you to convert between different currencies, providing you with up-to-date exchange rates. Simply enter the amount, select the source currency, choose the target currency, and click the "Convert" button to get the converted amount. I had use Api call for currency as well as for flags  `,
      langIcons: [<FaHtml5 key="html" size={30} />, <IoLogoCss3 key="css" size={30}/>, <FaSquareJs key="js" size={30}/>],
      link:'https://github.com/algowhiz/Projects/tree/main/dragon',
      live:'https://dragon-game-3636.netlify.app/',
    },
    {
      id: 4,
      imgSrc: iImage4,
      projectName: 'Whack a Mole',
      projectDesc: `Welcome to the Currency Converter! This tool allows you to convert between different currencies, providing you with up-to-date exchange rates. Simply enter the amount, select the source currency, choose the target currency, and click the "Convert" button to get the converted amount. I had use Api call for currency as well as for flags  `,
      langIcons: [<FaHtml5 key="html" size={30} />, <IoLogoCss3 key="css" size={30}/>, <FaSquareJs key="js" size={30}/>],
      link:'https://github.com/algowhiz/Projects/tree/main/mole_game',
    },
    // Add more projects as needed
  ];
  const ProjectSection = () => {

    const springProps = useSpring({
      opacity: 1,
      transform: 'translateY(0)',
      from: { opacity: 0, transform: 'translateY(50px)' },
      delay: projects.id * 1000, 
  });
  

  return (
    <div className="container mx-auto py-10" name="Project">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <animated.div style={springProps} className="bg-[rgb(1, 14, 53)] p-6 transition transform hover:scale-105">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-[rgb(1, 14, 53)] p-6 border-2 rounded-lg shadow-md">
            <img src={project.imgSrc} alt={project.projectName} className="w-full h-auto mb-4 rounded-lg" />

            <h3 className="text-xl font-bold mb-2">{project.projectName}</h3>

            <p className="text-[#b2c5c5] mb-4">{project.projectDesc}</p>

            <div className="flex items-center mb-4">
              <span className="text-gray-600 pr-2">Used Languages    </span>
              <div className="flex space-x-2">{project.langIcons}</div>
            </div>

            <div className="flex space-x-4">
              <button className="bg-[#23283e] text-white py-2 px-4 rounded border hover:bg-[#69729b]">
                <a href={project.live}>Live Demo</a>
              </button>
              <button className="bg-[#23283e] text-white py-2 px-4 rounded border hover:bg-[#69729b]">
                <a href={project.link}>Code</a>
              </button>
            </div>
          </div>
        ))}
      </div>
      </animated.div>
    </div>
  );
};

export default ProjectSection;
