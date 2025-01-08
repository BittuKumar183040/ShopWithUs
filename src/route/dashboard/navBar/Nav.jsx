import React, { useEffect, useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { getCartItems, setCartScreenStatus } from '../../../reduxSlice/cartSlice'
import axios from 'axios'
import More from './More'
import { IoMoon } from 'react-icons/io5';
import { IoIosSunny } from "react-icons/io";
import { useAuth } from '../../auth/AuthContext'


const Nav = () => {
    const { logout, login } = useAuth();
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const [dark, setDark] = useState(false);
    const [userInfo, setUserInfo] = useState(0);
    const showCart = () => {
        dispatch(setCartScreenStatus(true))
        navigator("/shopping_cart")
    }

    useEffect(() => {
        const access_token = localStorage.getItem("authToken");

        if (access_token !== "guest") {
            axios.get(
                `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
                {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                        Accept: "application/json",
                    },
                }
            )
                .then((res) => {
                    setUserInfo(res.data)
                    console.log(res.data)
                    login();
                })
                .catch((err) => {
                    localStorage.clear();
                    logout();
                    navigator('/');
                    console.error(err)
                });
        } else {
            const dummyData = {
                "id": "110752211787108321034",
                "email": "guest@gmail.com",
                "name": "Guest",
                "given_name": "Guest",
                "picture": "https://lh3.googleusercontent.com/a/ACg8ocJ9V9ySIQ57Jz42tqtLcC_e6STNEMffxMxyybfFTxxz2G8UOfRJ2Q=s96-c"
            };
            setUserInfo(dummyData);
            login();
        }
    }, []);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
        dark ? document.body.style.backgroundColor = "white" : document.body.style.backgroundColor = "rgb(15, 23, 42)"
    }
    return (
        <div className=' flex justify-between items-center px-4 bg-slate-200 dark:bg-slate-800 dark:text-gray-200 shadow-md'>
            <p className=' font-extrabold tracking-wider select-none opacity-70 cursor-pointer' onClick={() => navigator("/dashboard")}>ShopWithUs.</p>
            <div className=' flex items-center gap-5'>
                <div className="flex gap-2 items-center">
                    {userInfo ?
                        <>
                            <More />
                            <div className=' h-fit text-sm flex gap-4 items-center rounded-md p-1 px-2
                                border border-gray-400 dark:border-gray-500
                                dark:bg-slate-800 dark:text-white '>
                                <img className='h-5 w-5 rounded-full' src={userInfo.picture} alt="" />
                                <p>{userInfo.given_name}</p>
                            </div>
                        </>
                        : <Link to="/" className=' cursor-pointer shadow-md text-sm px-4 bg-slate-300 rounded-md text-gray-700 p-1'>
                            Login
                        </Link>
                    }
                    <div onClick={() => darkModeHandler()}
                        className=" shadow-md border border-transparent p-1.5 px-4 rounded-full cursor-pointer flex items-center  
                            dark:border-gray-500 bg-white dark:text-white
                            dark:bg-gray-800"
                    >
                        <div>
                            {
                                dark ? <IoIosSunny size={15} /> : <IoMoon size={15} />
                            }
                        </div>
                    </div>
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