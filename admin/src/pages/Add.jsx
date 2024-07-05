import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

const Add = ({url}) => {

    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "salad"
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image)
        try {
            const response = await axios.post(`${url}/api/food/add`, formData);
            if (response.data) {
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: "salad"
                });
                setImage(false);
                toast.success(response.data.message);
            } else {
                toast.error(response.error.message);
            }
        } catch (error) {
            toast.error("Submission error: ", error.response ? error.response.data : error.message)
        }
    
    }

    return (
        <div className='px-2 py-2 mx-auto my-5 w-[70%] text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl border-2 border-solid border-orange-400 rounded-md'>
            <form className='space-y-2' onSubmit={onSubmitHandler}>
                <div className='flex flex-col space-y-2'>
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        {image
                            ? <img src={URL.createObjectURL(image)} className='w-[10vw]' alt="" />
                            : <i className="fa-regular fa-image text-orange-400 hover:text-orange-600 cursor-pointer"></i>}
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
                </div>
                <div className='flex flex-col space-y-2'>
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Product Name' className='px-2 py-1 border border-solid border-orange-300 outline-orange-500' required />
                </div>
                <div className='flex flex-col space-y-2'>
                    <p>Description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Product Description' className='px-2 py-1 border border-solid border-orange-300 outline-orange-500' required></textarea>
                </div>
                <div className='flex items-center space-x-10'>
                    <div className='flex flex-col space-y-2'>
                        <p>Category</p>
                        <select name="category" onChange={onChangeHandler} className='px-2 py-1 border border-solid border-orange-300 outline-orange-500' required>
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Dessert</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Paasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p>Product Price</p>
                        <input type="text" name='price' onChange={onChangeHandler} value={data.price} placeholder='Product Price' className='px-2 py-1 border border-solid border-orange-300 outline-orange-500' required />
                    </div>
                </div>
                <button type="submit" className="text-white hover:text-orange-500 border hover:border-orange-400 hover:bg-white bg-orange-500 font-medium rounded-lg text-[10px] md:text-[14px] lg:text-lg xl:text-xl px-5 py-2 text-center">Add Product</button>
            </form>
        </div>
    )
}

export default Add
