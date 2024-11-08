import React from 'react'
import { useSelector } from 'react-redux'
import { getCartItems } from '../../../reduxSlice/cartSlice'
import Checkout from './component/Checkout'
import CartTable from './component/CartTable'
import cart_empty from '../../../assets/cart_empty.png'
import ContinueShopping from './component/ContinueShopping'

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
          <div className='flex flex-wrap gap-6 justify-end'>
            <CartTable />
            <Checkout />
          </div>
        </>
        :
        <div className=' flex flex-col gap-6 mt-8 items-center justify-center '>
          <div className=' flex flex-col justify-center items-center gap-1'>
            <img className=' animate-pulse h-60' src={cart_empty} alt=""/>
            <p className=' text-xl'>Your cart is Empty.</p>
            <p className=' text-md opacity-70'>Looks like you haven't made your choice yet.</p>
          </div>
          <ContinueShopping />
        </div>
        }
    </div>
  )
}

export default Cart