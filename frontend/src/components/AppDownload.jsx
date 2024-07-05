import React from 'react'

const AppDownload = () => {
    return (
        <div className='my-10 flex justify-center' id='appDownload'>
            <div className=' text-gray-500 flex items-center flex-col space-y-5'>
                <h2 className='text-center m-auto text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold w-3/4'>For Better Experience Download IndiaEats App</h2>
                <div className='space-x-10'>
                    <i className="fa-brands fa-google-play text-6xl cursor-pointer hover:text-gray-700 hover:text-[65px]"></i>
                    <i className="fa-brands fa-app-store text-6xl cursor-pointer hover:text-gray-700 hover:text-[65px]"></i>
                </div>
            </div>

        </div>
    )
}

export default AppDownload
