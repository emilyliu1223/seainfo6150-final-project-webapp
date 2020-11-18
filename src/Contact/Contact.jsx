import React from 'react'
import "./Contact.css"
import { Link } from "react-router-dom";


import unname from "../images/unnamed.jpg"
import unname1 from "../images/unnamed1.jpg"
const Contact = (props) => {
    return (
        <div>
            <article>
                <div className="contact_div">
                <div className="contact_sec">
                    <div>
                        <h2 className="store_name">Jolie's Jewellery</h2>
                        </div>
                        <div className="service_div"> 
                        
                <div><p><i className="fas fa-phone"></i> {props.content.service} /{props.content.time}</p></div>
               <div><p><i className="fas fa-at"></i>{props.content.share}</p></div>
               <div className="social">
              <div> <a href="http://www.facebook.com"><i className="fab fa-facebook-square"></i></a></div>
              <div> <a href="http://www.instagram.com"><i className="fab fa-instagram-square"></i></a></div>
              <div> <a href="http://www.pinterest.com"><i className="fab fa-pinterest"></i></a></div>
              <div> <a href="http://www.twitter.com"><i className="fab fa-twitter"></i></a></div>
              <div> <a href="http://www.youtube.com"><i className="fab fa-youtube"></i></a></div>
               </div>
                  </div>
                    <div className="line_div">
                    {/* <h2>Service line </h2> */}
                     <p>Jolie's</p>
                    </div>
                    <div className="background_div">     
             <p>
            Jolie's was founded in 1995 with the idea that the diamond and engagement ring business was ready for innovation.
             We revolutionized the industry with a disruptive online business model, making it possible to shop for extraordinary, high-quality diamonds at a great value. And we didn't stop there.
             We also firmly believed that our customers deserved more choices, straightforward information and legendary service. We felt strongly about building a team of passionate, non-commissioned diamond and jewelry experts who put the customer first. 
             (We're thrilled to share that a few of our customers have even invited our experts to their weddings!)
             As the leader in handcrafted engagement rings and beautiful fine jewelry, we're constantly innovating and looking for new ways to help you discover and design the perfect pieces for every occasion. 
             We strive to be your jeweler for life.
               </p>

           </div>
                  
              
            <div className="com_div">
            <div className="container_div">  
            <div className="about_div">
            <h2>About {props.content.company}</h2>
            <div>
            <p>Founder <br />{props.content.founder}</p>
            <p>Location <br/> {props.content.location}</p>
            <p>Establishment <br/>{props.content.establisheddate}</p>
            <p>Email <br/>{props.content.email} </p>
              </div>
            </div>
             </div>
             <div className="comeimg_div">
             <Link to="/category/necklaces"><img src="https://live.staticflickr.com/65535/49641193471_1b5d73990e_h.jpg" alt="https://live.staticflickr.com/65535/49641193471_1b5d73990e_h.jpg"/></Link>
             <div className="comeimg_p">Necklaces</div>
               <div className="opacity"></div>
               
             </div>
             {/* <div className="comeimg_div1">
                 <div className="comeimg_img"><a href="https://gemgossip.com/jewels-at-my-doorstep-motif-collection-by-david-webb/"><img src="https://farm5.staticflickr.com/4557/37714575394_80ce044834_b.jpg" alt="https://farm5.staticflickr.com/4557/37714575394_80ce044834_b.jpg"/></a><div className="opacity"></div></div>
                 <div className="comeimg_img"><a href="https://gemgossip.com/jewels-at-my-doorstep-leigh-maxwell-jewelry/"><img src="https://gemgossip.com/wp-content/uploads/2018/07/CN6A8319.jpg" alt="https://gemgossip.com/wp-content/uploads/2018/07/CN6A8319.jpg"/></a><div className="opacity"></div></div>
             </div> */}
             <div className="comeimg_div">
             <Link to="/category/earrings"><img src="https://live.staticflickr.com/65535/49702872491_4b88c20a29_h.jpg" alt="https://live.staticflickr.com/65535/49702872491_4b88c20a29_h.jpg"/></Link>
               <div className="comeimg_p">Earrings</div>
               <div className="opacity"></div>
               
             </div>
             <div className="comeimg_div">
               <Link to="/category/rings"><img src="https://farm1.staticflickr.com/972/42112147212_bfd67dc81d_h.jpg" alt="https://farm1.staticflickr.com/972/42112147212_bfd67dc81d_h.jpg"/></Link>
               <div className="comeimg_p">Rings</div>
               <div className="opacity"></div>
               
             </div>
             

             <div className="container_div">
                
            <div className="about_div">
            <h2>Jolie's Collections</h2>
            <div >
                    <p><Link className="about_link" to="/collection/all">All</Link></p>
                    <p><Link className="about_link" to="/collection/modern">Modern </Link></p>
                    <p><Link className="about_link" to="/collection/beauty">Beauty</Link></p>
                   <p><Link className="about_link" to="/collection/nature">Nature</Link></p>
                  
                
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
           </div>
         
            <div className="employee_div">
                <div>
                    <h2>Designers</h2>
                </div>
            {
                props.content.designer.map(i=>
                    (
                        <div className="designer_div" key={i.name}>
                            <div className="designer_img"> 
                            <img src={i.img} alt={i.img}/>
                            </div>
                            <div className="designer_info">
                            <h2>{i.name}</h2>
                           <p>{i.quote}</p>
                           <a href={i.article}><p>Website</p></a>
                            </div>
                        </div>
                    )
                )
            }
            </div>
                </div>
              
            </article>
        </div>
    )
}

export default Contact
