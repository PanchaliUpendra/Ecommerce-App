import React from 'react';
import Navbar from './Navbar/Navbar';
import { Link } from 'react-router-dom';


import './Weektrend.css';
import { Outlet } from 'react-router-dom';

function Weektrend(){
    return(
        <div className='weekend-allsets-cont'>
            <div>
            <p className='weekend-trend-head-orange'>Trending Topics</p>
            <h1>Popular last week</h1>
            </div>
            <div>
                <Navbar/>
                <Outlet/>
            </div>
            <div className='weekend-dis-foot'>
                <Link to='/ExtraAtricle'><button className='weekend-foot-button' >Let's Talk more</button></Link>
            </div>

        </div>
    );
}
export default Weektrend;