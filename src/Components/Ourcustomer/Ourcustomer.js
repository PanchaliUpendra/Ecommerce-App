import React from 'react';
import './Ourcustomer.css';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
function Ourcustomer(){
    return(
        <div className='Our-customer'>
            <div className='our-customer-block1'>
            <p className='our-customer-head'>Testimonials</p>
            <h2>What our customer say</h2>
            <p className='our-customer-para1'>Pellentesque etiam blandit in tincidunt at donec. 
                Eget ipsum dignissim placerat nisi, adipiscing mauris 
                non purus parturient.</p>
            </div>

            <div className='our-customer-etc'>
                <div className='our-customer-users'>
                <div className='our-customer-size'>
                    <img alt="img1" src={img1} className="our-customer-img1"/>
                    <p className='our-customer-para'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
                    <div className='img2-img3-para'>
                        <div>
                        <div className='img2-name'>
                        <img alt="img2" src={img2} className="our-customer-img2"/>
                        <h3>Janne_Cooper</h3>
                        </div>
                        </div>
                        <div>
                         <div className='img3-para'>
                        <img alt="img3" src={img3} className="our-customer-img3"/>
                        <h4>4.3</h4>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='our-customer-size'>
                    <img alt="img1" src={img1} className="our-customer-img1"/>
                    <p className='our-customer-para'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
                    <div className='img2-img3-para'>
                        <div>
                        <div className='img2-name'>
                        <img alt="img2" src={img2} className="our-customer-img2"/>
                        <h3>Janne_Cooper</h3>
                        </div>
                        </div>
                        <div>
                         <div className='img3-para'>
                        <img alt="img3" src={img3} className="our-customer-img3"/>
                        <h4>4.3</h4>
                        </div>
                        </div>
                    </div>

                </div>
                <div className='our-customer-size'>
                    <img alt="img1" src={img1} className="our-customer-img1"/>
                    <p className='our-customer-para'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
                    <div className='img2-img3-para'>
                        <div>
                        <div className='img2-name'>
                        <img alt="img2" src={img2} className="our-customer-img2"/>
                        <h3>Janne_Cooper</h3>
                        </div>
                        </div>
                        <div>
                         <div className='img3-para'>
                        <img alt="img3" src={img3} className="our-customer-img3"/>
                        <h4>4.3</h4>
                        </div>
                        </div>
                    </div>

                </div>
                <div className='our-customer-size'>
                    <img alt="img1" src={img1} className="our-customer-img1"/>
                    <p className='our-customer-para'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
                    <div className='img2-img3-para'>
                        <div>
                        <div className='img2-name'>
                        <img alt="img2" src={img2} className="our-customer-img2"/>
                        <h3>Janne_Cooper</h3>
                        </div>
                        </div>
                        <div>
                         <div className='img3-para'>
                        <img alt="img3" src={img3} className="our-customer-img3"/>
                        <h4>4.3</h4>
                        </div>
                        </div>
                    </div>

                </div>
                </div>
            </div>

        </div>

    );

}
export default Ourcustomer;