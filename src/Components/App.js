import React from 'react';

//import Navbar from './Navbar/Navbar';
import Body from './Body/Body';
import Benefits from './benefits/Benefits';
import Items from './items/Items';
import Product from './Product/Product';
import Ourproduct from './Ourproduct/Ourproduct';
import Ourcustomer from './Ourcustomer/Ourcustomer';
import Foot from './Footer/Foot';

//Above one is page one



import './App.css';

function App() {
  React.useEffect(()=>{
    window.scrollTo({top:0,
    left:0,
behavior:"smooth"});
},[]);
  return (
    <div className="App">
      <Body/>
      <Benefits/>
      <Items/>
      <Product/>
      <Ourproduct/>
      <Ourcustomer/>
      <Foot />

    </div>
  );
}

export default App;
