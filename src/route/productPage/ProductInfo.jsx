import React, { useEffect, useState } from 'react'
import products from '../../product/products'
import Star from '../../component/Star';
import { BiRupee } from 'react-icons/bi';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartAdded } from '../../reduxSlice/cartSlice';
import toast, { Toaster } from 'react-hot-toast';
import ProductFooter from './ProductFooter';
import Footer from '../dashboard/footer/Footer';

const ProductInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    let { id } = useParams();
    const [product, setProduct] = useState(0)
    const discountedPrice = Math.floor(product.price - (product.price * product.discount / 100))

    useEffect(()=>{
        setProduct(products.find(item => item.id === id))
    }, [id])
    
    const addToCart = () => {
        let itemWithDiscount = {...product, discountPrice:discountedPrice}
        dispatch(cartAdded(itemWithDiscount))
    }
    
    const getBack = () =>{
        let indexOfProduct = products.findIndex(item => item.id === id);
        const prevItem = indexOfProduct > 0 ? products[indexOfProduct - 1] : null;
        try{
            navigate(`/product/${prevItem.id}`)
        }catch{
            toast.error("You're already at the beginning of our product list.")
        }
    }
    const getForward = () =>{
        let indexOfProduct = products.findIndex(item => item.id === id);
        const prevItem = indexOfProduct < products.length ? products[indexOfProduct + 1] : null;
        try{
            navigate(`/product/${prevItem.id}`)
        }catch{
            toast.error("You're at the end of the product list.")
        }
    }

    return (
    <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
            <Link to="/dashboard" className=' opacity-80 p-2 my-2 cursor-pointer shadow-md pr-4 flex items-center gap-4 bg-slate-100 w-fit rounded-full text-lg '>
                <IoMdArrowRoundBack /> 
                <p className=' text-sm'>Back</p>
            </Link>
            <Toaster position='bottom-right'/>
            <div className="lg:-mx-6 lg:flex lg:items-center">
                <img 
                    className=" select-none object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 shadow-2xl rounded-lg lg:h-[36rem]" 
                    src={product.image} 
                    alt=""/>

                <div className=" flex flex-col gap-3 mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                    <h1 className="text-2xl w-full overflow-hidden font-semibold text-gray-800 dark:text-white lg:text-3xl">
                        <div dangerouslySetInnerHTML={{ __html: product.product_name}} />
                    </h1>
                    <div className="w-full mt-6 text-justify text-gray-500 dark:text-gray-400 ">
                        <div dangerouslySetInnerHTML={{ __html: product.product_desc}} />
                    </div>
                    {/* <h3 className="mt-6 text-lg font-medium text-blue-500">{product.product_group}</h3> */}
                    <div className="text-gray-600 dark:text-gray-300  flex justify-end ">
                        <Star style={{fontSize:"30px"}} val={product.rating}/>
                    </div>
                    <div className=' flex justify-end gap-10 items-center '>
                        <div className=' flex flex-col items-center transform -rotate-6 -translate-y-4'>
                            <p className=' text-md text-red-700 transform'>{product.discount}% off</p>
                            <div className=' flex items-center relative'>
                                <BiRupee />
                                <span className=' text-nowrap text-2xl'>Rs. {product.price}</span>
                                <div className='absolute top-1/2 h-0.5 w-full bg-black'></div>
                            </div>
                        </div>
                        <div className=' text-4xl flex items-center w-fit bg-opacity-70 rounded-md px-1'>
                            <BiRupee/>
                            <span className=' text-nowrap h-fit'>Rs. {discountedPrice}</span>
                        </div>
                    </div>
                    <div className=' flex justify-end mt-6'>
                    </div>

                    <div className="flex items-center justify-between mt-12 gap-10 ">
                        <div className=' flex justify-between gap-20'>
                            <button onClick={getBack} title="left arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button onClick={getForward} title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>   
                        
                        <button onClick={addToCart} className="flex gap-4 w-fit items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            <FaCartArrowDown />
                            <span className="mx-1">Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
            {
                product !== 0 ? <ProductFooter product={product}/> : null 
            }
            <div className=' mt-10 bg-slate-200 rounded-lg'>
                <Footer/>
            </div>
        </div> 
    </section>
    )
}

export default ProductInfo