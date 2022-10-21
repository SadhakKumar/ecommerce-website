import React from 'react'
import Navebar from '../Components/Navebar'
import ProductDetails from '../Components/ProductDetails'
import { useLocation } from 'react-router-dom'

export default function Product() {
    // const {type} = useParams();
    const imageurl = useLocation().state.prodImage;
    const price = useLocation().state.prodPrice;
    const details = useLocation().state.prodDetails;
    const details2 = useLocation().state.prodDetails2;
    console.log(imageurl);
  return (
    <div>
        <Navebar/>
        <ProductDetails image = {imageurl} price = {price} details = {details} details2 = {details2}/>
    </div>
  )
}
