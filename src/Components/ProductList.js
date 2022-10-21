import React from 'react'
import {HomePageProduct} from './HomePageProduct'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductDetails from './ProductDetails'
import { Link } from 'react-router-dom'
    

export default function ProductList(props) {
    console.log(props.page1);
    const pageName2 = props.page1;
    
  return (
    
    <div className='products'>
        {props.page1.map((items) =>{
            const prodImage = items.image;
            
            return(
                <>

                    <Link to = 'product' style={{ color: '#000000' }} state={{prodImage: items.image,prodPrice: items.price,prodDetails:items.details,prodDetails2:items.details2}}>

                    
                    <div className='product-container'>
                        <div className='image-container'>
                            <img src={items.image} alt={items.details} className='product-image' />
                            <div className='icons'>
                                <FavoriteBorderIcon className='fav-icon'/>
                                <Link to ='/Cart' state={{image: items.image,price:items.price,details:items.details,details2:items.details2}}><AddShoppingCartIcon className='fav-icon'/></Link>
                                
                                
                                
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
                    </Link>
                </>
            )   
        })}
    </div>
  )
}
