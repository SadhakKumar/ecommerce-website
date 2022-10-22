import React from 'react'
import { Link } from 'react-router-dom'
import { cartPageData } from './cartPageData';

export default function ProductDetails(props) {


  const AddToCartArray = (image,price,details,details2) =>{
    const obj = {'image': image, 'price': price, 'details': details, 'details2': details2}
    cartPageData.push(obj);
  }
  return (
    <>

      <div className='productDetails'>
        <div className='productDetailsImage'>
          <img className='productImage' src={props.image} alt="image" />
        </div>
        <div className='productDetailsText'>
          <div>
            <h1>{props.details}</h1>
            <p>{props.details2}</p>
          </div>
          <div>
            <h2>₹{props.price}</h2>
          </div>
          <div>
            <button onClick={()=>AddToCartArray(props.image,props.price,props.details,props.details2)} type="button" class="btn btn-dark">ADD TO CART</button>
            <button type="button" class="btn btn-dark mx-3">ADD TO WISHLIST</button>
          </div>
        </div>
          
        
      </div>  
    </>
     
  )
}
