import { googleLogout } from '@react-oauth/google';
import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';

const More = () => {
    const { logout } = useAuth()
    const navigate = useNavigate();
    const logoutUser = () => {
        localStorage.clear();
        googleLogout()
        logout();
        navigate('/')
    }

    return (
        <div>
            <BiLogOut onClick={logoutUser} className=' cursor-pointer shadow-md text-2xl bg-slate-300 rounded-md text-gray-700 p-1' />
        </div>
    )
}

export default More