import React from 'react'
import Navebar from '../Components/Navebar'
import CartProduct from '../Components/CartProduct'
import { useLocation } from 'react-router-dom'

export default function Cart() {
    // const imageurl = useLocation().state.image;
    // const price = useLocation().state.price;
    // const details = useLocation().state.details;
    // const details2 = useLocation().state.details2;
  return (

    <div>
        <Navebar/>
        {/* <CartProduct image = {imageurl} price = {price} details = {details} details2 = {details2}/> */}
        <CartProduct/>
    </div>
    
  )
}
