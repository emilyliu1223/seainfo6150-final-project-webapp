import React, { useState } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import data from "../Data/data"
import  "./Product.css"
import Form from "../Form/Form"

function Product (props) {
    const [target,setTarget]=useState("");
   
  
    return (
        <div>
    
        <div>
        {props.item.filter(item=>item._id==props.productId).map(item=>(
              <div className="bar_container" key={item._id}>
                  <div className="left">
                  <div className="bar_img_container">
                    <img className="img"src={item.description[0][0]} alt={item.description[0][0]} onMouseOver={(e)=>{
                          setTarget(e.target.src)
                    }} onMouseOut={(e)=>{
                        setTarget("")
                  }} />
                    </div>
                    <div className="bar_img_container">
                    <img className="img" src={item.description[0][1]} alt={item.description[0][1]} onMouseOver={(e)=>{
                          setTarget(e.target.src)
                    }} onMouseOut={(e)=>{
                        setTarget("")
                  }}/>
                  
                  </div>
                  <div className="bar_img_container">
                    <img className="img" src={item.description[0][2]} alt={item.description[0][2]} onMouseOver={(e)=>{
                          setTarget(e.target.src)
                    }} onMouseOut={(e)=>{
                        setTarget("")
                  }}/>
                  
                  </div>
                  </div>
                  <div className="middle">
                  {target==""&&<img className="middle_img"src={item.img} alt={item.img}/>}
                  {target!="" && <img src={target} alt=""/>}
                  </div>
                  <div className="right">
                  <div className="description_container">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <p className="detail">{item.description[1].detail}</p>
                  <Form item={item}/>
                  </div>
                  
                  </div>
              </div>
          ))}
        </div>
        
          
         
        </div>
        
    )
}

export default Product
