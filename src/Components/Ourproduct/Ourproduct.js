import React from 'react';

import img1 from './img1.png';
import img2 from './img2.png';

import './Ourproduct.css';


function Ourproduct(){
    return(
        <div className='our-product-flex'>
            <div className='our-product-data'>
                <p className='our-product-head'>Our Product</p>
                <h1>Crafted by talented and high quality material</h1>
                <p className='our-product-para'>Pellentesque etiam blandit in tincidunt at donec. 
                Eget ipsum dignissim placerat nisi, adipiscing 
                mauris non purus parturient. morbi fermentum, 
                vivamus et accumsan dui tincidunt pulvinar</p>
                <button className='our-product-btn'>Learn</button>
                <div>
                    <img alt="img1" src={img1} className="our-product-img1"/>
                </div>
            </div>

            <div>
                <div className='our-product-expir'>
                    <div className='our-product-exp-data'>
                    <h1>20+</h1>
                    <p className='our-product-para'>Years Experience</p>
                    </div>

                    <div className='our-product-exp-data'>
                    <h1>483</h1>
                    <p className='our-product-para'>Happy Client</p>
                    </div>
                    <div className='our-product-exp-data'>
                    <h1>150+</h1>
                    <p className='our-product-para'>Project Finished</p>
                    </div>
                </div>

                <div>
                    <img className='our-product-img2' alt='img2' src={img2}/>
                </div>
            </div>

        </div>
    );
}
export default Ourproduct;