import React from 'react'
import { useSelector } from 'react-redux'
import { getCartItems, getTotalCartPrice, getTotalCartQuantity } from '../../../../reduxSlice/cartSlice'

const Checkout = () => {
    const cartQuantity = useSelector(getTotalCartQuantity);
    const cartValue = useSelector(getTotalCartPrice)
  return (
    <>
        <div className='flex-grow '>
            <div className=' bg-slate-100 p-2 rounded-lg flex flex-col '>
                <p className=' text-2xl font-bold'>Checkout</p>
                <hr className=' py-1'/>
                <div className=' bg-slate-200 p-2 rounded-md shadow-md flex flex-col gap-2'>
                    <div className=' flex text-md font-semibold justify-between items-center'>
                        <p>Price</p>
                        <p className=' bg-gray-100 shadow-xl px-2 rounded-md  text-2xl font-bold text-slate-700'>Rs. {cartValue}</p>
                    </div>
                    <div className=' flex justify-between items-center font-semibold '>
                        <p>Quantity</p>
                        <p className=' text-xl'>{cartQuantity}</p>
                    </div>
                </div>
            </div>
            <div className= ' flex justify-center py-4 '>
                <p className=' p-2 px-4 rounded-md bg-slate-600 text-white shadow-md'>Place Order</p> 
            </div>
        </div>
    </>
  )
}

export default Checkout