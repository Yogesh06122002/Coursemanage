import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password:""
  });

  const handleChange = async (e) => {
    const {name,value} = e.target;
    setData({
      ...data,
      [name]:value
    })
  }

  const handleSubmit = async (e) => {
    try{

      e.preventDefault();
      axios.post("http://localhost:5000/api/user/login",data).then((res) =>{

        console.log("User login successfully");
        navigate("/home");
      })
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>
       <div className='flex justify-center bg-[#EFEAFE] items-center h-[100vh] '>
    <div className='bg-white m-14 px-10 p-5 w-[30%] rounded-lg text-xl'>
      <form action="" onSubmit={handleSubmit} className='flex flex-col gap-3 h-auto'>
        
        <label htmlFor="" >Email</label>
        <input type="email" className='rounded-md border-gray-400 border p-2 outline-none' name='email' value={data.email} onChange={handleChange} />
        <label htmlFor="" >Password</label>
        <input type="password" className='rounded-md border-gray-400 border p-2 outline-none' name='password' value={data.password} onChange={handleChange}/>
        

        <button className='text-white bg-violet-500  rounded-md  mt-5 p-3'>Log in</button>
        <p className=' m-2'>Don't have a Account? <Link to='/register' className='text-violet-500'>Register</Link></p>
      </form>


    </div>
   </div>
    </div>
  )
}

export default Login