import React from 'react';
import video1 from './video1.mp4'
//24-hour-on-duty
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
//our team
import per1 from './per1.png';
import per2 from './per2.png';
import per3 from './per3.png';
import per4 from './per4.png';
import per5 from './per5.png';
import per6 from './per6.png';

import './About.css';
function About(){
    React.useEffect(()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth",
        })

    },[]);
    
    return(
        <div>
            <div className='about-header'>
                <h1 className='about-head-h1'>About Us</h1>
                <p className='about-head-p'>We display products based on the latest products we have, if you want
                  to see our old products please enter the name of the item</p>
            </div>
            
            <div className='about-video'>
            <video src={video1} controls='controls' autoPlay={false} className='about-video-main'/>
            </div>
            
            <div className='about-page3-mission'>
                <div className='about-mission'>
                    <div >
                        <div className='about-mission-extra'>
                            <p className='about-our-mission'>Our Mission</p>
                            <h1 className='about-mission-head'>Our team dedicated to help find  smart home product</h1>
                            </div>
                            <div className='about-mission-list'>
                            <div className='about-mission-list-each'>
                            <h1>20+</h1>
                            <p className='about-list-p'>Years Experience</p>
                            </div>
                            <div className='about-mission-list-each'>
                            <h1>483</h1>
                            <p className='about-list-p'>Happy Client</p>
                            </div>
                            <div className='about-mission-list-each'>
                            <h1>150+</h1>
                            <p className='about-list-p'>Project Finished</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='about-24h-container'>
                        <img src={img1} alt='img1' className='about-24hours'/>
                        <div className='about-24h-l'>
                            <h3>24/7 Supports</h3>
                            <p className='about-list-p'>24/7 support means a support service that is provided 24 hours a day and 7 days a week. </p>
                        </div>
                    </div>
                    <div className='about-24h-container'>
                        <img src={img2} alt='img2' className='about-24hours'/>
                        <div className='about-24h-l'>
                            <h3>Free Consultation</h3>
                            <p className='about-list-p'>A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts and discuss possible</p>
                        </div>
                    </div>
                    <div className='about-24h-container'>
                        <img src={img3} alt='img3' className='about-24hours'/>
                        <div className='about-24h-l'>
                            <h3>
                            Overall Guarantee
                            </h3>
                            <p className='about-list-p'>The comprehensive guarantee is required for import, warehousing, transit, processing and specific use. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-our-team'>
                <div>
                    <p className='our-team-head'>Our Team</p>
                    <h1>Meet our leading and strong team</h1>
                </div>
                <div className='our-team-para-size'>
                    <p className='our-team-para'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</p>
                </div>
            </div>
            <div className='about-our-team-members'>
                <div className='our-each-teammem'>
                    <img src={per1} alt='per1' className='about-our-team-imgs'/>
                    <p className='our-team-names'>Jesse Depp</p>
                    <p className='our-team-para'>Founder & CEO</p>
                </div>
                <div className='our-each-teammem'>
                    <img src={per2} alt='per2' className='about-our-team-imgs'/>
                    <p className='our-team-names'>Margareth Carter</p>
                    <p className='our-team-para'>COO</p>
                </div>
                
                <div className='our-each-teammem'>
                    <img src={per3} alt='per4'className='about-our-team-imgs'/>
                    <p className='our-team-names'>Andrew Taggart</p>
                    <p className='our-team-para'>Developer</p>
                </div>
                <div className='our-each-teammem'>
                    <img src={per4} alt='per5' className='about-our-team-imgs'/>
                    <p className='our-team-names'>Grace Marie</p>
                    <p className='our-team-para'>Manager</p>
                </div>
                <div className='our-each-teammem'>
                    <img src={per5} alt='per6' className='about-our-team-imgs'/>
                    <p className='our-team-names'>Jesse Depp</p>
                    <p className='our-team-para'>Senior Designer</p>
                </div>
                <div className='our-each-teammem'>
                    <img src={per6} alt='per6' className='about-our-team-imgs'/>
                    <p className='our-team-names'>Jesse Depp</p>
                    <p className='our-team-para'>Marketer</p>
                </div>

            </div>

            <div className='about-foot-head'>
                <div>
                    <h1>
                    Are you interested work with us?
                    </h1>
                </div>
                <div className='about-foot-btn'>
                    <button className='about-our-team-btn'>Let's Talk</button>
                </div>
            </div>

            

        </div>
    );
}
export default About;