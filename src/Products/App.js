import React from 'react';
import Product1 from './Product1/Product1';

function App(props){
    return(
        <div>
            <Product1 handle={props.handle}/>
            
        </div>
    );
}
export default App;