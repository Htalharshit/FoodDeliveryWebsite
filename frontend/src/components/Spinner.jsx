import React from 'react'
import loading from '../assets/Spinner-3.gif'
const Spinner =()=>{
    return (
      <div className='h-[80vh] flex justify-center'>
        <div className='flex items-center'>
        <img src={loading} alt="loading" />
        </div>
        
      </div>
    )
  }

export default Spinner
