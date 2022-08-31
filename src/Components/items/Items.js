import React from 'react';
import './Items.css';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
function Items(){
    return(
        <div className='Items-container'>
            <div >
                <div className='Items-set'>

                    <div className='items-btn'>
                        <img alt='img1' src={img1} width="60px" height="60px"/>
                        <h3>Many Choices</h3>
                        <p>Pellentesque etiam blandit in tincidunt at donec. 
                            Eget ipsum dignissim 
                            placerat nisi, adipiscing mauris non. </p>

                    </div>

                    <div className='items-btn'>
                        <img alt='img2' src={img2} width="60px" height="60px"/>
                        <h3>Fast and On Time</h3>
                        <p>
                        Pellentesque etiam blandit in tincidunt at donec. 
                        Eget ipsum dignissim placerat nisi, 
                        adipiscing mauris non. 
                        </p>
                    </div>

                    <div className='items-btn'>
                        <img alt='img3' src={img3} width="60px" height="60px"/>
                        <h3>Affordable Price</h3>
                        <p>
                        Pellentesque etiam blandit in tincidunt at donec. 
                        Eget ipsum dignissim placerat nisi, 
                        adipiscing mauris non. 
                        </p>

                    </div>
                </div>

            </div>

        </div>
    );
}
export default Items;