import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import shop from './shop.png';
import './Navbar.css';
function Navbar(){
    
    return(
        <div className='nav-btn'>
            <div className='navbar'>
                <div className='logo-btn'>
                    <img alt="shop" src={shop} className="img-btn"/>
                <p className='logo'><Link to='/Ecommerce-App' className='Link'>LALAM</Link></p>
                </div>
                <ul className='ul-btn'>
                    <li  ><Link to='/products' className='Link' >Product</Link></li>

                    <li  ><Link to='/page2' className='Link' >Services</Link></li>
                    <li ><Link to='/Article' className='Link'>Article</Link></li>
                    <li  ><Link to='/page3' className='Link'>AboutUs</Link></li>
                </ul>
                <div className='Avatar' >
                    <Link to='/login'>
                    <Avatar />
                    </Link>
                </div>
            </div>

        </div>
    );
}
export default Navbar;