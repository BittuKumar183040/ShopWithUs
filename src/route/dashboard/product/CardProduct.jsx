import { BiCartAdd, BiRupee } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { cartAdded } from '../../../reduxSlice/cartSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Star from '../../../component/Star';
import { useNavigate } from 'react-router-dom';


const CardProduct = ({item}) => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
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

    const productRoute = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <div className='overflow-hidden relative rounded-xl shadow-md cursor-pointer transition border-2 border-transparent
            hover:shadow-2xl hover:border-gray-400'>
            <LazyLoadImage
                className=' lg:w-64 lg:h-64 object-cover sm:w-56 sm:h-48 h-72 rounded-md w-[calc(100vw-20px)]'
                src={item.image} 
                alt='' 
                effect='blur'
                onClick={()=>productRoute(item.id)} 
            />
            <div className={`cartBtn${item.id} absolute top-4 right-4 transform scale-125 sm:scale-100`}>
                <BiCartAdd onClick={addToCart} className='text-3xl shadow-md transition text-gray-700 bg-slate-100 p-1 rounded-full border-2
                    hover:shadow hover:border-gray-400'/>
            </div>
            <div onClick={()=>productRoute(item.id)} className=' absolute rounded-md bottom-0 z-10 bg-slate-300 bg-opacity-60 filter backdrop-blur-sm sm:w-full w-3/4 p-1 px-2 flex flex-col '>
                <div className=' flex justify-between '>
                    <p className=' line-clamp-1 sm:text-sm text-lg w-full'>{item.product_name}</p>
                    
                    <div className='flex flex-col gap-0.5'>
                        <Star val={item.rating}/>
                    </div>
                </div>
                <div className=' flex justify-end sm:justify-between gap-4 items-center'>
                    <p className=' text-xs text-red-700 transform -rotate-6 whitespace-nowrap'>{item.discount}% off</p>
                    <div className=' flex gap-2 flex-wrap justify-end'>
                        <div className=' relative flex items-center text-sm transform -rotate-6'>
                            <BiRupee />
                            <span className=' text-nowrap'>MRP. {item.price}</span>
                            <div className='absolute h-0.5 w-full bg-black'></div>
                        </div>
                        <div className=' text-lg flex items-center w-fit border bg-slate-200 bg-opacity-70 border-gray-500 rounded-md px-1'>
                            <BiRupee/>
                            <span className=' text-nowrap h-fit sm:text-sm text-lg '>Rs. {discountPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct