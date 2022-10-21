import React from 'react'
import Categories from '../Components/Categories'
import Navebar from '../Components/Navebar'
import ProductList from '../Components/ProductList'
import Slider from '../Components/Slider'
import {HomePageProduct} from '../Components/HomePageProduct'
import {SliderData} from '../Components/sliderData'


export default function Homepage() {
  return (
    <div>
      <Navebar/>
      <Slider slider = {SliderData}/>
      <Categories/>
      <ProductList page1 = {HomePageProduct}/>
    </div>
  )
}
