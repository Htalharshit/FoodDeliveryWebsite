import React from 'react'
import logo from '../assets/logo.jpg'

const Footer = () => {
    return (
        <div className='bg-slate-700 text-white' id='footer'>
            <div className='flex flex-col lg:flex-row justify-between w-[80vw] m-auto text-center'>
                <div className='m-5 text-justify lg:w-[50vw]'>
                    <div className='flex justify-center'>
                        <img src={logo} alt="" className='cursor-pointer w-52 md:w-56' />
                    </div>
                    <p className='mt-2 text-xs md:text-sm xl:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquam sed similique hic pariatur mollitia est tempore perferendis ea? Debitis, possimus sunt porro optio mollitia magni, magnam asperiores odio officiis est tempora adipisci nihil modi. Voluptates esse fugit ipsa dicta veniam mollitia, rem dolorum magnam iusto quidem ipsam labore nemo?</p>
                    <div className='space-x-8 text-orange-400 text-center'>
                        <i className="fa-brands fa-facebook text-xs md:text-lg xl:text-2xl cursor-pointer hover:text-orange-600"></i>
                        <i className="fa-brands fa-square-instagram text-xs md:text-lg xl:text-2xl cursor-pointer hover:text-orange-600"></i>
                        <i className="fa-brands fa-linkedin text-xs md:text-lg xl:text-2xl cursor-pointer hover:text-orange-600"></i>
                        <i className="fa-brands fa-x-twitter text-xs md:text-lg xl:text-2xl cursor-pointer hover:text-orange-600"></i>
                    </div>
                </div>
                <div className='m-5'>
                    <h2 className='text-base md:text-lg lg:text-xl font-medium '>COMPANY</h2>
                    <ul className='text-center'>
                        <li className='cursor-pointer text-xs md:text-sm xl:text-base'>Home</li>
                        <li className='cursor-pointer text-xs md:text-sm xl:text-base'>About us</li>
                        <li className='cursor-pointer text-xs md:text-sm xl:text-base'>Delivery</li>
                        <li className='cursor-pointer text-xs md:text-sm xl:text-base'>Privacy Policy</li>
                    </ul>
                </div>
                <div className='m-5'>
                    <h2 className='text-base md:text-lg lg:text-xl font-medium'>GET IN TOUCH</h2>
                    <ul className='text-center'>
                        <li className='cursor-pointer  text-xs md:text-sm xl:text-base'>+91 1234567890</li>
                        <li className='cursor-pointer  text-xs md:text-sm xl:text-base'><i className="fa-regular fa-envelope text-xs md:text-lg xl:text-2xl cursor-pointer text-orange-400 hover:text-orange-600"></i> indiaeats@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr className='h-2 text-gray-400 w-[80vw] m-auto' />
            <p className='mt-3 text-center text-xs md:text-sm lg:text-base'>Copyright 2024 &#169; IndiaEats.com - All Rights Reserved</p>
        </div>
    )
}

export default Footer
