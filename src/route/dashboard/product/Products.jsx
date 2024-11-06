import React from 'react'
import CardProduct from './CardProduct'

const cardItems = [
    {
      id:1,
      product_name:"APC Shoes",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:2999,
      discount:10,
      rating:3,
      image:"https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?s=2048x2048&w=is&k=20&c=q5PbZIu__xKIpwD9RiwCSn4ptSniWsD0GElqkCdsevM="
    },
    {
      id:2,
      product_name:"HRK Round Flex",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:4999,
      discount:20,
      rating:4,
      image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
    },

  ]
const Products = () => {
  return (
    <div className=' bg-slate-100 flex flex-wrap gap-5 px-4 pt-4'>
        {cardItems.map((item)=> <CardProduct key={item.id} item={item}/>)}
    </div>
  )
}

export default Products