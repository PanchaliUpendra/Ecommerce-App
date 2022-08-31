import React from 'react';
import './Dailynews.css';
import bed1 from './bed1.jpg';
import bed2 from './bed2.jpg';
import per1 from './per1.png';
function Dailynews(){
    return(
        <div>
            <div className='dailynews-today-top-headlines'>
                <h4 className='daily-news-orange-head'>Daily News</h4>
                <h2 className='daily-news-black-head'>Today top headlihnes</h2>
            </div>
            <div className='dailynews-feeder'>
                <div  className='dailynews-feeder-each'>
                    <img src={bed1} alt="bed1-img" className="dailynews-bed1"/>
                    <p>Design Inspiration</p>
                    
                    <h3>Bedroom Design is the Most Personal Reflection of the Owner, Really?</h3>
                    <p>Is it true that the bedroom design is the most personal reflection of the owner? Many people believe that to be able to judge a person's personality, it is enough to</p>
                    
                    <div className='daily-news-authors'>
                        <img src={per1} alt="per1" className='dailynews-per1'/>
                        <h5>By Jenny Agnes</h5>
                        <p className='daily-news-tuesday'>Tuesday, 17 May 2022</p>
                    </div>
                </div>
                <div className='dailynews-feeder-each'>
                    <img src={bed2} alt="bed1-img" className="dailynews-bed1"/>
                    <p>Tips and Trick</p>
                    
                    <h3>Create a non-monotonous and dynamic interior atmosphere with these 9 variations of wall tiles</h3>
                    <p>Is it true that the bedroom design is the most personal reflection of the owner? Many people believe that to be able to judge a person's personality, it is enough to</p>
                    
                    <div className='daily-news-authors'>
                        <img src={per1} alt="per1" className='dailynews-per1'/>
                        <h5>By Jenny Agnes</h5>
                        <p className='daily-news-tuesday'>Tuesday, 17 May 2022</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Dailynews;