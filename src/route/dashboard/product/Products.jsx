import React, { useEffect, useState } from 'react'
import CardProduct from './CardProduct'
import projectsList from '../../../product/products'

const chunkArray = (array, chunkSize) => {
  const result  = [];
  
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

const Products = () => {

  const [products, setProducts] = useState([]);
  const [itemsToShown, setItemsToShown] = useState(20);
  const [countIndex, setCountIndex] = useState(0);

  useEffect(()=>{
    const item = chunkArray(projectsList, itemsToShown)
    setProducts(item)
    window.scrollTo({top:0, behavior:'smooth'})
  },[itemsToShown, countIndex])

  const changeItemsShown = (e) => {
    setCountIndex(0)
    setItemsToShown(parseInt(e.target.value))
  }

  return (
    <>
      <div className=' bg-slate-100 dark:bg-slate-800 flex flex-wrap justify-center pt-4'>
        {products.length
          ?(
            <>
              <div className=' flex flex-col items-center text-lg'>
                <p className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                  Our Latest Products
                </p>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                  Discover your favorites from our exclusive collection.
                </p>
              </div>
              <div className=' flex flex-wrap justify-between  md:justify-center gap-5 p-4 '>
                {products[countIndex].map((item)=> <CardProduct key={item.id} item={item}/>)}
              </div>
            </>
          )
          :
          <div className=' flex items-center justify-center gap-1 w-full flex-col '>
            <p className=''>Shop With Us have no product is to show</p>
            <p className=' text-sm'>Its it will be filled with product in couple of days...</p>
          </div>
        }
      </div>
      <div className='flex items-center justify-center bg-slate-100 dark:bg-slate-800 relative '>
        <div className="flex justify-center bg-slate-100 dark:bg-slate-800 py-2">
          <p onClick={()=>setCountIndex(countIndex-1)} className={` flex cursor-pointer items-center px-4 py-2 mx-1 text-gray-700 bg-white rounded-md
          dark:bg-gray-200 dark:text-gray-600 hover:bg-slate-600 hover:text-white 
          dark:hover:bg-slate-400 dark:hover:text-slate-200
            ${countIndex===0 ? " opacity-55 pointer-events-none dark:text-state-800" : ""}
          `}>
            previous
          </p>
          { 
            products.length !==0 &&
            [...Array(products.length)].map((elementInArray, index) => ( 
              <p key={index} 
                onClick={()=>setCountIndex(index)} 
                className={`items-center hidden px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:flex 
                dark:bg-slate-200 dark:text-slate-800 
                dark:hover:text-slate-200 hover:bg-slate-600 dark:hover:bg-slate-400 hover:text-white 
                  ${index === countIndex ? " opacity-55 bg-slate-200 pointer-events-none dark:text-state-800" : " bg-white text-gray-700 cursor-pointer "}
                `}
              >
                {index+1}
              </p>
            ))          
          }

          <p onClick={()=>setCountIndex(countIndex+1)} className={`flex cursor-pointer items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md 
            dark:bg-slate-200 dark:text-slate-800 hover:bg-slate-600 
            dark:hover:bg-slate-400 hover:text-white dark:hover:text-slate-200
            ${products.length === countIndex+1 ? " opacity-55 pointer-events-none" : ""}
            `}
          >
            Next
          </p>
          <select value={itemsToShown.toString()} onChange={changeItemsShown} className=' p-2.5 ml-20 rounded-md outline-0 cursor-pointer dark:bg-slate-200 dark:text-slate-800'>
            <option value="10">10</option>
            <option value="20" >20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Products