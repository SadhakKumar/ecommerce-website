import React from 'react'
import {HomePageProduct} from './HomePageProduct'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ProductList() {
  return (
    <div className='products'>
        {HomePageProduct.map((items) =>{
            return(
                <>
                    <div className='product-container'>
                        <div className='image-container'>
                            <img src={items.image} alt={items.details} className='product-image' />
                            <div className='icons'>
                                <FavoriteBorderIcon className='fav-icon'/>
                                <AddShoppingCartIcon className='fav-icon'/>
                            </div>
                            
                        </div>
                        
                        <div className='product-info'>
                            <p className='product-name'><strong>{items.details}</strong></p>
                            <div className='product-details2'>
                                <p className='details2-text'>{items.details2}</p>
                            </div>
                            
                            <h3 className='product-price'>Rs.{items.price}</h3>
                        </div>

                        
                    </div>
                </>
            )   
        })}
    </div>
  )
}
