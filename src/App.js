import { Slide } from '@mui/material';
import './App.css';
import Slider from './Components/Slider';
import {HomePageProduct} from './Components/HomePageProduct'
import {formalsPageData} from './Components/formalsPageData'
import {athleticPageData} from './Components/athleticPageData'
import {shoesPageData} from './Components/shoesPageData'
import Casualwear from './pages/Casualwear';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './pages/Product';
import Cart from './pages/Cart';


function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
                <Route exact path='/' element = {<Homepage/>}/>
                <Route exact path='CasualClothings' element = {<Casualwear page={HomePageProduct}/>}/>
                <Route exact path='FormalClothing' element = {<Casualwear page = {formalsPageData}/>}/>
                <Route exact path='AthleticClothing' element = {<Casualwear page = {athleticPageData}/>}/>
                <Route exact path='Shoes' element = {<Casualwear page = {shoesPageData}/>}/>
                <Route exact path='Classicwear' element = {<Casualwear page = {HomePageProduct}/>}/>
                <Route path = '/product' element ={<Product/>}/>
                  
                <Route path = '/CasualClothings/product' element ={<Product/>}/>
                <Route path = '/FormalClothing/product' element ={<Product/>}/>
                <Route path = '/AthleticClothing/product' element ={<Product/>}/>
                <Route path = '/Shoes/product' element ={<Product/>}/>
                <Route path = '/Classicwear/product' element ={<Product/>}/>  
                <Route path='/Cart' element = {<Cart/>}/>
                
          </Routes>

        </BrowserRouter>

    </div>
  );
}

export default App;
