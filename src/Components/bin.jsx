import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaHtml5, FaPhp } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { FaSquareJs, FaReact } from 'react-icons/fa6';
import { GrMysql } from 'react-icons/gr';

const Project = ({ id, imgSrc, projectName, projectDesc, langIcons, live, link }) => {
    const springProps = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(50px)' },
        delay: id * 100, // staggered animation delay based on project id
    });

    return (
        <animated.div style={springProps} className="bg-[#23283e] p-6 border-2 rounded-lg shadow-md transition transform hover:scale-105">
            <img src={imgSrc} alt={projectName} className="w-full h-auto mb-4 rounded-lg" />

            <h3 className="text-xl font-bold mb-2">{projectName}</h3>

            <p className="text-[#b2c5c5] mb-4">{projectDesc}</p>

            <div className="flex items-center mb-4">
                <span className="text-gray-600 pr-2">Used Languages    </span>
                <div className="flex space-x-2">{langIcons}</div>
            </div>

            <div className="flex space-x-4">
                <button className="bg-[#23283e] text-white py-2 px-4 rounded border hover:bg-[#69729b]">
                    <a href={live} target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                </button>
                <button className="bg-[#23283e] text-white py-2 px-4 rounded border hover:bg-[#69729b]">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        Code
                    </a>
                </button>
            </div>
        </animated.div>
    );
};

const ProjectSection2 = () => {
    const projects = [
        {
            id: 2,
            // imgSrc: iImage2,
            projectName: 'Currency Converter',
            projectDesc: `Welcome to the Currency Converter! This tool allows you to convert between different currencies, providing you with up-to-date exchange rates. Simply enter the amount, select the source currency, choose the target currency, and click the "Convert" button to get the converted amount. I had use Api call for currency as well as for flags  `,
            langIcons: [<FaHtml5 key="html" size={30} />, <IoLogoCss3 key="css" size={30} />, <FaSquareJs key="js" size={30} />],
            link: 'https://github.com/algowhiz/Projects/tree/main/api',
        },
        {
            id: 3,
            // imgSrc: iImage3,
            projectName: 'Dragon game',
            projectDesc: `Welcome to the Currency Converter! This tool allows you to convert between different currencies, providing you with up-to-date exchange rates. Simply enter the amount, select the source currency, choose the target currency, and click the "Convert" button to get the converted amount. I had use Api call for currency as well as for flags  `,
            langIcons: [<FaHtml5 key="html" size={30} />, <IoLogoCss3 key="css" size={30} />, <FaSquareJs key="js" size={30} />],
            link: 'https://github.com/algowhiz/Projects/tree/main/dragon',
        },
    ];

    return (
        <div className="container mx-auto py-10" name="Project">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <Project key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectSection2;
