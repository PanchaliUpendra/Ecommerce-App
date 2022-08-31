import React from 'react';
import furn3 from './furn3.jpg';
import furn4 from './furn4.jpg';
import per2 from './per2.png';

import './Interior.css';
function Interior(){
    return(
        <div>

            <div className='tipsandtricks-article-each'>

            <div>
                <img src={furn3} alt='furn1' className='tips-furnitures-img'/>
            </div>

            <div>

            <p className='article-tips-para'>Interior Design</p>
            <h3>Modern Minimalist Home Design: Aesthetics of Modern Home Interiors</h3>
            <p className='article-tips-para'>Home terrace decorations are part of every decoration or overall home design. Interiordesign.id – If 
                by chance your house has enough space or space.</p>

            <div className='article-tips-along-img'>
                <img src={per2} alt='per2' className='article-tips-per-img'/>
                <div className='article-tips-div3'>
                    <h4>By Morgan Goldberg</h4>
                    <p className='article-tips-para-div3'>Friday, 1 April 2022</p>
                </div>
            </div>

            </div>
            
            
            </div>
            <div className='tipsandtricks-article-each'>
            <div>
                <img src={furn4} alt='furn1' className='tips-furnitures-img'/>
            </div>
            <div>
            <p className='article-tips-para'>Interior Design</p>
            <h3>Modern Minimalist Home Design: Aesthetics of Modern Home Interiors</h3>
            <p className='article-tips-para'>Home terrace decorations are part of every decoration or overall home design. Interiordesign.id – If 
                by chance your house has enough space or space.</p>
            <div className='article-tips-along-img'>
                <img src={per2} alt='per2' className='article-tips-per-img'/>
                <div className='article-tips-div3'>
                    <h4>By Morgan Goldberg</h4>
                    <p className='article-tips-para-div3'>Friday, 1 April 2022</p>
                </div>
            </div>
            </div>
            </div>
            
            
            

        </div>

    );
}
export default Interior;