import React from 'react';
import Limitcard from './Limitcard/Limitcard';
import './Limitproduct.css';
function Limitproduct(){
  const [dataset,setdata]=React.useState([]);
  React.useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=8').then(res=>res.json()).then(json=>setdata(json))
  },[]);
   
   return(
    <div className='limitcards'>
    <div className='limit-btn'>
        {
            dataset.map((item)=>{
                return(
                    <Limitcard key={item.id} title={item} />
                )
            })
        }
    </div>
    </div>
   )
}
export default Limitproduct;