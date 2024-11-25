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
  const [itemsToShown, setItemsToShown] = useState(10);
  const [countIndex, setCountIndex] = useState(0);

  useEffect(()=>{
    const item = chunkArray(projectsList, itemsToShown)
    setProducts(item)
  },[itemsToShown, countIndex])

  const changeItemsShown = (e) => {
    setCountIndex(0)
    setItemsToShown(parseInt(e.target.value))
  }

  return (
    <>
      <div className=' bg-slate-100 flex flex-wrap justify-center gap-5 p-4 '>
        {products.length
          ?
          products[countIndex].map((item)=> <CardProduct key={item.id} item={item}/>)
          :
          <div className=' flex items-center justify-center gap-1 w-full flex-col '>
            <p className=''>Shop With Us have no product is to show</p>
            <p className=' text-sm'>Its it will be filled with product in couple of days...</p>
          </div>
        }
      </div>
      <div className='flex items-center justify-center bg-slate-100 relative '>
        <div className="flex justify-center bg-slate-100 py-2">
          <p onClick={()=>setCountIndex(countIndex-1)} className={`flex cursor-pointer items-center px-4 py-2 mx-1 text-gray-700 bg-white rounded-md
          dark:bg-gray-800 dark:text-gray-600 hover:bg-slate-600 hover:text-white
            ${countIndex===0 ? " opacity-55 pointer-events-none" : ""}
          `}>
            previous
          </p>
          { 
            products.length !==0 &&
            [...Array(products.length)].map((elementInArray, index) => ( 
              <p key={index} 
                onClick={()=>setCountIndex(index)} 
                className={`items-center hidden px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:flex 
                dark:bg-gray-800 dark:text-gray-200 
                dark:hover:text-gray-200 hover:bg-slate-600 dark:hover:bg-blue-500 hover:text-white 
                  ${index === countIndex ? "bg-slate-600 text-white pointer-events-none " : " bg-white text-gray-700 cursor-pointer "}
                `}
              >
                {index+1}
              </p>
            ))          
          }

          <p onClick={()=>setCountIndex(countIndex+1)} className={`flex cursor-pointer items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md 
            dark:bg-gray-800 dark:text-gray-200 hover:bg-slate-600 
            dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200
            ${products.length === countIndex+1 ? " opacity-55 pointer-events-none" : ""}
            `}
          >
            Next
          </p>
          <select onChange={changeItemsShown} className=' p-2.5 ml-20 rounded-md outline-0 cursor-pointer'>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Products