import React, { useState } from "react";
import "./Form.css"

import { Link } from "react-router-dom";
const Form = (props) => {
  var count=0;
  
  return (
    <div className="div">
            <Link className="form_link" to={`/bar/${props.item.cate}/${props.item._id}/${++count}`}>Checkout here</Link>
    </div>
  )
}

export default Form
