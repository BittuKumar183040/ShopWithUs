import React from 'react'
import { getCartItems } from '../../../../reduxSlice/cartSlice'
import { useSelector } from 'react-redux'
import CardComponent from './CardComponent'

const CartTable = () => {
  const cartItem = useSelector(getCartItems)
  return (
    <table className="table-auto w-full md:w-4/6">
        <thead>
        <tr className=' opacity-80 border-b-2 '>
            <th className=' text-left'>PRODUCT</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th className=' text-right'>TOTAL</th>
        </tr>
        </thead>
        <tbody>
        {
            cartItem.map((item) => <CardComponent key={item.id} item={item}/>)
        }
        </tbody>
    </table>
  )
}

export default CartTable