import React from 'react'
import Navebar from '../Components/Navebar'
import Slider from '../Components/Slider'
import {SliderData} from '../Components/sliderData'

export default function Homepage() {
  return (
    <div>
      <Navebar/>
      <Slider slider = {SliderData}/>
    </div>
  )
}
