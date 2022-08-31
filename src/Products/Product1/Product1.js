import React from 'react';
import './Product1.css';
import backpart1 from './backpart1.jpg';
import backpart2 from './backpart2.jpg';
import backpart3 from './backpart3.jpg';
import backpart4 from './backpart4.jpg';
import Product2 from '../Product2/Product2';
function Product1(props){

    const dataset=[backpart1,backpart2,backpart3,backpart4];
    const backgroundtypes=['backpart1','backpart2','backpart3','backpart4'];
    const [datascore,setdatascore]=React.useState(3);

    function leftsidehandle(){
        if(datascore-1<0){
            setdatascore(3);
        }else{
            setdatascore(datascore-1);
        }
    }
    function rightsidehandle(){
        if(datascore+1>3){
            setdatascore(0);
        }else{
            setdatascore(datascore+1);
        }
    }
    function buttonsendscore(e){
        setdatascore(e);
    }
    return(
        <div>
        <div>
            <div className='product1-head-para'>
            <h1>Products</h1>
            <p>We display products based on the latest products we have, if you want
               to see our old products please enter the name of the item</p>
            </div>
            <div className='product1-all-sets'>
            <img src={dataset[datascore]} alt="helloimg" width="100%" height="450px"/>
        
            <div className='product1buts'>
                <div>
                    <button className='prod1-left-btn' onClick={leftsidehandle}>left</button>
                </div>
                <div>
                    <button className='prod1-right-btn' onClick={rightsidehandle}>right</button>
                </div>
            </div>
            <div>
                <div className='product1-discount'>
                    <button>Discount</button>
                    <h1>Ramadhan Sale Offer</h1>
                    <p>Get 40% off for the first transaction on Lalasia</p>
                </div>
            </div>
            <div className='product1btnflex'>
                <button onClick={()=>buttonsendscore(0)} className={backgroundtypes[datascore]==='backpart1'?'active':'inactive'}></button>
                <button onClick={()=>buttonsendscore(1)} className={backgroundtypes[datascore]==='backpart2'?'active':'inactive'}></button>
                <button onClick={()=>buttonsendscore(2)} className={backgroundtypes[datascore]==='backpart3'?'active':'inactive'}></button>
                <button onClick={()=>buttonsendscore(3)} className={backgroundtypes[datascore]==='backpart4'?'active':'inactive'}></button>
            </div>
            </div>
       </div>
       <div className='product1_find_input1'>
            <div className='product1_input_button'>
                <input type='text' placeholder='🔍 Search property' className='product1-input1'/>
                <button>FindNow</button>
            </div>
       </div>
       <div className='product1_total_products'>
        <Product2 handle={props.handle}/>
       </div>

        </div>
    );
}
export default Product1;