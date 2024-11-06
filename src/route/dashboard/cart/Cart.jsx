import React from 'react'
import CardComponent from './component/CardComponent'
import { useSelector } from 'react-redux'
import { getCartItems } from '../../../reduxSlice/cartSlice'
import { useNavigate } from 'react-router-dom'

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
        <div className=' flex justify-between mb-2'>
          <p className=' font-bold'>Your Cart</p>
          <p className='flex gap-2'>
            Total Item - <span className=' text-center h-7 w-7 bg-slate-300 rounded-full flex items-center text-white justify-center shadow-md font-bold'>{cartItem.length}</span>
          </p>
        </div>
        <hr />
      </div>
        {cartItem.length ?
        <>
          <table className="table-auto w-full md:w-2/3">
            <thead>
              <tr className=' opacity-80'>
                <th className=' text-left'>PRODUCT</th>
                <th>PRICE</th>
                <th>QTY</th>
                <th className=' text-right'>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {
                cartItem.map((item, idx) => <CardComponent key={item.id} item={item}/>)
              }
            </tbody>
          </table>
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