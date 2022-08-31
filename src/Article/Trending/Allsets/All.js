import React from 'react';
import './All.css';
import Tips from './Tips'
import Design from './Design';
import Guide from './Guide';
import Interior from './Interior';
function All(){
    const [loadmore,setload]=React.useState(true);
    const[btn,setbtn]=React.useState(true);
    function setloades(){
        setload(!loadmore);
        setbtn(!btn);
    }
    return(
        <div>
            <Tips/>
            <Design/>
            
            <div className={loadmore?'All-load-more-items':'All-load-more-each'}>
            <Guide/>
            <Interior/>
            </div>

            <div className={btn?'div-btn-load1':'div-btn-load'}>
            <button onClick={setloades} className='All-btn-loadmore'>Load More</button>
            </div>
            <div className={btn?'div-btn-load':'div-btn-load1'}>
            <button onClick={setloades} className='All-btn-loadmore'>Load Less</button>
            </div>
            
            
            

        </div>
    );
}
export default All;