import React from 'react'
import { cartPageData } from './cartPageData'
import { useLocation } from 'react-router-dom'

export default function CartProduct() {
    const imageurl = useLocation().state.image;
    const price = useLocation().state.price;
    const details = useLocation().state.details;
    const details2 = useLocation().state.details2;
    if(imageurl != null){
        const obj = {'image': imageurl, 'price': price, 'details': details, 'details2': details2}
        cartPageData.push(obj);
    }
    
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
