import React from 'react'
import iImage from './img2.jpg';


const About = () => {
    return (
        <>
            <div name="About">
                <h2 class="text-2xl font-bold mb-2 text-center p-5">About Me</h2>
                <div className="container mx-auto p-4">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <div className="mb-4 sm:mb-0">
                            <img
                                src={iImage}
                                alt="Your Image"
                                className="w-full sm:w-[400px] h-auto img"
                            />
                        </div>


                        <div className='text-gray-300'>

                            <p>
                                Hi Everyone . My name is <span className='text-gray-500'>Manish Kadam</span> and i am from <span className='text-gray-500'>Kolhapur , Maharastra , India </span> . I am persuing BCA and Currently in BCA-II year in  <span className='text-gray-500'>NEW COLLEGE</span>
                            </p><br />
                            <p className=' mt-2 pb-4'>
                                🚀 What I Do <br /><br />

                                I specialize in turning creative ideas into functional and visually appealing websites.
                            </p>
                            <p>
                                <span className='font-bold m-3 '> 🌐 Technologies I Work With </span>

                                <ul className='mt-4'>
                                    <li className='font-semibold m-3'> - HTML5 & CSS3 </li>
                                    <li className='font-semibold m-3'> - JavaScript (ES6+) </li>
                                    <li className='font-semibold m-3'> - React.js & Redux </li>
                                    <li className='font-semibold m-3'> - Tailwind CSS & Bootstrap</li>
                                    <li className='font-semibold m-3'> - Git & Version Control</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About