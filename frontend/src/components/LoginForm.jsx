import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext';
import axios from "axios"
import { toast } from 'react-toastify';


const LoginForm = (props) => {
  const { url, setToken } = useContext(StoreContext);
  const { setShowLoginForm } = props;
  const [currentState, setCurrentState] = useState("Login")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login"
    }
    else {
      newUrl += "/api/user/register"
    }
    try {
      const response = await axios.post(newUrl, data);
      console.log(response);
      if (response.data.token) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLoginForm(false);
        toast.success(response.data.message);
      }
      else {
        toast.error("Error Occured");
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred. Please try again.');
    }
   
  }

  return (
    <div className='min-h-[50vh] flex justify-center items-center'>
      <form className='w-[300px] sm:w-[400px] border-2 border-solid border-orange-500 text-[#808080] bg-white flex flex-col gap-6 py-6 px-7 rounded-lg text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base' onSubmit={onLogin}>
        <div className='flex justify-between'>
          <h2 className='font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-orange-500'>{currentState}</h2>
          <i className="fa-solid fa-square-xmark font-semibold text-orange-500 hover:text-orange-600" onClick={() => setShowLoginForm(false)}></i>
        </div>
        <div className='flex flex-col space-y-3'>
          {currentState !== "Login"
            ? <input type="text" name='name' placeholder='Enter Your Name' className='py-2 px-3 border border-solid border-orange-400 outline-orange-600 rounded-md' required onChange={onChangeHandler} value={data.name} />
            : <></>}
          <input type="email" name='email' placeholder='Enter Your Email' className='py-2 px-3 border border-solid border-orange-400 outline-orange-600 rounded-md' onChange={onChangeHandler} value={data.email} required />
          <input type="password" name='password' placeholder='Enter Your Password' className='py-2 px-3 border border-solid border-orange-400 outline-orange-600 rounded-md' onChange={onChangeHandler} value={data.password} required />
        </div>
        <button type="submit" className="hover:text-orange-400 text-white border border-orange-400 bg-orange-500 hover:bg-white font-medium rounded-lg px-5 py-2 text-center">{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className='flex space-x-1'>
          <input type="checkbox" className='cursor-pointer' required />
          <p>By continuing, I agree to the terms & privacy policy.</p>
        </div>
        {currentState === "Login"
          ? <p className='text-center'>Create a new account? <span className='cursor-pointer text-orange-500' onClick={() => setCurrentState("Sign Up")}>Click Here</span></p>
          : <p className='text-center'>Already have an account? <span className='cursor-pointer text-orange-500' onClick={() => setCurrentState("Login")}>Login Here</span></p>}
      </form>
    </div>
  )
}

export default LoginForm
