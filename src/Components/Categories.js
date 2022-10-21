import React from 'react'
import { CategoriesData } from './CategoriesData'
import Casualwear from '../pages/Casualwear'
import { Link } from 'react-router-dom'
export default function Categories() {
  return (
    <div className='categories-container'>
        {CategoriesData.map((items) => {
            return(
                <>
                    <div className='categories-card'>
                        <img src={items.image} alt="categories-image" className='card-img'/>
                        <div className='info'>
                            <h2 className='card-title'>{items.title}</h2>
                            <Link to={items.url}>
                                <button type="button" className="btn btn-secondary categories-button">Shop Now</button>
                            </Link>
                            
                            
                        </div>
                        
                    </div>
                </>
                
            )
        })}
    </div>
  )
}
