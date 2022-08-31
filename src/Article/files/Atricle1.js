import React from 'react';
import './Atricle1.css';
import img1 from './per1.png';
function Atricle1(){
    const bgcom=['bg1','bg2','bg3','bg4'];
    const[count,setcount]=React.useState(3);
    function leftbutton(){
        if(count>0){
            setcount(count-1);
        }else{
            setcount(3);
        }
    }
    function rightbutton(){
        if(count<3){
            setcount(count+1);
        }else{
            setcount(0);
        }
    }
    return(
        <div className='Articles-containers'>
            <div className='Article-header'>
                <h1 className='Article-head'>Article</h1>
                <p className='Atricle-para'>We display products based on the latest products we have, if you want
                to see our old products please enter the name of the item</p>
            </div>
            
            <div className='article-flex-img'>
                <div className='Article-img-background'>
                <div className={bgcom[count]}>
                <div className='Article-buttons'>
                <button className='left-btn' onClick={leftbutton}>Left</button>
                <button className='right-btn' onClick={rightbutton}>Right</button>
            </div>
                </div>
                </div>
                
                <div className='Article-flex-cont'>
                <div className='overload-container'>
                    <p className='Atricle-para'>Tips and Trick</p>
                    <h3>This 400-Square-Foot New York Apartment Is Maximized With
                        Custom Millwork</h3>
                    
                    <div className='Atricle-cont-btn'>
                        <img src={img1} alt="img11" className='article-scroll-btn'/>
                        <h5>ByMorgan Goldberg</h5>
                        <p className='Atricle-para1'>Tuesday, 17 May 2022</p>
                    
                    </div>
                </div>
                </div>
            </div>


        </div>
    );
}
export default Atricle1;