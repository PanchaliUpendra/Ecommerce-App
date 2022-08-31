import React from 'react';
import Atricle1 from './files/Atricle1';
import Dailynews from './Daily/Dailynews';
import Weektrend from './Trending/Weektrend';
import Foot from './Foot/Foot';
function App(){
    React.useEffect(()=>{
        window.scrollTo({top:0,
        left:0,
    behavior:"smooth"});
    },[]);
    return(
        <div>
            <Atricle1/>
            <Dailynews/>
            <Weektrend/>
            <Foot/>

        </div>
    );
}
export default App;