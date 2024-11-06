import React from 'react'
import { BiCartAdd, BiRupee, BiSolidStar, BiStar } from 'react-icons/bi'
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { cartAdded } from '../../../reduxSlice/cartSlice';
import { useNavigate } from 'react-router-dom';

const Star = ({val}) => {
    return (
        <div className=' flex text-gray-400 text-sm'>
            {Array.from({ length: val }).map((_,) => <BiSolidStar key={nanoid()} className=' text-yellow-300'/>)}
            {Array.from({ length: 5-val }).map((_,) => <BiStar key={nanoid()}/>)}
        </div>
    )
}

const CardProduct = ({item}) => {
    const dispatch = useDispatch();
    
    const addToCart = () =>{
        dispatch(cartAdded(item))
    }

    return (
        <div className=' overflow-hidden relative rounded-xl shadow-md cursor-pointer transition border-2 border-transparent
            hover:shadow hover:border-gray-400 '>
            <img className=' w-64 h-64 object-cover' src={item.image} alt='' />
            <BiCartAdd onClick={addToCart} className=' absolute top-2 right-2 text-3xl shadow-md transition text-gray-700 bg-slate-100 p-1 rounded-full border-2
                hover:shadow hover:border-gray-400'/>
            <div className=' absolute bottom-0 z-10 bg-slate-300 bg-opacity-60 filter backdrop-blur-sm w-full p-1 px-2 flex justify-between items-center'>
                <div className='flex flex-col gap-0.5'>
                    <p className=' line-clamp-1 text-sm'>{item.product_name}</p>
                    <Star val={item.rating}/>
                </div>
                <p className=' text-lg flex items-center border bg-slate-200 bg-opacity-70 border-gray-500 rounded-md px-1'>
                    <BiRupee/> 
                    <span className=' text-sm'>{item.price}</span>
                </p>
            </div>
        </div>
    )
}

export default CardProduct