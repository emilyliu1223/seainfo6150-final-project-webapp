import React,{useState} from 'react'

function Show(props) {
    const[show, setShow]=useState(false);

   function display(){
        setShow(!show);
   }
    return (
            <div className="question_div" key={props.q}>
            <h2 className="question_q">{props.q} <br/>{show?<i class="fa fa-sort-asc" aria-hidden="true" onClick={display}></i>:<i class="fa fa-caret-down" aria-hidden="true" onClick={display}></i>}</h2>
            {show&&(
            <h3 className="question_a">{props.a}</h3>
            )}
            </div>
    )
}

export default Show
