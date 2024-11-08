import React from 'react'
import { useSelector } from 'react-redux'
import { getTotalCartPrice, getTotalCartQuantity } from '../../../../reduxSlice/cartSlice'
import ContinueShopping from './ContinueShopping';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const cartQuantity = useSelector(getTotalCartQuantity);
    const cartValue = useSelector(getTotalCartPrice);
    const navigate = useNavigate();
  return (
    <div className=' flex flex-col w-full md:w-fit'>
        <div className='  p-2 rounded-t-lg flex flex-col border'>
            <p className=' text-xl font-bold'>Checkout</p>
            <hr className=' py-1 mt-1'/>
            <div className='  p-2 px-4 rounded-md shadow-md flex flex-col gap-2'>
                <div className=' flex text-md font-semibold justify-between items-center'>
                    <p className=' uppercase'>Subtotal</p>
                    <p className=' rounded-md  text-2xl font-bold text-slate-700'>Rs. {cartValue}</p>
                </div>
                <div className=' flex justify-between items-center font-semibold '>
                    <p className=' uppercase'>Shiyping</p>
                    <p className=' text-xl text-green-700'>Free</p>
                </div>
                <div className=' flex justify-between items-center font-semibold '>
                    <p className=' uppercase'>Payment Method</p>
                    <p className=' text-xl'>COD</p>
                </div>
                <div className=' flex justify-between items-center font-semibold '>
                    <p className=' uppercase'>Item in the box </p>
                    <p className=' text-xl'>{cartQuantity}</p>
                </div>
            </div>
        </div>
        <div className= ' flex justify-end items-center p-4 gap-5 border rounded-b-lg '>
            <ContinueShopping />
            <p className=' p-2 px-8 rounded-md tracking-wider font-bold text-black shadow-lg border-2 border-gray-800 cursor-pointer
                transition hover:text-white hover:bg-gray-800 '>
                Check Out
            </p> 
        </div>
    </div>
  )
}

export default Checkout