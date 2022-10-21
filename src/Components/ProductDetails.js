import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductDetails(props) {
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
            <Link to ='/Cart' state={{image: props.image,price:props.price,details:props.details,details2:props.details2}}><button type="button" class="btn btn-dark">ADD TO CART</button></Link>
            <button type="button" class="btn btn-dark mx-3">ADD TO WISHLIST</button>
          </div>
        </div>
          
        
      </div>  
    </>
     
  )
}
