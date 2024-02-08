import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Contact = () => {
    return (
        <>
            <div class="container mx-auto py-10" name="Contact">
                <h2 class="text-3xl font-bold mb-6 text-center">Get in Touch</h2>

                <div class="flex flex-nowrap justify-center space-x-2 md:space-x-5 ">
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


                <div name="contact" className='w-auto h-[600px] flex justify-center items-center p-1 contact'>
                    <form action="https://getform.io/f/8a6ce622-d082-4360-9eb2-746d74f99c27" method='POST' className='flex flex-col max-w-[400px] w-full'>
                        <input type="text" placeholder='Name' name='name' className='rounded my-4 p-2 bg-[#ccd6f6]' />
                        <input type="email" placeholder='email' name='email' className='rounded my-4 p-2  bg-[#ccd6f6]' />
                        <textarea name="message" cols="30" rows="10" className='rounded my-4 p-4  bg-[#ccd6f6]' placeholder='message'></textarea>
                        <button className='text-white border-2 rounded hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center '>Let's Collaborate</button>
                    </form>
                </div>


                <div class="flex flex-col md:flex-row justify-between ">

                    <div class="flex flex-col mb-4 md:mb-0 ml-4">
                        <span class="text-lg font-semibold text-[#e9dbdb]">Email:</span>
                        <p class="text-[#e9dbdb] ">manishkadam219@gmail.com</p>
                    </div>


                    <div class="flex flex-col ml-4">
                        <span class="text-lg font-semibold text-[#e9dbdb]">Phone:</span>
                        <p class="text-[#e9dbdb]">+91 9137884101</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact