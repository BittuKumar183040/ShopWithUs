import React from 'react'
import CardComponent from './component/CardComponent'
import { useSelector } from 'react-redux'
import { getCartItems } from '../../../reduxSlice/cartSlice'
import { useNavigate } from 'react-router-dom'
import Checkout from './component/Checkout'
import CartTable from './component/CartTable'

const ContinueShopping = () => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate('/dashboard')}>
      <p className=' cursor-pointer p-2 bg-slate-600 inline-block text-white rounded-md shadow-md'>Continue Shopping</p>
    </div>
  )
}

const Cart = () => {
  const cartItem = useSelector(getCartItems)
  return (
    <div className=' p-2'>
      <div className=' py-4'>
        <div className=' flex justify-between mb-2 pointer-events-none'>
          <p className=' font-bold'>Your Cart</p>
          <p className='flex gap-2'>
            Total Item - <span className=' text-center h-7 w-7 bg-slate-400 rounded-full flex items-center text-white justify-center shadow-md font-bold'>{cartItem.length}</span>
          </p>
        </div>
        <hr />
      </div>
        {cartItem.length ?
        <>
          <div className='flex flex-wrap gap-4'>
            <CartTable />
            <Checkout />
          </div>
          <div className=' flex justify-center m-4'>
            <ContinueShopping />
          </div>
        </>
        :
        <div className=' flex flex-col gap-6 mt-20 items-center justify-center '>
          <p>Not Item Added to cart</p>
          <ContinueShopping />
        </div>
        }
    </div>
  )
}

export default Cart