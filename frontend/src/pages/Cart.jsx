import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { food_list, cartItems, removeFromCart, getTotalCartAmount ,url} = useContext(StoreContext);
  const navigate = useNavigate();
  const deliveryFee= getTotalCartAmount()===0?0:20;


  return (
    <div className='cart min-h-[50vh] mt-10'>
      <div className='cartItems'>
        <div className='grid grid-cols-6 items-center justify-between font-semibold text-gray-600 text-[8px] sm:text-[10px] md:text-xs lg:text-base xl:text-xl '>
          <p className='p-2 text-center'>Items</p>
          <p className='p-2 text-center'>Title</p>
          <p className='p-2 text-center'>Price</p>
          <p className='p-2 text-center'>Quantity</p>
          <p className='p-2 text-center'>Total</p>
          <p className='p-2 text-center'>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="grid grid-cols-6 items-center justify-between text-gray-600 text-[8px] sm:text-[10px] md:text-xs lg:text-base xl:text-xl ">
                  <p className='p-2'><img src={url+"/images/"+item.image} alt="" className='w-14 m-auto' /></p>
                  <p className='p-2 text-center'>{item.name}</p>
                  <p className='p-2 text-center'>Rs. {item.price}</p>
                  <p className='p-2 text-center'>{cartItems[item._id]}</p>
                  <p className='p-2 text-center'>Rs. {item.price * cartItems[item._id]}</p>
                  <p className='p-2 text-center'><i className="fa-solid fa-square-xmark text-orange-400 hover:text-orange-600 cursor-pointer" onClick={() => removeFromCart(item._id)}></i></p>
                </div>
                <hr /></div>
            )
          }
        })}
        <div className='mt-10 md:grid md:grid-cols-2 '>
          <div className='my-10 py-4 px-5 border border-solid border-orange-400 rounded-lg bg-slate-100 md:mr-5'>
            <h2 className='text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold'>Cart Total</h2>
            <div className='my-2 text-sm sm:text-base md:text-lg lg:text-xl  text-gray-500 flex justify-between'>
              <h3 className='my-1'>Sub Total</h3>
              <p className='my-1'>Rs. {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className=' my-2 text-sm sm:text-base md:text-lg lg:text-xl  text-gray-500 flex justify-between'>
              <h3 className='my-1'>Delivery Fee</h3>
              <p className='my-1'>Rs. {deliveryFee}</p>
            </div>
            <hr />
            <div className='my-2 text-sm sm:text-base md:text-lg lg:text-xl  font-bold text-gray-700 flex justify-between'>
              <h3 className='my-1'>Total</h3>
              <p className='my-1'>Rs. {getTotalCartAmount()+deliveryFee}</p>
            </div>
            <div className='flex justify-center'>
              <button type="button" className="hover:text-orange-400 text-white border border-orange-400 bg-orange-500 hover:bg-white font-medium rounded-lg text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2 text-center" onClick={()=>navigate('/placeorder')}>PROCEED TO CHECKOUT</button>
            </div>
          </div>
          
          <div className='my-10 py-4 px-5 border border-solid border-orange-400 rounded-lg bg-slate-100 md:ml-5'>
            <div className='text-sm sm:text-base md:text-lg lg:text-xl  text-gray-500'>
              <p className='mb-2'>If you have a promo code, enter it here</p>
              <div className='flex flex-col space-y-5'>
                <input type="text" placeholder='promo code' className='outline-orange-400 rounded-lg py-1 px-3 border border-orange-400'/>
                <button type="button" className="hover:text-orange-400 text-white border border-orange-400 bg-orange-500 hover:bg-white font-medium rounded-lg  px-5 py-2 text-center w-fit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
