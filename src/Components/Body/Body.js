import React from 'react';

import photo from './photo.png'
import './Body.css';
function Body(){
    return(
        <div className='body-btn'>
            <div className='header-btn'>
                <h1 className='head-btns'>Discover Furniture With High Quality Wood<img alt="img" src={photo} width="30px" height="30px"/></h1>
            </div>
            <div className='paras'>
                <p className='para-btn'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, 
                adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt 
                aliquam adipiscing tempor.</p>
            </div>
            <div className='body-end'>
            <div  className='search'>
                <div className='search-bar'>
                <input type='search' placeholder='🔍 search property' className='input-search'/>
                <button className='search-btn'>search</button>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Body;