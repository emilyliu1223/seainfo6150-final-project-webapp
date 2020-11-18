import React,{useState} from 'react'
import Detail from "../Form/Detail.jsx"
import "./Order.css"
import data from "../Data/data.jsx"
function Order(props) {
   
    return (
        <div className="order_container">
         
            {props.item.filter(item=>item._id==props.productId).map(
                item=>(
                    <div className="orderitem_container" key={item._id}>
                    <h2>{item.name}</h2>
                    <img className="order_img" src={item.img}/>
                   <p>${item.price}</p>
                    </div>
            )
                      
                
            )
            }
            
            <Detail categoryId={props.categoryId} productId={props.productId} orderId={props} />
           
            
            
        </div>
    )
}

export default Order
