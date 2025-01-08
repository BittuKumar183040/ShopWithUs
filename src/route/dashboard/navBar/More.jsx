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
            <BiLogOut
                className=' p-1 cursor-pointer rounded-md
                    border border-gray-400 dark:border-gray-500
                    dark:bg-slate-800 dark:text-white text-gray-700'
                size={28}
                onClick={logoutUser} />
        </div>
    )
}

export default More