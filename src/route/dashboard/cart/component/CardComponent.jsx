import React from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { cartAdded, cartDecreased} from '../../../../reduxSlice/cartSlice';

const CardComponent = ({ item }) => {
  const dispatch = useDispatch();
  const handleQuantity = (operation) =>{
    switch(operation){
      case '+':
        dispatch(cartAdded(item));
      break;
      case '-':
        dispatch(cartDecreased(item))
      break;
    }
  }
  return (
    <tr className=''>
      <td className=' pl-3 h-36 relative'>
        <img className=' h-24 w-24 object-cover rounded-md ' src={item.image} alt="" />
        <p className=' line-clamp-1 max-w-52 ' title={item.product_name}>{item.product_name}</p>
      </td>
      <td className=' text-center'>
        <p className=' text-md text-left transform -rotate-6 text-green-500 font-bold'>{item.discount}% off</p> 
        <p><span className=' line-through text-red-500 whitespace-nowrap '>MRP. {item.price}</span></p>
        {/* <p className=' text-lg'>Rs. {item.discountPrice}</p> */}
      </td>
      <td className=' text-center'>
        <div className=' flex items-center justify-center h-full select-none'>
          <BiLeftArrow onClick={()=>handleQuantity("-")} className=' border text-3xl p-2 cursor-pointer rounded-sm shadow-md ' />
          <span className=' min-w-10 w-fit text-center bg-slate-200 shadow-md dark:bg-slate-800'>{item.quantity}</span>
          <BiRightArrow onClick={()=>handleQuantity("+")} className=' border text-3xl p-2 cursor-pointer rounded-sm shadow-md' />
        </div>
      </td>
      <td className=' text-right font-bold tracking-wider pr-3 whitespace-nowrap '>Rs. {item.quantity * item.discountPrice}</td>
    </tr>
  )
}

export default CardComponent;