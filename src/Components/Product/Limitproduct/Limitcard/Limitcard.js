import React from 'react';
import './Limitcard.css';
function Limitcard(props){
    return(
        <div className='card'>
            
            <img alt="images" src={props.title.image} width="250px" height="180px"/>
            <p className='card-dis1'>{props.title.category}</p>
            <h3 className='card-name'>{props.title.title}</h3>
            
            <p className='card-dis'>{props.title.description}</p>
            <h4 className='card-name'>${props.title.price}</h4>
        </div>
    );
}
export default Limitcard;