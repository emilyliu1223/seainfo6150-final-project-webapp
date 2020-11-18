import React, { useState } from 'react'
import Instagram from './Instagram';
import "./Discount.css"
import instagram from "../images/instagram.png"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Discount(props) {

    function display(a,e){
    document.getElementsByClassName("div1")[0].style.display="none";
    document.getElementsByClassName("insta_container")[0].style.backgroundColor="white";
    document.getElementsByClassName("insta_container")[0].style.color="#d3c09a";
    document.getElementsByClassName("div2")[0].style.display="none";
    document.getElementsByClassName("insta_container2")[0].style.backgroundColor="white";
    document.getElementsByClassName("insta_container2")[0].style.color="#d3c09a";
    document.getElementsByClassName("div3")[0].style.display="none";
    document.getElementsByClassName("insta_container3")[0].style.backgroundColor="white";
    document.getElementsByClassName("insta_container3")[0].style.color="#d3c09a";
    document.getElementsByClassName(a)[0].style.display="block";
    document.getElementsByClassName(e.target.className)[0].style.backgroundColor="#d3c09a";
    document.getElementsByClassName(e.target.className)[0].style.color="white";
    }

    return (
        <div className="discount_div" >
            <div className="dicount_1">
            <div className="insta_container" onClick={(e)=>display("div1",e)}>
               Step 1
            </div>
            <div className="insta_container2" onClick={(e)=>display("div2",e)} >
              Step 2
            </div>
            <div className="insta_container3" onClick={(e)=>display("div3",e)}>
               Step 3
            </div>
            </div>
            <div className="discount_2">
                <div className="div1">
                <div>
                <p>Publish a post to <a href="https://www.instagram.com/happyjewelers/tagged/">#happyjewelers</a> <br />
                 Instagram. Share your Jolie's jewelry.
                </p>
                </div>    
                    <div className="insta_dis">
                    <div>
                 <Instagram url='https://www.instagram.com/p/CHA7JpVJAlV/'/>
                 </div>  
                <div>
                 <Instagram url='https://www.instagram.com/p/CHF44hEhy0t/'/>
                  </div>
                 <div>
                 <Instagram url='https://www.instagram.com/p/B8XLygonUk8/'/>
                 </div>  
                    </div>
               
             </div> 
        {/* //////////  */}
            <div className="div2">
                <p>Copy link of your post and send it to <span><a href="mailto:joliesjewelry.insta@gmail.com">joliesjewelry.insta@gmail.com</a></span>.
                </p>
                <div className="cut_pic">
                  <img src={instagram} alt={instagram}/>
             </div>    
                </div> 

        {/* /////////// */}
        <div className="div3">
                <p>
                    A coupon number will be sent to you from jolie's customer service. 
                    You can apply this coupon number on your next purchase. 
                    You will get a 15% discount! 
                    If you haven't got replied within 3 days after email your link 
                    to <a href="mailto:joliesjewelry.insta@gmail.com">joliesjewelry.insta@gmail.com</a>. 
                    Please contact jolies.jewelry@gmail.com. We will assign a specialist to you.
                </p>   
                </div>
        {/* //////////// */}
            </div>

       </div>
 
    )
}

export default Discount
