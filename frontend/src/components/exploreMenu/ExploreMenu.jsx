import React from 'react'
import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'

const ExploreMenu = (props) => {
    const { category, setCategory } = props;


return (
    <div id='menu'>
        <h1 className='text-gray-500 text-3xl text-center font-medium'>Explore Our Menu</h1>
        <p className='text-gray-500 text-base text-center'>Choose a diverse menu featuring a delectable array of dishes.Our mission is to satisfy your cravings and elevate your dining experience , one delicious meal at a time.
        </p>
        <div className="mt-4 flex justify-between items-center overflow-x-scroll hideScrollbar">
            {menu_list.map((item, index) => {
                return (
                    <div key={index} onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} >
                        <img src={item.menu_image} alt="" className={`w-[7.5vw] min-w-20 cursor-pointer rounded-full ${category === item.menu_name ? "border-4 border-orange-500 p-1" : ""}`} />
                        <p className={`w-fit m-auto mt-2 text-gray-500 text-base text-center cursor-pointer ${category===item.menu_name?"border-b-2 border-gray-500":""}`}>{item.menu_name}</p>
                    </div>
                    )
            })}
        </div>
        <hr className='h-0.5 my-4 bg-[#e2e2e2] border-none' />
    </div>
)
}

export default ExploreMenu
