import { googleLogout } from '@react-oauth/google';
import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const More = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        googleLogout()
        navigate('/')
    }

    return (
        <div>
            <BiLogOut onClick={logout} className=' cursor-pointer shadow-md text-2xl bg-slate-300 rounded-md text-gray-700 p-1' />
        </div>
    )
}

export default More