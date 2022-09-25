import React, {useState} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {SliderData} from './sliderData';
import { Link } from 'react-router-dom'

export default function Slider(props) {

const [current,setCurrent] = useState(0);
const length = props.slider.length;

const nextImage = () =>{
    setCurrent(current === length-1 ? 0 : current + 1);
}
const prevImage = () =>{
    setCurrent(current === 0 ? length -1 : current -1);
}

  return (
    <div className='slider-container'>

        <div className='left-arrow' onClick={prevImage}>
            <ArrowBackIosIcon/>
        </div>

        <div className='right-arrow' onClick={nextImage}>
            <ArrowForwardIosIcon/>
        </div>
        
        {SliderData.map((slide,index) =>{
            return(
                <>
                
                    {/* <div className={index === current ? 'slide active' : 'slide'} key = {index}> */}
                        {index === current && <img src={slide.image} alt='image' className='slide-image'/>}
                    {/* </div> */}
                    <div className={index === current ? 'slider-Description' : 'slide'}>
                    
                        {index === current && <strong className='slider-description-heading'>{slide.title}</strong>}
                        {index === current && <p className='slider-description-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quo optio quae excepturi, enim totam facere eaque aliquid.</p>}
                        {index === current && <Link to='/ProductList'>
                            <button type="button" className="btn btn-secondary">Shop Now</button>
                        </Link>}

                    </div>

                
                </>
            ) 
        })}
        
        
        
        
        
    </div>
  )
}
