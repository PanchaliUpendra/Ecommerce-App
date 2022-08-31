import React from 'react';
import './ExtraArticle.css';
import backgroundimg from './background1.jpg';
import furnit from './furniture.jpg';
import extraimg2 from './extraimg2.png';
import ex3 from './ex3.png';
import ex4 from './ex4.png';
import ex5 from './ex5.png';
import Foot from '../../Foot/Foot';
function ExtraArticle(){
    window.scrollTo(0,0);
    return(
        <div>
            <div className='extraArticle-header'>
                <h1>Bedroom Design is the Most Personal Reflection of the Owner, Really?</h1>
                <div className='extra-para-div'>
                <p className='extraArticle-para1'>Is it true that the bedroom design is the most personal reflection of 
                    the owner? Many people believe that 
                    to be able to judge a person's personality, it is enough to</p>
                </div>
                
                <img src={backgroundimg} alt='imgs' className='extraArticle-img-head'/>
            </div>
            <div className='extra-article-para-jumble'>
                <div >
                    <div>
                        <p className='extraArticle-div-para'>
                        Commodo sodales at eget id dignissim amet consectetur 
                        adipiscing elit. At cursus magna libero turpis scelerisque 
                        tristique scelerisque mi. Sed nunc auctor faucibus vitae. 
                        Gravida erat nisi sed vulputate sed cum viverra enim pretium. 
                        Sed nunc consequat, tincidunt pharetra. Mattis quis egestas mi, 
                        malesuada morbi morbi porttitor porttitor. Faucibus nunc, turpis 
                        malesuada blandit feugiat porttitor feugiat pellentesque condimentum. 
                        At nisi, cursus sem blandit sed nunc phasellus. Placerat auctor tincidunt 
                        commodo auctor placerat viverra tortor quis eu. Pretium velit eu, massa tristique 
                        congue egestas. In arcu tellus tellus urna, orci gravida etiam velit, viverra. 
                        Convallis nunc sed tellus eget feugiat ultricies purus. Consectetur sollicitudin 
                        id eget facilisis hendrerit nibh.
                        </p>
                    </div>
                    <div>
                        <p className='extraArticle-div-para'>
                        Nisi quam mi est et et. Lectus sed imperdiet non vestibulum 
                        volutpat tellus odio aliquam. Eu rutrum tincidunt risus felis 
                        sagittis, consequat, iaculis tortor bibendum. At nisl, diam a 
                        sagittis nulla nec at. Faucibus ultricies pharetra, faucibus 
                        erat varius ornare. Viverra pharetra nibh leo et purus in et. 
                        Amet felis lectus consectetur duis ut orci. Sed vitae quam vel pretium 
                        urna, duis neque. Vitae commodo interdum adipiscing mi ultrices. Aliquam 
                        risus nibh tincidunt mauris faucibus gravida eleifend.
                        Ornare tincidunt gravida sed adipiscing vel adipiscing 
                        turpis neque elementum. Donec duis malesuada quam vehicula. 
                        Mauris sem tellus vitae cursus pellentesque semper nam est erat. 
                        Vulputate dui nisi neque, morbi mauris id augue. Habitant ultrices egestas 
                        vitae eget mattis ipsum sed. Ornare porttitor lobortis mauris nulla et vitae 
                        risus augue commodo. Nunc placerat nascetur semper est facilisis. Arcu cum aliquam vitae sit ultrices. 
                        Aliquet amet elit nibh sapien a. Id eu sagittis est eu ornare.
                        </p>

                    </div>
                </div>
                <div>
                    <div>
                        <p className='extraArticle-div-para'>
                        Faucibus facilisi morbi pharetra quis sed. 
                        Vitae suspendisse facilisis facilisis ligula felis et a 
                        parturient aenean. Ac maecenas ultricies felis risus 
                        scelerisque duis posuere. Lectus tellus montes, ac sed diam. 
                        Habitant amet, leo cras dui ac eu magna.
                        Sed neque lorem mi laoreet orci aliquam maecenas. 
                        Molestie enim, nulla egestas id metus quisque eget. 
                        Tempor ante hendrerit venenatis et pellentesque viverra. 
                        Ornare mattis dui viverra suspendisse habitant tempus ornare 
                        aliquam. Condimentum tellus cursus diam interdum. Quam dictum 
                        pellentesque vestibulum mi. Aliquet laoreet sem proin viverra 
                        nec, at. Malesuada aliquam quisque felis, faucibus. Diam duis 
                        nunc tincidunt integer risus sit parturient urna. Etiam sed 
                        id nisi, tempus fames. Tempor ultrices massa eleifend id 
                        aliquet integer. Phasellus felis convallis fames habitasse 
                        sagittis, dui tellus.
                        </p>

                    </div>
                    <div>
                        <img src={furnit} alt="furnit" className="extra-article-img"/>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='article-extra-head'>Bedroom Collection</h2>
                <div className='extra-article-para-jumble'>
                <div className='extraArticle-div-para'>
                Nisi quam mi est et et. Lectus sed imperdiet non vestibulum 
                volutpat tellus odio aliquam. Eu rutrum tincidunt risus felis 
                sagittis, consequat, iaculis tortor bibendum. At nisl, diam a 
                sagittis nulla nec at. Faucibus ultricies pharetra, faucibus 
                erat varius ornare. Viverra pharetra nibh leo et purus in et. 
                Amet felis lectus consectetur duis ut orci.
                </div>
                <div className='extraArticle-div-para'>
                Praesent tempus vel urna suspendisse cursus. Ac proin vitae 
                viverra lorem nulla mattis in. Urna diam accumsan quisque 
                adipiscing sagittis, in. Adipiscing dolor, morbi placerat 
                sit vitae ipsum amet consequat. Imperdiet lacus tempus, nibh 
                eget metus, sed pellentesque mattis aenean.
                </div>
                </div>
                
            </div>
            <div className='extra-image-part2'>
                <img src={extraimg2} alt="extraimages" className='extra-article-img2'/>
            </div>
            <div className='extra-article-heading-similar'>
                <p className='extra-similar-topics'>Similar Topics</p>
                <h1>Maybe you’re interested</h1>
            </div>
            <div className='extra-article-extra-images'>
                <div className='extra-article-extra-each'>
                    <img src={ex3} alt='ex3' className='extra-ex-images'/>
                    <p className='extraArticle-div-para'>Tips and Trick</p>
                    <h1>Create a non-monotonous and dynamic interior atmosphere with these 9 variations of wall tiles</h1>
                    <p className='extraArticle-div-para'>Quoted from The Healthy Home Economist, a study in 1932 stated that color doesn't really have to be visible to have an effect
The radiance of a</p>
                    
                </div>
                <div className='extra-article-extra-each'>
                    <img src={ex4} alt='ex4' className='extra-ex-images'/>
                    <p className='extraArticle-div-para'>Color Guide</p>
                    <h1>20+ Best Kitchen Paint Colors That Make Kitchen Spaces Look More Fun</h1>
                    <p className='extraArticle-div-para'>Quoted from The Healthy Home Economist, a study in 1932 stated that color doesn't really have to be visible to have an effect
The radiance of a</p>
                    
                </div>
                <div className='extra-article-extra-each'>
                    <img src={ex5} alt='ex5' className='extra-ex-images'/>
                    <p className='extraArticle-div-para'>Design Tips</p>
                    <h1>Modern Minimalist Home Design: Aesthetics of Modern Home Interiors</h1>
                    <p className='extraArticle-div-para'>Quoted from The Healthy Home Economist, a study in 1932 stated that color doesn't really have to be visible to have an effect
The radiance of a</p>
                    
                </div>
            </div>
            <div className='extra-up-head-foot'>
                <div>
                    <h1>Subscribe our newsletter?</h1>
                </div>
                <div className='extra-up-head-btn'>
                <button>Let's Talk</button>
                </div>
                
            </div>
            <Foot/>
        </div>
    );
}
export default ExtraArticle;