import React from 'react'
import { BiUser } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartItems, setCartScreenStatus } from '../../reduxSlice/cartSlice'

const Nav = () => {
    const navigator = useNavigate()
    const dispatch = useDispatch()

    const showCart = () => {
        dispatch(setCartScreenStatus(true))
        navigator("/shopping_cart")
    }
    return (
        <div className=' flex justify-between items-center px-4 bg-slate-200 shadow-md rounded-b-lg'>
            <p className=' font-extrabold tracking-wider select-none opacity-70 cursor-pointer' onClick={()=>navigator("/dashboard")}>ShopWithUs.</p>
            <div className=' flex items-center gap-5'>
                <div onClick={()=>navigator('/')} className=' h-fit text-sm border border-gray-400 cursor-pointer flex gap-4 items-center text-slate-600 bg-slate-300 rounded-md p-1 px-2 shadow-md'>
                    <BiUser />
                    <p>Login</p>
                </div>
                <div onClick={showCart} className=" flex justify-center items-center mr-4 cursor-pointer">
                    <div className="relative py-2">
                        <div className="t-0 absolute left-3">
                            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{useSelector(getCartItems).length}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav