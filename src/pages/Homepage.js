import React from 'react'
import Categories from '../Components/Categories'
import Navebar from '../Components/Navebar'
import ProductList from '../Components/ProductList'
import Slider from '../Components/Slider'
import {SliderData} from '../Components/sliderData'


export default function Homepage() {
  return (
    <div>
      <Navebar/>
      <Slider slider = {SliderData}/>
      <Categories/>
      <ProductList/>
    </div>
  )
}
