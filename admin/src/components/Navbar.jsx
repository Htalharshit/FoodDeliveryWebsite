import React from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <div className='flex justify-between h-[10vh] p-2 mt-5'>
      <img src={logo} alt="" className='ml-10'/>
      <div className='flex items-center'>
      <i className="fa-regular fa-user text-2xl mr-10 text-orange-500"></i>
      </div>
      
    </div>
  )
}

export default Navbar
