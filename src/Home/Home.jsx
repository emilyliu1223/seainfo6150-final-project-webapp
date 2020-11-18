import React,{useEffect} from 'react'
import "./Home.css";
import { Switch, Route, Link } from "react-router-dom";
import Popular from "../Popular/Popular.jsx"
import Collection from "../Collection/Collection.jsx"
function Home(props) {
  
  
 

    return (
        <div>
         
            <div>
              <h2 className="subtitle">
                  This is what you need. <br/>
                  <span>Confidence. Beauty. Nature. </span><br/>
                  You.
              </h2>
            </div>
        <div className="home_container">        
          <div className="img-container">
          <img className="mySlides" src="https://stylereportmagazine.com/wp-content/uploads/2018/08/Zoe-Newport-31-1000-768x768.jpg" />
          <div className="btn">
          <Link className="link" to="/collection/modern">Modern Collection</Link>
          </div>
          </div>
      
       <div className="img-container">
       <img className="mySlides" src="https://stylereportmagazine.com/wp-content/uploads/2018/08/Kassiday-Oceanside-2-20-768x768.jpg" />
       <div className="btn">  
       <Link className="link" to="/collection/beauty">Beauty Collection</Link>
       </div>
       </div>
       
       <div className="img-container">
       <img className="mySlides" src="https://data.whicdn.com/images/346840842/original.jpg" />
       <div className="btn">
       <Link className="link" to="/collection/nature">Nature Collection</Link>
       </div>
       </div> 
     </div>
       <div className="home_section1">
           <p>
               Jolie's Jewelry creates dainty and delicate necklaces,
                rings and earrings using high quality semi-precious gemstones
                , gold filled, sterling silver and
                 rose gold filled chains. The moment you slip one of our gorgeous pieces on, 
                 you will feel like a modern day goddess. 
                 </p>
       </div>
{/*  */}

<div className="com_div1">
            <div className="container_div">  
            <div className="about_div">
            <h2 className="vertical">Jolie's Design</h2>
            <div>
                    <p><Link className="about_link" to="/category/all">Our Jewelry</Link></p>
                    <p><Link className="about_link" to="/gallery">Elle est Jolie!</Link></p>
                   <p><Link className="about_link" to="/contact">Our Designers</Link></p>
                   <p><Link className="about_link" to="/question">Our Quality</Link></p>
              </div>
            </div>
             </div>
             <div className="comeimg_div">
             <Link to="/category/necklaces"><img src="https://farm1.staticflickr.com/939/41914426470_09b15505c4_h.jpg" alt="https://farm1.staticflickr.com/939/41914426470_09b15505c4_h.jpg"/></Link>
             <div className="comeimg_p">Necklaces</div>
               <div className="opacity"></div>
               
             </div>
             {/* <div className="comeimg_div1">
                 <div className="comeimg_img"><a href="https://gemgossip.com/jewels-at-my-doorstep-motif-collection-by-david-webb/"><img src="https://farm5.staticflickr.com/4557/37714575394_80ce044834_b.jpg" alt="https://farm5.staticflickr.com/4557/37714575394_80ce044834_b.jpg"/></a><div className="opacity"></div></div>
                 <div className="comeimg_img"><a href="https://gemgossip.com/jewels-at-my-doorstep-leigh-maxwell-jewelry/"><img src="https://gemgossip.com/wp-content/uploads/2018/07/CN6A8319.jpg" alt="https://gemgossip.com/wp-content/uploads/2018/07/CN6A8319.jpg"/></a><div className="opacity"></div></div>
             </div> */}
             <div className="comeimg_div">
             <Link to="/category/earrings"><img src="https://live.staticflickr.com/65535/49640667433_87dabce624_h.jpg" alt="https://live.staticflickr.com/65535/49640667433_87dabce624_h.jpg"/></Link>
               <div className="comeimg_p">Earrings</div>
               <div className="opacity"></div>
               
             </div>
             <div className="comeimg_div">
               <Link to="/category/rings"><img src="https://gemgossip.com/wp-content/uploads/2018/07/JJ2A4056-.jpg" alt="https://gemgossip.com/wp-content/uploads/2018/07/JJ2A4056-.jpg"/></Link>
               <div className="comeimg_p">Rings</div>
               <div className="opacity"></div>
               
             </div>
             

             <div className="container_div">
                
            <div className="about_div">
            <h2>Jolie's Baby</h2>
            <div >
                  <p><Link className="about_link" to="/question">Q & A</Link></p>
                  <p><Link className="about_link" to="/gallery">Follow us</Link></p>
                  <p><Link className="about_link" to="/discount">Get discount</Link></p>
                  <p><Link className="about_link" to="/contact">Customer Service</Link></p>
                 
                
              </div>
              {/* <h2>About {props.content.company}</h2>
            <div>
            <p>Founder <br />{props.content.founder}</p>
            <p>Location <br/> {props.content.location}</p>
            <p>Establishment <br/>{props.content.establisheddate}</p>
            <p>Email <br/>{props.content.email} </p>
              </div> */}
            </div>

            </div>

            </div>





     <div >
    <Popular item={props.item}/>
     </div>
      </div>

        
    )
}

export default Home
