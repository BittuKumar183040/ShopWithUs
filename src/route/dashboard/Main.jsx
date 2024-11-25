import React from 'react'
import HeroPage from './heroPage/HeroPage'
import Products from './product/Products'
import Search from './search/Search'
import Footer from './footer/Footer'

const Main = () => {

  return (
    <div className=' lg:mx-20 xl:mx-40 shadow-2xl mb-2 rounded-md overflow-hidden'>
      <HeroPage />
      {/* <Search /> */}
      <Products />
      <Footer/>
    </div>
  )
}

export default Main