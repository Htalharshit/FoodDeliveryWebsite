import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  const [activeLink, setActiveLink] = useState("add");

  return (
    <div className='w-[25vw] border-r-2 border-solid border-gray-400'>
      <div className='pt-12 pl-5 flex flex-col space-y-5  text-white text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl '>
        <NavLink to='/' onClick={() => { setActiveLink("add") }} className={`flex items-center space-x-4 rounded-l-full px-3 py-2 cursor-pointer ${activeLink === "add" ? "bg-orange-500" : "bg-gray-500"}`}>
          <i className="fa-solid fa-plus"></i>
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' onClick={() => { setActiveLink("list") }} className={`flex items-center space-x-4 rounded-l-full px-3 py-2 cursor-pointer ${activeLink === "list" ? "bg-orange-500" : "bg-gray-500"}`}>
          <i className="fa-solid fa-list"></i>
          <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' onClick={() => { setActiveLink("orders") }} className={`flex items-center space-x-4 rounded-l-full px-3 py-2 cursor-pointer ${activeLink === "orders" ? "bg-orange-500" : "bg-gray-500"}`}>
          <i className="fa-solid fa-list"></i>
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
