import React from 'react'
import Menu from '../components/Menu'
import Createcourse from '../components/Createcourse'

function Home() {
  return (
    <div className='flex'>
      <Menu/>
      <Createcourse/>
    </div>
  )
}

export default Home