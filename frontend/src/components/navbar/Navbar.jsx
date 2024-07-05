import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './Navbar.css'


const Navbar = (props) => {
    const [activeLink, setActiveLink] = useState('Home');
    const [menuOpen, setMenuOpen] = useState(false);
    const { setShowLoginForm } = props;
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }


    return (
        <>
            <div className='h-[10vh] flex justify-between items-center'>
                <div className='flex items-center space-x-4 sm:hidden'>
                    <i className="fa-solid fa-bars text-base text-orange-400 hover:text-orange-600 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}></i>
                </div>
                <div className="logo">
                    <Link to='/'><img src={assets.logo} alt="" className='cursor-pointer w-32 sm:w-32 md:w-40 lg:w-48 xl:w-60 ' onClick={() => setActiveLink("Home")} /></Link>
                </div>
                <div className='hidden sm:block'>
                    <div className='flex items-center space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-5 text-[#49557e] font-semibold cursor-pointer text-[10px] md:text-[14px] lg:text-lg xl:text-xl'>
                        <Link to='/' className={`${activeLink === 'Home' ? 'border-b-2 border-orange-500' : ""} p-1`} onClick={() => setActiveLink('Home')}>Home</Link>
                        <a href='#menu' className={`${activeLink === 'Menu' ? 'border-b-2 border-orange-500' : ""} p-1 `} onClick={() => setActiveLink('Menu')}>Menu</a>
                        <a href='#appDownload' className={activeLink === 'mobile' ? 'border-b-2 border-orange-500' : ""} onClick={() => setActiveLink('mobile')}>Mobile<span className='text-white'>_</span>App</a>
                        <a href='#footer' className={activeLink === 'contact' ? 'border-b-2 border-orange-500' : ""} onClick={() => setActiveLink('contact')}>Contact<span className='text-white'>_</span>Us</a>
                    </div>
                </div>
                <div className='right flex items-center space-x-5 '>
                    <i className="fa-solid fa-magnifying-glass text-orange-500 cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl hover:text-orange-600"></i>
                    <div className={`flex items-center ${activeLink === "cart" ? "border-b-2 border-orange-500" : ""}`}>
                        <Link to='/cart'><i className={`fa-solid fa-cart-shopping text-orange-500 cursor-pointer text-sm sm:text-base md:text-base lg:text-lg xl:text-xl hover:text-orange-600 `} onClick={() => setActiveLink("cart")}></i></Link>
                        <sup className={`text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] text-orange-500 ${getTotalCartAmount() === 0 ? "hidden" : "block"}`}><i className='fa-solid fa-circle-dot'></i></sup>
                    </div>
                    {!token
                        ? <button type="button" className="min-w-20 text-orange-400 hover:text-white border border-orange-400 hover:bg-orange-500 font-medium rounded-lg text-[10px] md:text-[14px] lg:text-lg xl:text-xl px-5 py-2 text-center" onClick={() => setShowLoginForm(true)}>Sign In</button>
                        : <div className='relative profile cursor-pointer'>
                            <i className="fa-regular fa-user  text-orange-500 cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl hover:text-orange-600"></i>
                            <ul className='dropdown absolute hidden right-0 z-[1] space-y-5 bg-slate-400 px-3 py-5 border border-solid border-orange-500 rounded-lg' >
                                <li className='flex items-center justify-center' onClick={() => { navigate("/myorders") }}><i className="fa-solid fa-bag-shopping text-2xl mr-10 text-orange-400 hover:text-orange-600"></i><p>Orders</p></li>
                                <hr />
                                <li className='flex items-center justify-center' onClick={logout}><i className="fa-solid fa-right-from-bracket text-2xl mr-10 text-orange-400 hover:text-orange-600" ></i><p>Logout</p></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
            <div className={`${menuOpen?"block":"hidden"} sm:hidden flex flex-col bg-slate-200 rounded-md`}>
                <Link to='/' className={`${activeLink === 'Home' ? 'px-4 py-1 text-slate-500 bg-white' : "px-2 py-0.5"} p-1`} onClick={() => setActiveLink('Home')}>Home</Link><hr />
                <a href='#menu' className={`${activeLink === 'Menu' ? 'px-4 py-1 text-slate-500 bg-white' : "px-2 py-0.5"} p-1 `} onClick={() => setActiveLink('Menu')}>Menu</a><hr />
                <a href='#appDownload' className={activeLink === 'mobile' ? 'px-4 py-1 text-slate-500 bg-white' : "px-2 py-0.5"} onClick={() => setActiveLink('mobile')}>Mobile<span className='text-white'>_</span>App</a><hr />
                <a href='#footer' className={activeLink === 'contact' ? 'px-4 py-1 text-slate-500 bg-white' : "px-2 py-0.5"} onClick={() => setActiveLink('contact')}>Contact<span className='text-white'>_</span>Us</a><hr />
            </div>
        </>
    )
}

export default Navbar
