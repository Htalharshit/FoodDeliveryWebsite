import React from 'react'
import './Header.css'
const Header = () => {


    
  return (
    <div className='flex  items-center h-[34vw] my-8 mx-0 bg-no-repeat bg-contain' style={{backgroundImage: `url('/header_img.png')`}}>
      <div className='mx-10 animated'>
        <h2 className='text-white text-[8px] sm:text-base md:text-3xl lg:text-5xl xl:text-7xl font-bold w-fullull sm:w-2/3 '>Order Your Favourite Food Here</h2>
        <p className='text-white text-[5px] sm:text-[8px] md:text-[10px] lg:text-base xl:text-xl w-3/4'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and cullinary ingredients. Our mission is to satisfy your cravings and elevate your dining experience , one delicious meal at a time.</p>
        <button type="button" className="text-[5px] sm:text-[7px] md:text-[10px] lg:text-base xl:text-xl text-white hover:text-orange-500 hover:bg-white border border-white font-medium rounded-lg  px-3 py-1 my-2 ">Know More</button>
      </div>
    </div>
  )
}

export default Header
