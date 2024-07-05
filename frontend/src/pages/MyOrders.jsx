import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

const MyOrders = () => {
    const [data,setData]= useState([]);
    const {url, token} = useContext(StoreContext);

    const fetchOrders= async()=>{
        const response = await axios.post(url+"/api/order/userorder",{},{headers:{token}});
        setData(response.data.data);
        console.log(response.data.data)
    }

    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token]);

  return (
    <div>
      <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-500 font-bold text-center my-5 px-2 py-1'>My Orders</h2>
      <div>
        {data.map((order,index)=>{
            return <div key={index} className='px-1 py-3 border-2 border-solid border-gray-400 bg-slate-100 rounded-md my-2 grid grid-cols-6 items-center text-[8px] sm:text-[10px] md:text-xs lg:text-base xl:text-xl'>
                <i className="fa-solid fa-box text-center  text-orange-400 hover:text-orange-600 cursor-pointer"></i>
                <p>{order.items.map((item,index)=>{
                    if(index=== order.items.length-1){
                        return item.name+" x "+item.quantity;
                    }
                    else{
                        return item.name+" x "+item.quantity+", ";
                    }
                })}</p>
                <p className='text-center'>Rs. {order.amount}</p>
                <p className='text-center'>Items: {order.items.length}</p>
                <p className='text-center'><span className='text-orange-400'>&#x25cf;</span><b> {order.status}</b></p>
                <p className='text-center'><button type="button" className="text-orange-400 hover:text-white border border-orange-400 hover:bg-orange-500 font-medium rounded-lg py-1 px-3" onClick={fetchOrders} >Track Order</button></p>
                

            </div>
        })}
      </div>
    </div>
  )
}

export default MyOrders
