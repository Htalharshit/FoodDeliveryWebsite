import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'
import { useState } from 'react'
import LoginForm from './components/LoginForm'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import MyOrders from './pages/MyOrders'

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <>
      <ToastContainer />
      {showLoginForm ? <LoginForm setShowLoginForm={setShowLoginForm} /> : <></>}
      <div className={`${showLoginForm ? "hidden" : "block"}`}>
        <div className='w-[80%] m-auto'>
          <Navbar setShowLoginForm={setShowLoginForm} />
          <div className='h-[80%]'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/placeOrder' element={<PlaceOrder />} />
              <Route path='/verify' element={<Verify />} />
              <Route path='/myorders' element={<MyOrders />} />
            </Routes>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  )
}

export default App
