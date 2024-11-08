import React, { createElement } from 'react'
import { BiCartAdd, BiRupee, BiSolidStar, BiStar } from 'react-icons/bi'
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { cartAdded } from '../../../reduxSlice/cartSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
    const discountPrice = Math.floor(item.price - (item.price * item.discount / 100)) 
    const addToCart = () =>{
        const cartBtnContainer = document.querySelector(`.cartBtn${item.id}`);
        const p = document.createElement('p')
        p.textContent = "+1"
        p.classList.add("animate-ping", "absolute", "-left-7", "top-1")
        
        cartBtnContainer.appendChild(p)

        const showAdded = setTimeout(()=>{
            p.remove()
            clearTimeout(showAdded)
        }, 500) 
        let itemWithDiscount = {...item, discountPrice:discountPrice}
        dispatch(cartAdded(itemWithDiscount))
    }

    return (
        <div className=' overflow-hidden relative rounded-xl shadow-md cursor-pointer transition border-2 border-transparent
            hover:shadow hover:border-gray-400 '>
            <LazyLoadImage
                className=' w-64 h-64 object-cover' 
                src={item.image} 
                alt='' 
                effect='blur'
            />
            <div className={`cartBtn${item.id} absolute top-2 right-2 `}>
                <BiCartAdd onClick={addToCart} className='text-3xl shadow-md transition text-gray-700 bg-slate-100 p-1 rounded-full border-2
                    hover:shadow hover:border-gray-400'/>
            </div>
            <div className=' absolute bottom-0 z-10 bg-slate-300 bg-opacity-60 filter backdrop-blur-sm w-full p-1 px-2 flex justify-between items-center'>
                <div className='flex flex-col gap-0.5'>
                    <p className=' line-clamp-1 text-sm'>{item.product_name}</p>
                    <Star val={item.rating}/>
                </div>
                <div className=''>
                    <p className=' text-xs text-red-700 transform -rotate-6'>{item.discount}% off</p>
                    <div className=' flex gap-2'>
                        <div className=' relative flex items-center text-sm transform -rotate-6'>
                            <BiRupee />
                            <span className=' text-nowrap'>Rs. {item.price}</span>
                            <div className='absolute h-0.5 w-full bg-black'></div>
                        </div>
                        <div className=' text-lg flex items-center w-fit border bg-slate-200 bg-opacity-70 border-gray-500 rounded-md px-1'>
                            <BiRupee/>
                            <span className=' text-sm text-nowrap h-fit'>Rs. {discountPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct