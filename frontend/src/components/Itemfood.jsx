import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext';

const Itemfood = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

    return (
        <div className='cursor-pointer'>
            <div className=' bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden mb-1'>
                <img src={url+"/images/"+image} alt="" className="w-full h-48 object-cover" />
            </div>
            <div>
                <div className='flex justify-between'>
                    <p className="text-xl font-semibold">{name}</p>
                    <img src={assets.rating_starts} alt="" className='h-5' />
                </div>
                <p className="text-gray-700">{description}</p>
                <p className="text-lg font-bold text-green-600">Rs.{price}</p>
                {!cartItems[id]
                    ? <div className='flex justify-center'>
                        <span className='border border-solid border-orange-500 rounded-lg px-4 py-2 text-orange-500 font-medium' onClick={() => addToCart(id)}>Add to Cart</span>
                    </div>
                    : <div className='flex justify-center'>
                        <div className='flex items-center border border-solid border-orange-500 rounded-lg px-4 py-2 text-orange-500 font-medium'>
                            <i className="fa-solid fa-minus px-2 text-orange-500" onClick={() => removeFromCart(id)}></i>
                            <p className='text-orange-500 px-2'>{cartItems[id]}</p>
                            <i className="fa-solid fa-plus px-2 text-orange-500" onClick={() => addToCart(id)}></i>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Itemfood
