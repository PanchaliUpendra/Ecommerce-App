import React from 'react';
import furn1 from './furn1.jpg';
import furn2 from './furn2.jpg'
import per2 from './per2.png';
import './Tips.css';
function Tips(){
    return(
        <div>

            <div className='tipsandtricks-article-each'>

            <div>
                <img src={furn1} alt='furn1' className='tips-furnitures-img'/>
            </div>

            <div>

            <p className='article-tips-para'>Tips and Tricks</p>
            <h3>Beautiful and Functional Home Terrace Decoration</h3>
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
                <img src={furn2} alt='furn1' className='tips-furnitures-img'/>
            </div>
            <div>
            <p className='article-tips-para'>Tips and Tricks</p>
            <h3>Beautiful and Functional Home Terrace Decoration</h3>
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
export default Tips;