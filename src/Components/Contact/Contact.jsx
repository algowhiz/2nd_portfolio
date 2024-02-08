import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Contact = () => {
    return (
        <>
            <div className="container mx-auto py-10" name="Contact">
                <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>

                <div className="flex flex-nowrap justify-center space-x-2 md:space-x-5 ">
                    <a href="https://www.linkedin.com/in/manishkadam1/" target="_blank" >
                        <FaLinkedin size={80} className='border-2 p-2 rounded cursor-pointer hover:bg-[#243070]' />
                    </a>
                    <a href="https://github.com/algowhiz" target="_blank" >
                        <FaGithub size={80} className='border-2 p-3 rounded cursor-pointer hover:bg-[#000000]' />
                    </a>
                    <a href="mailto:manishkadam219@gmail.com" target="_blank" >
                        <MdOutlineMailOutline size={80} className='border-2 p-3 rounded cursor-pointer hover:bg-[#bd4343]' />
                    </a>
                    <a href="Contact" >
                        <IoCall size={80} className='border-2 p-3 rounded cursor-pointer hover:bg-[#3d7538]' />
                    </a>
                </div>



                <div className="min-h-screen bg-[rgb(1, 14, 53)] flex justify-center items-center ">
                    <form action="https://getform.io/f/8a6ce622-d082-4360-9eb2-746d74f99c27" method='POST' className="bg-[rgb(1, 14, 53)]  shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
                        <div className="mb-4">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                id="name" name='name' type="text" placeholder="Your Name" />
                        </div>
                        <div className="mb-4">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" name='email' type="email" placeholder="Email" />
                        </div>
                        <div className="mb-6">
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="message" name='message' placeholder="Message" rows="5"></textarea>
                        </div>
                        <div className="flex items-center justify-center ">
                            <button
                                className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                Let's Collaborate
                            </button>
                        </div>
                    </form>
                </div>



                <div className="flex flex-col md:flex-row justify-between ">

                    <div className="flex flex-col mb-4 md:mb-0 ml-4">
                        <span className="text-lg font-semibold text-[#e9dbdb]">Email:</span>
                        <p className="text-[#e9dbdb] ">manishkadam219@gmail.com</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
