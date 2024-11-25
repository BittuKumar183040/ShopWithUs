import React from 'react'

const Search = () => {
  return (
    <div className=' flex bg-slate-300  justify-between p-2 items-center'>
        <div className=' flex gap-2 items-center bg-gray-100 p-1 rounded-md'>
          <div className=' flex gap-2'>
            <input placeholder='Search...' className=' text-sm py-1 rounded-md px-2 border outline-none transition focus:border-gray-400'
             type='text' />
            <input className='cursor-pointer border rounded-md py-1 px-4 bg-slate-100 text-sm
             transition hover:border-gray-400 hover:text-gray-600 hover:bg-slate-200' 
                type='submit' value={"Search"}/>
          </div>
          <div className=' flex gap-2'>
            <p>Filter </p>
            <div className=' flex gap-2 items-center text-sm bg-slate-200 px-2 rounded-md'>
              <p>Rs. 0</p>
              <input type='range' min={0} max={20000} defaultValue={20000}/>
              <p>Rs. 20000</p>
            </div>
            <input type="color" name="" id="" />
          </div>
          <div>
            
          </div>
        </div>
    </div>
  )
}

export default Search