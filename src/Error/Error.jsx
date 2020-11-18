import React,{useEffect} from 'react'
import InstagramEmbed from 'react-instagram-embed';
import { Link } from "react-router-dom";
import "./Error.css"
import named from "../images/unnamed.jpg"

function Error(){



    return (
       
    <div className="error">
      <div className="error_container">
     
       </div>
       <div className="error_title">
       <h1 >404</h1>
           <h2 >Could not find your page</h2>
           <Link className="error_link"to="/"><i class="fa fa-angle-double-right" aria-hidden="true">Go to Home page</i></Link>
       </div>
      
        
            
         </div>
          
        
        
    )
}

export default Error
