import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

function Createcourse() {
  return (
    <div className='p-5 pt-6 w-full h-[100vh] overflow-y-scroll'>
      <div className="flex justify-between ">
        <div className='font-medium'>
          My Courses/ <span className='text-violet-500'>Create new course</span>
        </div>
        <div className="flex gap-4 text-gray-400 text-xl">
        <AiOutlineMail />
        <IoNotificationsOutline  />
        <MdOutlineDarkMode />
        <Link to="/register">< FaRegCircleUser /></Link>
        < IoIosArrowDown />
        </div>

          


      </div>
        <div className="flex mt-8 gap-3">
          <div className="flex gap-2 items-center">
            <div className=" bg-violet-500  text-white rounded-full px-2">1</div>
            <div className="text-violet-500 font-medium text-sm">Course Information & FAQ</div>
            <MdKeyboardArrowRight className='text-2xl text-violet-500' />


          </div>
          <div className="flex gap-2 items-center">
            <div className="  text-gray-400 border-gray-400 border rounded-full px-2">2</div>
            <div className="text-gray-400 font-medium text-sm">Update Course Materials</div>
            <MdKeyboardArrowRight className='text-2xl text-gray-400' />


          </div>
          <div className="flex gap-2 items-center">
            <div className="  text-gray-400 border-gray-400 border rounded-full px-2">3</div>
            <div className="text-gray-400 font-medium text-sm">Pricing</div>
            <MdKeyboardArrowRight className='text-2xl text-gray-400' />


          </div>
          <div className="flex gap-2 items-center">
            <div className="  text-gray-400 border-gray-400 border rounded-full px-2">4</div>
            <div className="text-gray-400 font-medium text-sm">Publish</div>
            


          </div>
          <div className='text-sm border-2 ml-[300px] border-gray-100 font-medium p-2'>
            Preview
          </div>
        </div>

      <div className="flex mt-8">
        <div className="w-[50%] ">
          <p className=" font-semibold text-xl">Course information</p>
          <form action="" className='mt-4 w-full font-semibold'>
            <div className='space-y-1'>

            <label htmlFor="" >Title</label>
            <input type="text" className='w-full p-2 bg-[#F3F4F8] outline-none  rounded  ' placeholder='e.g. Introduction to Data Analysis'/>
            </div>
            <div className="flex mt-4 w-full gap-2">
            <div className='space-y-1 w-full'>

            <label htmlFor="" >Category</label>
            <input type="text" className='w-full p-2 bg-[#F3F4F8] outline-none  rounded  ' placeholder='e.g. Data management'/>
            </div>
            <div className='space-y-1 w-full'>

            <label htmlFor="" >Level</label>
            <select className='w-full p-2 bg-[#F3F4F8] outline-none text-gray-400 rounded  px-4 ' >
              <option value="Basic">Basic</option>
              <option value="Advance">Advance</option>
            </select>
            </div>

            </div>
            <div className='space-y-1 mt-4'>

            <label htmlFor="" >Discription</label>
            <input type="text" className='w-full  h-48 p-2 bg-[#F3F4F8] outline-none  rounded  ' />
            </div>

            <button className='text-center bg-violet-500 text-white font-normal p-2  rounded-md mt-5'>Save & Continue</button>

          </form>

        </div>
        <div className="w-[50%] ml-4">
          <div className="w-full">

          <p className='font-semibold'>Cover Image</p>
          <div className="w-full flex mt-2 justify-center items-center h-[40%] border-2  py-20 border-gray-400 border-dashed">upload</div>
          </div>
          <div className="w-full mt-5">

          <p className='font-semibold'>Sales Video</p>
          <div className="w-full flex mt-2 justify-center items-center h-[40%] border-2  py-20 border-gray-400 border-dashed">upload</div>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Createcourse