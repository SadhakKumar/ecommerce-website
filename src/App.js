import { Slide } from '@mui/material';
import './App.css';
import Slider from './Components/Slider';
import Casualwear from './pages/Casualwear';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
                <Route exact path='/' element = {<Homepage/>}/>
                <Route exact path='/ProductList' element = {<Casualwear/>}/>
          </Routes>

        </BrowserRouter>

      {/* <Casualwear/> 
      <Homepage/> */}
    </div>
  );
}

export default App;
