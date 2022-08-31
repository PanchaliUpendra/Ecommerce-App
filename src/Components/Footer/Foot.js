import React from 'react';
import './Foot.css';
function Foot(){
    return(
        <div>
            <div className='foot-h1-btn'>
                <h1>Join with me to get special discount</h1>
                
                <button className='Foot-btn'>Learn More</button>
            </div>
            <hr className='foot-line'/>
            <div className='esa-btn'>
                <div>
                    <p className='foot-head'>LALAM</p>
                    <p>Lalasia is digital agency that help you make 
                        better experience iaculis cras in.</p>
                </div>
                <div className='foot-services'>
                    <div className='foot-serv-item'>
                        <p className='foot-head'>Product</p>
                        <p>New Arrivals</p>
                        <p>Best Selling</p>
                        <p>Home Decor</p>
                        <p>Kitchen set</p>
                    </div>
                    <div className='foot-serv-item'>
                        <p className='foot-head'>Services</p>
                        <p>Catalog</p>
                        <p>Blog</p>
                        <p>FaQ</p>
                        <p>Pricing</p>
                    </div>
                    <div className='foot-serv-item'>
                        <p className='foot-head'>Follow Us</p>
                        <p>Facebook</p>
                        <p>instagram</p>
                        <p>Twitter</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Foot;