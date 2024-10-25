import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {

  const navigate = useNavigate();

const [data, setData] = useState({
  name:"",
  email:"",
  phno:'',
  password:""
})

const handelChange = async (e) =>{
  const {name,value} = e.target;
  setData({
    ...data,
    [name]:value
  })
}

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(data);
  try{

    axios.post("http://localhost:5000/api/user/register",data).then((err) => {

      console.log("User Registered Successfully");
      navigate('/');
    })
    
  }catch(err){
    console.log(err);
  }
}

  return (
     <div className='flex justify-center bg-[#EFEAFE] items-center'>
    <div className='bg-white m-14 px-10 p-5 w-[30%] rounded-lg text-xl'>
      <form action="" onSubmit={handleSubmit} className='flex flex-col gap-3 h-auto'>
        <label htmlFor="">Name</label>
        <input type="text"  className='rounded-md border-gray-400  border p-2 outline-none' name='name' value={data.name} onChange={handelChange}/>
        <label htmlFor="" >Email</label>
        <input type="email" className='rounded-md border-gray-400 border p-2 outline-none' name='email' value={data.email} onChange={handelChange} />
        <label htmlFor="" >Password</label>
        <input type="password" className='rounded-md border-gray-400 border p-2 outline-none' name='password' value={data.password} onChange={handelChange}/>
        <label htmlFor="">Phone No</label>
        <input type="" className='rounded-md border-gray-400 border p-2 outline-none' name='phno' value={data.phno} onChange={handelChange}/>

        <button className='text-white bg-violet-500  rounded-md  mt-5 p-3'>Register</button>
        <p className=' m-2'>Already have an Account? <Link to='/' className='text-violet-500'>Log in</Link></p>
      </form>


    </div>
   </div>
  )
}

export default Register