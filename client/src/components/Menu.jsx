import React from 'react'
import { GiGraduateCap } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { BiBookOpen } from "react-icons/bi";
import { SlSettings } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { TbHelpHexagon } from "react-icons/tb";
import { PiSignOutFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className='w-[20%] bg-[#F3F4F8] h-[100vh] px-5 '>
      <div className="text-violet-500 flex items-center  gap-5 text-xl py-6 ">
      <div className="text-3xl ">
        <GiGraduateCap />
        </div>
        <div className="font-semibold">
          LOGO
        </div>
      </div>
      <Link to ='/' className="flex gap-4 text-gray-500  items-center mb-4 ">
        <div className="text-xl"><IoHomeOutline /></div>
        <div className="font-medium">Home</div>
      </Link>
      <div className="flex gap-4 text-gray-500  items-center mb-4">
        <div className="text-xl">
        <BiBookOpen /></div>
        <div className="font-medium">My courses</div>
      </div>
      <div className="flex gap-4  text-gray-500 items-center mb-4">
        <div className="text-xl"><SlSettings /></div>
        <div className="font-medium">Settings</div>
      </div>
      <div className="flex gap-4 text-gray-500 items-center mb-4">
        <div className="text-xl"><FaRegUser /></div>
        <div className="font-medium">Profile</div>
      </div>
      <div className="mt-72">

      <div className="flex gap-4 text-gray-500 items-center mb-4">
        <div className="text-xl"><TbHelpHexagon /></div>
        <div className="font-medium">Help</div>
      </div>
      <div className="flex gap-4 text-gray-500 items-center mb-4">
        <div className="text-xl"><PiSignOutFill />
        </div>
        <div className="font-medium">Sign Out</div>
      </div>
      </div>
      
      
      
    </div>
  )
}

export default Menu