import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'

export default function Navebar() {
  return (
    <div>
        <div className='Navbar'>
            
            <div className='Heading'>
                <Link className="navbar-brand" to="/">Navbar</Link>
            </div>

            <div className='searchinput'>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                
            </div>
            
            <div className='Right'>
                <div className='AccountIcon'>
                    <AccountCircleIcon/>
                </div>
                <div className='CartIcon'>
                    <Link to="/Cart" state={{image: null,price:null,details:null,details2:null}} style={{ color: '#FFF' }}><ShoppingCartIcon/></Link>
                    
                </div>
                
            </div>
            
        </div>
    </div>
  )
}
