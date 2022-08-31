import React from 'react';
import Limitproduct from './Limitproduct/Limitproduct';
import './Product.css';
function Product(){
   
    return(
        <div>
            <div className='product-head'>
                <p className='product-btn'>Product</p>
                <h2>Our popular product</h2>
                <p className='product-para'>Pellentesque etiam blandit in tincidunt at donec. 
                    Eget ipsum dignissim placerat nisi, adipiscing 
                    mauris non purus parturient.</p>
            </div>
            <Limitproduct/>
            

        </div>
    );
}
export default Product;