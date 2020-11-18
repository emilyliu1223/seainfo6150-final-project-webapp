import React, { useEffect, useState } from "react";
import "./Detail.css"
import data from "../Data/data.jsx"
import { isEmpty } from "lodash";

const Detail = (props) => {
  var productId=props.productId;
  const [total, setTotal]=useState(data.filter(item=>item._id==productId)[0].price);
  const[num,setNum]=useState(0); 
  const [submittedForm, setSubmittedForm] = useState();
  const[show,setShow]=useState(false);
  const[warn,setWarn]=useState(false);
  const[fetchedData, setFetchedData]=useState([]);
  const[fetchedData1, setFetchedData1]=useState([]);
  const[address,setAddress]=useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://demo3130502.mockable.io/coupon"
      );
      const responseJson = await response.json();
      setFetchedData(responseJson);
      
    };

    const fetchData1 = async () => {
      const response = await fetch(
        "https://demo3130502.mockable.io/50states"
      );
      const responseJson = await response.json();
      setFetchedData1(responseJson);
      
    };


  
    if(isEmpty(fetchedData)){
      fetchData();
    }


    if(isEmpty(fetchedData1)){
      fetchData1();
    }


   }, [fetchedData])

   
   
  
  function onSubmit(e) {

    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
    
  };
  
  function buildOptions() {
    var arr = [];

    for (let i = 1; i <= 10; i++) {
        arr.push(<option key={i} value={i}>{i}</option>)
    }


    return arr; 
}
   function buildState(){
      var arr=[];
      fetchedData1.map(i=>arr.push(
      <option key={i.name} value={i.name}>{i.name}</option>
      ))
      return arr;
   }

   function display(e){
     setShow(false);
     setWarn(true);
     for(var i=0;i<fetchedData.length;i++){
       if(e.target.value==fetchedData[i]){
         setShow(true);
         setWarn(false);
       }
       if(e.target.value.length==0){
         setWarn(false);
       }
     }
   }

   

  return (
    <div className="detail_container">
      {
        submittedForm? (
          <div className="confirmation_div">
           <p> Congradulation.<br />Your order is succussfully placed.</p>
            Your Name: {submittedForm.get("name")}<br/>
            Your Email: {submittedForm.get("email")}<br />
            Your Address: {submittedForm.get("address")}{"  ,"}{address}<br />
            Your Contact: {submittedForm.get("contact")}<br />
            Number: {Math.round(total/(data.filter(item=>item._id==productId)[0].price))}<br/>
            Your payment method: {submittedForm.get("payment")}<br/>
            Payment in Total: {show?Math.round(total*0.9*1.13):Math.round(total*1.13)}
            </div>
        ) : (
            
            <form onSubmit={onSubmit}>
            <div className="form_container">
              <div>
              <div className="amount_div">
            <label htmlFor="coupon">Coupon:(Optional) </label>
              <input type="text" name="coupon" id="coupon" pattern="[a-zA-Z0-9]{1,10}"
               onChange={display} 
              />
              <label htmlFor="myDropdownId">Number </label>
            <select name="myDropdown" id="myDropdownId" onChange={e=>setTotal(e.target.value*data.filter(item=>item._id==productId)[0].price)}>
                {buildOptions()}
            </select>
            </div>
              <div className="amount_div">
               <label>Before Tax: $ {total}</label><br />
               {warn?<label htmlFor="coupon"style={{color:"red"}}>(Coupon number not found)</label>:""}{"   "}
                <label>After Discount{show?"(90%)":""}: ${show?Math.round(total*0.9):total}</label><br />
               <label>After Tax (13%): $ {show?Math.round(total*0.9*1.13):Math.round(total*1.13)}</label>
               </div>
              <div className="info">
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" id="name" pattern="[a-zA-Z]{1,10} [a-zA-Z]{1,10}" required placeholder="Emily Liu"
               title='Username should only contain letters. e.g. john lenon'
              
              />
              </div>
            <div className="info">
            <label htmlFor="email">Email: </label>
              <input type="email" id="email" required name="email" placeholder="emily@gmail.com"
              />  
            </div>
            <div className="info">
            <label htmlFor="state">State: </label>
            <select style={{width:"40%"}}name="state" id="state" onChange={e=>setAddress(e.target.value)}>
                {buildState()}
            </select>
             </div>
             <div className="info">
             <label htmlFor="address">Address: </label>
            <input type="text" name="address" required id="address"/>
             </div>
             <div className="info">
             <label htmlFor="contact">Contact: </label>
            <input type="tel" id="contact" required name="contact" pattern="[0-9]{10}" placeholder="1234567890"
            title="10 digits"
            />
             </div>
           </div>
           
            <label className="payment">Please select your payment: </label>
            <div className="pay_div">
            <div className="radio_div">
           <input type="radio" id="paypal" name="payment" required value="paypal"/>
           <label htmlFor="paypal">Paypal</label><br/>
           <input type="radio" id="credit card" name="payment" value="credit card"/>
           <label htmlFor="credit card">Credit Card</label><br />
           <input type="radio" id="debit card" name="payment" value="debit card"/>
           <label htmlFor="debit card">Debit Card</label>
            </div>
            <div className="card_div">
              <div>
              <label htmlFor="credit_num">Card Number: </label>
           <input type="tel" required name="credit_num" id="credit_num" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" 
           placeholder="1234 4567 7890 0123"
           title="16 digits, space every 4 digits" />
              </div>
            <div>
            <label htmlFor="date">Date: </label>
           <input type="month" required id="date" name="date" />
            </div>
           <div>
           <label htmlFor="password">Passcode: </label>
           <input type="password" required id="password" name="password" />
           </div>
            </div>
            </div>
            <input type="submit" value="Send it" />
            </div>
           
           
          </form>
            
          
        )
      }
    </div>
  )
}

export default Detail
