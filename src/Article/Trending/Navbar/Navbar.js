import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar(){
    return(
        <div>
            <ul className='weekend-navbar-all'>
                <li className='week-nav-list'><Link to='/Article' className='Article-child-nav-link' >All</Link></li>
                <li className='week-nav-list'><Link to='Tips' className='Article-child-nav-link'>TipsAndTrick</Link></li>
                <li className='week-nav-list'><Link to='Interior' className='Article-child-nav-link'>Interior Design</Link></li>
                <li className='week-nav-list'><Link to='Design' className='Article-child-nav-link'>Design Inspirations</Link></li>
                <li className='week-nav-list'><Link to='Guide' className='Article-child-nav-link'>ColorGuide</Link></li>
            </ul>

        </div>
    );
}
export default Navbar;