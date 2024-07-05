import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const List = ({url}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data) {
      setList(response.data.data)
    }
    else {
      toast.error(response.msg);
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  const removeFood= async(foodId)=>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    toast.success(response.data.msg);
    await fetchList();
  }

  return (


    <div className='px-2 py-2 mx-auto my-5 w-[70%] text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl'>
      <h2 className='text-gray-500 text-center'>All Food Items</h2>
      <div className='my-5'>
        <div className='px-3 py-1 grid grid-cols-5 items-center border border-solid border-gray-500 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl  rounded-lg rounded-b-none'>
          <p className='text-center'>Image</p>
          <p className='text-center'>Name</p>
          <p className='text-center'>Category</p>
          <p className='text-center'>Price</p>
          <p className='text-center'>Action</p>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='px-3 py-1 grid grid-cols-5 items-center border-x border-b border-solid border-gray-500 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl'>
              <img src={`${url}/images/` + item.image} alt="" className='w-6 sm:w-12 m-auto'/>
              <p className='text-center'>{item.name}</p>
              <p className='text-center'>{item.category}</p>
              <p className='text-center'>{item.price}</p>
              <p className='text-center'><i className="fa-solid fa-x text-orange-400 hover:text-orange-600 cursor-pointer" onClick={()=>removeFood(item._id)}></i></p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
