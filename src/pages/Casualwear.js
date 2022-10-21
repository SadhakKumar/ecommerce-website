import React from 'react'
import {HomePageProduct} from '../Components/HomePageProduct'
import Navebar from '../Components/Navebar'
import ProductList from '../Components/ProductList'

export default function Casualwear(props) {

  console.log(props.page)
  const pageName = props.page
  return (
    <div>
      <Navebar/>
      <ProductList page1 = {pageName}/>
    </div>
  )
}
