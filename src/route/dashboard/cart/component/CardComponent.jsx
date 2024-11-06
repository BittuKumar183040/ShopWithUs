import React, { useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const CardComponent = ({ item }) => {
  console.log(item)
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (operation) =>{
    switch(operation){
      case '+':
        setQuantity(quantity+1)
      break;
      case '-':
        if(quantity > 0){
          setQuantity(quantity-1)
        }
      break;
    }
  }
  return (
    <>
      <div className=' p-2'></div>
      <tr>
        <td >
          <img className=' h-20 w-24 object-cover rounded-md ' src={item.image} alt="" />
          <p>{item.product_name}</p>
        </td>
        <td className=' text-center'>{item.price}</td>
        <td className=' text-center'>
          <div className=' flex items-center justify-center h-full select-none'>
            <BiLeftArrow onClick={()=>handleQuantity("-")} className=' border text-3xl p-2 cursor-pointer' />
            <span className=' min-w-10 w-fit text-center bg-slate-200'>{quantity}</span>
            <BiRightArrow onClick={()=>handleQuantity("+")} className=' border text-3xl p-2 cursor-pointer' />
          </div>
        </td>
        <td className=' text-right'>{quantity * item.price}</td>
      </tr>
      <div className=' p-2'></div>
    </>
  )
}

export default CardComponent;