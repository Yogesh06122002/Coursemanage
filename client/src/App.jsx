import { useState } from 'react'
import React from 'react'
import './App.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Menu from './components/Menu.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/",
    element:<Login/>
  }

  ,
  {
    path:"/home",
    element:<Home/>
  }
])

function App() {


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
