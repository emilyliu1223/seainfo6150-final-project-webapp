import React from 'react'
// import data from "../Data/data.jsx"
import "./Category.css"
import { Switch, Route, Link } from "react-router-dom";
import data from "../Data/data"
import "../Category/Category"


function Category(props) {

    var cateId=props.cateId;
    
    return (
        <div  className="category_container">
            
            {props.item.filter(item=>item.cate==cateId).map((item)=>(
               
              
                 <div className="item_container"key={item._id}>
                
                  {/* <p>{item.cate}</p> */}
                
                  <img src={item.img} alt={item.img} />
                  <div className="link-div">
                  <Link className="link" to={`/bar/${item.cate}/${item._id}`}>{item.name}</Link>
                  
                  </div>
                  <div className="tag">
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

export default Category
