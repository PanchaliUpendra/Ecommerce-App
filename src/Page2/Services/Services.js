import React from 'react';
import './Services.css';
import img1 from './img1.png';
import side1 from './side1.jpg';
import side2 from './side2.jpg';
import side3 from './side3.jpg';
import Footer from './Foot/Foot'
function Services(){
    //when we have to use for smooth scrolling behavior
    React.useEffect(()=>{
        window.scrollTo({top:0,
        left:0,
    behavior:"smooth"});
    },[]);
    //window.scrollTo(0,0,"smooth"); direct method
    return(
        <div>
            <div className='services-contain'>
            <h1 className='service-head'>Services</h1>
            <p className='service-para'>The product crafted by talented crafter and using high quality material with love inside</p>
            <img src={img1} alt="img1" className='services-btn'/>
            <hr className='service-para'/>
            </div> 
            <div className='service-wrap-topic'>
                <div className='contain-wrap'>
                    <h1 className='service-topic'>01</h1>
                    <p className='topic-head'>Furniture</p>
                    <p className='topic-para'>At the ultimate smart home, you're met 
                        with technology before you even step 
                        through the front door. </p>
                </div>
                <div className='contain-wrap'>
                    <h1 className='service-topic'>02</h1>
                    <p className='topic-head'>Home decoration</p>
                    <p className='topic-para'>Create A Calming Summer Escape With Our 
                    Luxurious Home Accessories For The Balmy 
                    Evenings. </p>
                </div>
                <div className='contain-wrap'>
                    <h1 className='service-topic'>03</h1>
                    <p className='topic-head'>Kitchen cabinet</p>
                    <p className='topic-para'>Introducing the modular kitchen cabinet system. 
                    Start with our huge selection of base and wall cabinets. </p>
                </div>
                <div className='contain-wrap'>
                    <h1 className='service-topic'>04</h1>
                    <p className='topic-head'>Interior Design</p>
                    <p className='topic-para'>Innovative products often feature innovative 
                    designs that play with the patterns we are familiar. </p>
                </div>
                <div className='contain-wrap'>
                    <h1 className='service-topic'>05</h1>
                    <p className='topic-head'>Exterior Design</p>
                    <p className='topic-para'>These stylish and resilient 
                    products provide up-to-date options for roofing, siding, 
                    decking, and outdoor spaces. </p>
                </div>
                <div className='contain-wrap'>
                    <h1 className='service-topic'>06</h1>
                    <p className='topic-head'>Custom Furniture</p>
                    <p className='topic-para'>With Quality Materials and 
                    Modern Designs, we have Designs for all Tastes. 
                    we bring you World Class Designs. </p>
                </div>
            </div>
            <div className='portfolio-service'>
                <div>
                    <p className='portfolio-service-btn'>Portfolio</p>
                    <h1>Amazing project we’ve done before</h1>
                </div>
                <div className='view-adv-con'>
                    <p className='ser-view-para'>Pellentesque etiam blandit in tincidunt at 
                        donec. Eget ipsum dignissim placerat nisi, 
                        adipiscing mauris non.</p>
                    <p className='view-portfolio-adv'>view Portfolio</p>
                </div>
            </div>
            <div className='ser-images-sides'>
                <img src={side1} alt="side1" className='ser-side1'/>
                <div className='ser-two-side'>
                    <img src={side2} alt="img2" className="ser-side-common"/>
                    <img src={side3} alt="img3" className="ser-side-common"/>
                </div>
            </div>
            <div className='ser-foot'>
                <div >
                    <h1>Are you interested work with us?</h1>
                </div>
                <div className='ser-foot-btn-style'>
                <button className='ser-foot-btn'>Let's Talk</button>
                </div>
            </div>
            <Footer/>
        </div>
        
    );
}
export default Services;