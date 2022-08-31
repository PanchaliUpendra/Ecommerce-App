import React from 'react';
import './Productonly.css';
import Foot from '../Article/Foot/Foot';
function Productonly(props){
    const[relateditems,setitems]=React.useState([]);
    React.useEffect(()=>{
        fetch('https://fakestoreapi.com/products?sort=desc').then(res=>res.json()).then(json=>setitems(json))
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[]);
    return(
        <div>
            <div className='productonly_first_divs'>
                <div className='productonly_div1_img'>
                    <img src={props.product1.image} alt="product-img"  width="350px" height="350px"/>
                </div>
                <div className='productonly_div1_cont'>
                    <h2>{props.product1.title}</h2>
                    <p>{props.product1.category}</p>
                    <p>{props.product1.description}</p>
                    <h2>${props.product1.price}</h2>
                    <div className='productonly_subdiv1_btns'>
                        <button className='productonly_subdivs_btn'>Buy Now</button>
                        <button className='productonly_subdivs_btn1'>Add to cart</button>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='productonlysystem'>Related Items</h1>
                <div>
                    <div  className='total_relateditems'>{relateditems.filter((item)=>(item.category===props.product1.category && item.id!==props.product1.id)).map((names)=>{
                        return(<div className='eachrelateditems'>
                            
                            <img src={names.image} alt='images' className='relateditems_productonly'/>
                            <p>{names.category}</p>
                            <h2>{names.title}</h2>
                            <h2>${names.price}</h2>
                        </div>
                        )
                    })}</div>
                </div>
            </div>
            <Foot/>
            
        </div>
    );
}
export default Productonly;