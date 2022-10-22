import React from 'react'
import { cartPageData } from './cartPageData'
import { useLocation } from 'react-router-dom'

export default function CartProduct() {
    // if(props.image !== null){
    //     const obj = {image: props.image, price: props.price, details: props.details, details2: props.details2}
    //     cartPageData.push(obj);
    // }
    
    console.log(cartPageData);
    
  return (
        
    <div className='cart-container'>
        {cartPageData.map((items)=>{
            return(
                <>
                    <div className='product-cart-container'>
                    <div>
                        <img className='product-cart-image' src={items.image} alt="product image"/>
                    </div>
                    <div className='product-cart-text'>
                        <h3>{items.details}</h3>
                        <h3>{items.price}</h3>
                        <p>{items.details2}</p>
                    </div>

                    </div>
                </>
            )
        })}

    </div>
    
  )
}
