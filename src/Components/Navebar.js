import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navebar() {
  return (
    <div>
        <div className='Navbar'>
            
            <div className='Heading'>
                <a className="navbar-brand" href="#">Navbar</a>
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
                    <ShoppingCartIcon/>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}
