import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import Itemfood from './Itemfood';


const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    return (
        <div>
            <h2 className='my-10 text-gray-500 text-3xl text-center font-medium'>Top Dishes to Choose from - {category}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return <Itemfood key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                })}
            </div>

        </div>
    )
}

export default FoodDisplay
