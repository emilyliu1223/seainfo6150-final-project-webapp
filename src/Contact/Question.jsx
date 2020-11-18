import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Question.css"
import Show from "./Show.jsx"


function Question(props) {
    return (
        <div className="question">
           
            <div className="question_sec">
            {props.item.map(i=>(
            <Show key={i.q} q={i.q} a={i.a}/>
            ))}
            <div className="question_sec">                  
            <div>Ask Us: jolies.jewellery@gmail.com </div>    
            </div>
            </div>
            
        </div>
    )
}

export default Question
