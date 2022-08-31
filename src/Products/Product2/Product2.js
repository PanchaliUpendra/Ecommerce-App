import React from 'react';
import './Product2.css';
import Foot from '../../Article/Foot/Foot';
import { Link } from 'react-router-dom';
function Product2(props){

    const[products,setproducts]=React.useState([]);
    
    React.useEffect(()=>{
        fetch('https://fakestoreapi.com/products?sort=desc').then(res=>res.json()).then(json=>setproducts(json))
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[]);
    return(
        <div>
            <div>
                <div className='filter_product2'>
                    <h1>TotalProduct <span className='product2_total_product_count'>{products.length}</span></h1>
                    <div>
                    <button>filter</button>
                    <button>sort_by</button>
                    </div>
                    
                </div>
            </div>
            <div className='product2_total_product_items'>
                {products.map((item)=>{
                    return (
                        <Link to='/Product' key={item.id} className='products2_product_each' onClick={()=>props.handle(item)} >
                        
                            <img src={item.image} alt='img-alt' width='200px' height='200px'/>
                            <p>{item.category}</p>
                            <h3>{item.title}</h3>
                            <div>
                                <p>rating:{item.rating.rate}</p>
                                <p>reviews:{item.rating.count}</p>
                            </div>
                        
                        </Link>
                    )
                })}
            </div>
            <Foot/>
        </div>
    );
}
export default Product2;