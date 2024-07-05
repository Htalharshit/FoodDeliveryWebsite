import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PlaceOrder = () => {

  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 20;
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item }; // Avoid mutation
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + deliveryFee,
    };

    console.log("Order Data:", orderData); // Log orderData

    try {
      let response = await axios.post(`${url}/api/order/place`, orderData, { headers: { token } });
      console.log("API Response:", response); // Log response

      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      }
    } catch (error) {
      console.error("API Error:", error); // Log errors
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
      toast.error("Please Login First");
    } else if (getTotalCartAmount() === 0) {
      navigate("/");
      toast.error("Cart is Empty!");
    }
  }, [token])

  return (
    <form className='mt-10 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:grid md:grid-cols-2' onSubmit={placeOrder}>
      <div className='my-5 py-4 px-5 border border-solid border-orange-400 rounded-lg bg-slate-100 md:mr-5'>
        <h2 className='text-gray-700 font-bold text-center'>Delivery Information</h2>
        <div className='grid grid-cols-2 mt-3 mb-2'>
          <input required type="text" placeholder='First name' name='firstName' onChange={onChangeHandler} value={data.firstName} className='mx-2 border border-orange-400 outline-orange-500 px-3 py-1 rounded-md' />
          <input required type="text" placeholder='Last name' name='lastName' onChange={onChangeHandler} value={data.lastName} className='mx-2 border border-orange-400 outline-orange-500 px-3 py-1 rounded-md' />
        </div>
        <div className='grid grid-cols-1 mt-3 mb-2'>
          <input required type="email" placeholder='Email' name='email' onChange={onChangeHandler} value={data.email} className='mx-2 border border-orange-400 outline-orange-500 px-3 py-1 rounded-md' />
        </div>
        <div className='grid grid-cols-1 mt-3 mb-2'>
          <input required type="text" placeholder='Street / Lane / House no.' name='street' onChange={onChangeHandler} value={data.street} className='mx-2 border border-orange-400 outline-orange-500 px-3 py-1 rounded-md' />
        </div>
        <div className='grid grid-cols-2 mt-3 mb-2'>
          <input required type="text" placeholder='City' name='city' onChange={onChangeHandler} value={data.city} className='mx-2 border border-orange-400 outline-orange-500 px-3 py-1 rounded-md' />
          <input required type="text" placeholder='State' name='state' onChange={onChangeHandler} value={data.state} className='mx-2 border border-orange-400 outline-orange-500 px-3 py-1 rounded-md' />
        </div>
        <div className='grid grid-cols-2 mt-3 mb-2'>
          <input required type="number" placeholder='Pin Code' name='pincode' onChange={onChangeHandler} value={data.pincode} className='mx-2 border border-orange-400 outline-orange-500 px-3 py-1 rounded-md' />
          <input required type="text" placeholder='Country' name='country' onChange={onChangeHandler} value={data.country} className='mx-2 border border-orange-400 outline-orange-500 px-3 py-1 rounded-md' />
        </div>
        <div className='grid grid-cols-1 mt-3 mb-2'>
          <input required type="number" placeholder='Phone number' name='phone' onChange={onChangeHandler} value={data.phone} className='mx-2 border border-orange-400 outline-orange-500 px-3 py-1 rounded-md' />
        </div>
      </div>
      <div className='my-5 py-4 px-5 border border-solid border-orange-400 rounded-lg bg-slate-100 md:ml-5'>
        <div>
          <h2 className='text-gray-700 font-bold'>Cart Total</h2>
          <div className='my-2 text-gray-500 flex justify-between'>
            <h3 className='my-1'>Sub Total</h3>
            <p className='my-1'>Rs. {getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className=' my-2 text-gray-500 flex justify-between'>
            <h3 className='my-1'>Delivery Fee</h3>
            <p className='my-1'>Rs. {deliveryFee}</p>
          </div>
          <hr />
          <div className='my-2  flex justify-between'>
            <h3 className='my-1'>Total</h3>
            <p className='my-1'>Rs. {getTotalCartAmount() + deliveryFee}</p>
          </div>
          <div className='flex justify-center'>
            <button type="submit" className="hover:text-orange-400 text-white border border-orange-400 bg-orange-500 hover:bg-white font-medium rounded-lg px-5 py-2 text-center">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
