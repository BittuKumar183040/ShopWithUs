import React, { useEffect, useState } from 'react'
import products from '../../product/products'
import CardProduct from '../dashboard/product/CardProduct';

const getRandomProducts = (n, count) => {
    const numbers = [];
    const product = [];
    while (numbers.length < count) {
        const randomNumber = Math.floor(Math.random() * n) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
            product.push(products[randomNumber]);
        }
      }
      return product;
}

const ProductFooter = ({product}) => {
    const [productToShow, setProductToShow] = useState([])

    useEffect(()=>{
        const excludedProducts = products.filter(item => item.id !== product.id)
        const productToShow = getRandomProducts(excludedProducts.length, 5)
        setProductToShow(productToShow)
        window.scrollTo({top:0, behavior:'smooth'})
    },[product])

    return (
        <div className=' flex gap-4 flex-col mt-20'>
            <div className="flex flex-col justify-start ">
                <h2 className="text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
                    Similar Products Suggestions
                </h2>
            </div>
            <div className=' flex gap-4 flex-wrap justify-center'>
                {productToShow.length !==0 ? 
                    productToShow.map((item)=> <CardProduct key={item.id} item={item}/>)
                    : null
                }
            </div>
        </div>
    )
}

export default ProductFooter