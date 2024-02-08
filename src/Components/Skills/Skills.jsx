import React from 'react'
import { FaHtml5 ,FaPhp  } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaSquareJs , FaReact } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";

const SkillItem = ({ icon, text }) => {
    return (
      <div className='flex flex-col items-center'>
        <div className="flex flex-col items-center border-2 border-[#8a8df1] w-[120px] rounded mt-3 p-5">
        {icon}
        <p>{text}</p>
      </div>
      </div>
    );
  }

const Skills = () => {
  return (
    <div className="container mx-auto mt-10 p-10" name="Skills">
      <h1 className="text-4xl pb-5 text-center sm:text-left md:text-center">Skills</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 md:h-[300px] gap-6 pt-3">
        {/* HTML */}
        <SkillItem icon={<FaHtml5 size={50} className=" text-[#8a8df1] transition-all duration-300 ease-in-out  hover:scale-150 hover:pb-3  cursor-pointer" />} text="HTML" />

        {/* CSS */}
        <SkillItem icon={<IoLogoCss3 size={50} className=" text-[#8a8df1] transition-all duration-300 ease-in-out  hover:scale-150 hover:pb-3  cursor-pointer" />} text="CSS" />

        {/* JavaScript */}
        <SkillItem icon={<FaSquareJs size={50} className=" text-[#8a8df1] transition-all duration-300 ease-in-out  hover:scale-150 hover:pb-3  cursor-pointer" />} text="JavaScript" />

        {/* ReactJS */}
        <SkillItem icon={<FaReact size={50} className=" text-[#8a8df1] transition-all duration-300 ease-in-out  hover:scale-150 hover:pb-3  cursor-pointer" />} text="ReactJS" />

        {/* MySQL */}
        <SkillItem icon={<GrMysql size={50} className=" text-[#8a8df1] transition-all duration-300 ease-in-out  hover:scale-150 hover:pb-3  cursor-pointer" />} text="MySQL" />

        {/* PHP */}
        <SkillItem icon={<FaPhp size={50} className=" text-[#8a8df1] transition-all duration-300 ease-in-out  hover:scale-150 hover:pb-3  cursor-pointer" />} text="PHP" />
      </div>
    </div>
  )
}

export default Skills