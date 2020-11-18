import React from 'react'
import { Link } from "react-router-dom";
import data from "../Data/data"
import "./Collection.css"
import "../Collection/Collection"
function Collection(props) {
    var collectionId=props.collectionId;
    console.log(props.item+"here");
    return (
        <div className="collection_container">
            
            {props.item.filter(item=>item.collection==collectionId).map((item)=>(
              
              
                 <div className="item_container" key={item._id}>
                
                  {/* <p>{item.cate}</p> */}
                
                  <img src={item.img} alt={item.img} />
                  <div className="link_div">
                  <Link className="link" to={`/bar/${item.cate}/${item._id}`}>{item.name}</Link>
                  </div>
                  <div className="collection_tag">
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  </div>
                 
                  
                  {/* <Bar  categoryId={item.cate} productId={item._id} productName={item.name}/> */}
                  
                  {/* <h1>{item._id}</h1> */}
                 
                </div>
            ))}
        </div>
    )
}

export default Collection
