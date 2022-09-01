import React from 'react';
import {HashRouter, Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Page1 from './Components/App';
import Page2 from './Page2/App';
import Page3 from './Page3/App';
import Article from './Article/App';
import All from './Article/Trending/Allsets/All';
import Design from './Article/Trending/Allsets/Design';
import Tips from './Article/Trending/Allsets/Tips';
import Guide from './Article/Trending/Allsets/Guide';
import Interior from './Article/Trending/Allsets/Interior';
import ExtraArticle from './Article/Trending/Extra/ExtraArticle';
import Products from './Products/App';
import Login from './Login/components/Registration/Registration';
import Register from './Login/components/Login/Login';
import Form from './Login/components/Form/Form';
import Productonly from './Prodctonly/Productonly';
function App(){
    const[product1,setproduct]=React.useState({title:"ubbu"});
    function handle(data){
        setproduct(data);
    }
    
    
    return(
        <HashRouter basename="/Ecommerce">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Page1/>}/>
            <Route path='/page2' element={<Page2/>}/>
            <Route path='/page3' element={<Page3/>}/>
            <Route path='/products' element={<Products handle={handle}/>}/>
            <Route path='/Article' element={<Article/>}>
                <Route index element={<All/>}/>
                <Route path='Tips' element={<Tips/>}/>
                <Route path='Design' element={<Design/>}/>
                <Route path='Guide' element={<Guide/>}/>
                <Route path='Interior' element={<Interior/>}/>   
            </Route>
            <Route path='/ExtraAtricle' element={<ExtraArticle/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/Product' element={<Productonly product1={product1}/>}/>
            
            

        </Routes>
        </HashRouter>
        
    );
}
export default App;