import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'


const Orders = ({ url }) => {
  const [data, setData] = useState([]);

  const listOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      console.log(response.data.data);
      if (response.data.success) {
        setData(response.data.data)
      }

    } catch (error) {
      console.log({ message: error });
    }
  }

  useEffect(() => {
    listOrders();
  }, [])

  const statusHandler = async (e, orderId) => {
    const response = await axios.post(url + "/api/order/status", { orderId, status: e.target.value });
    if (response.data.success) {
      await listOrders();
    }

  }


  return (
    <div className='px-4 py-2 mx-auto my-5 w-[70%] text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl'>
      <h2 className='text-gray-500 font-bold text-center text-[10px] sm:text-xs md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl'>Orders Page</h2>
      {data.map((orders, index) => (
        <div key={index} className='p-4  mt-4 items-center border-2 border-solid border-gray-400 bg-slate-100 rounded-sm'>
        <div className='font-bold'>
          Order Number : {index+1}
        </div>
        <div key={index} className='grid grid-cols-2'>
          <div>
            <p className='font-bold'>
              {orders.items.map((item, index) => {
                if (index === orders.items.length - 1) {
                  return item.name + " x " + item.quantity;
                } else {
                  return item.name + " x " + item.quantity + ", ";
                }
              })}
            </p>
            <p>{orders.address.firstName + " " + orders.address.lastName}</p>
            <div>
              <p>{orders.address.street}</p>
              <p>{orders.address.city + " , " + orders.address.pincode + " , " + orders.address.state + " , " + orders.address.country}</p>
            </div>
            <p>{orders.address.phone}</p>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex space-x-4 justify-center'>
              <p className='text-center'>Items: {orders.items.length}</p>
              <p className='text-center'>Rs. {orders.amount}</p>
            </div>
            <div className='text-center'>
              <select className='px-1 py-1 border border-solid border-orange-400 cursor-pointer outline-orange-400' onChange={(e) => statusHandler(e, orders._id)} value={orders.status}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Food Delivered">Food Delivered</option>
              </select>
            </div>
          </div>



        </div>
        </div>
      ))}
    </div>
  )
}

export default Orders
