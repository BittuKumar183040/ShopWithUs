import React, { useRef, useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { setQuantity } from '../../../../reduxSlice/cartSlice';

const CardComponent = ({ item }) => {
  const dispatch = useDispatch();
  let quantityValue = useRef(1);

  const handleQuantity = (operation) =>{
    const product = {...item};
    switch(operation){
      case '+':
        quantityValue.current += 1;
        product.quantity = quantityValue.current;
        dispatch(setQuantity(product))
      break;
      case '-':
        quantityValue.current -= 1;
        product.quantity = quantityValue.current;
        dispatch(setQuantity(product))
      break;
    }
  }
  return (
    <>
      <div className=' p-2'></div>
      <tr className=''>
        <td className=' pl-3'>
          <img className=' h-24 w-24 object-cover rounded-md ' src={item.image} alt="" />
          <p className=' max-w-32 line-clamp-1 ' title={item.product_name}>{item.product_name}</p>
        </td>
        <td className=' text-center'>
          <p className=' text-md text-left transform -rotate-6 text-green-500 font-bold'>{item.discount}% off <span className=' line-through text-red-500 '>{item.price}</span></p>
          <p className=' text-lg'>Rs. {item.discountPrice}</p>
        </td>
        <td className=' text-center'>
          <div className=' flex items-center justify-center h-full select-none'>
            <BiLeftArrow onClick={()=>handleQuantity("-")} className=' border text-3xl p-2 cursor-pointer rounded-sm shadow-md ' />
            <span className=' min-w-10 w-fit text-center bg-slate-200 shadow-md'>{item.quantity}</span>
            <BiRightArrow onClick={()=>handleQuantity("+")} className=' border text-3xl p-2 cursor-pointer rounded-sm shadow-md' />
          </div>
        </td>
        <td className=' text-right font-bold tracking-wider pr-3'>Rs. {item.quantity * item.discountPrice}</td>
      </tr>
      <div className=' p-2'></div>
    </>
  )
}

export default CardComponent;