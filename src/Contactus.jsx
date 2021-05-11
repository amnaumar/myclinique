import React, {useState,} from 'react';
import Footer from './Footer';
import Coni from "../src/images/contactimg.jpg";

const Contactus = () => {
const [data, setData]= useState ({
  fullname:"",
  phone:"",
  email:"",
  message:"",
});
const InputEvent = (event) =>{
  const{ name, value }= event.target;
  setData((preVal) =>{
    return {
      ...preVal,
      [name] :value,
    };
  });
};





  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.fullname},${data.phone},${data.email},${data.message}`);
  };

return (   
     <>
      
      <div className="contacti">

      <img src={Coni} className="img-fluid " alt=" surgery"/>
      </div>
      
      
       <div className="my-5">
         <h1 className="noma text-center beautiful ">Contact Us   </h1>
       </div>
       <div className="container contact-div">
         <div className="row">
           <div className="col-md-6 col-10 mx-auto">
             
             <form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1"
    name="fullname" 
    value={data.fullname}
    onChange={InputEvent}
    placeholder="Enter your name" required/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="number" class="form-control" id="exampleFormControlInput1"
    name="phone"
    value={data.phone}
    onChange={InputEvent}
    placeholder="mobile number" required/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1"
    name="email"
    value={data.email}
    onChange={InputEvent}
    placeholder="name@example.com" required/>
  </div>

  <div className="form-group s-big ">
    <label for="exampleFormControlInput1 ">Message </label>
    <input type="message" class="form-control appoint" id="exampleFormControlInput1"
    name="message"
    value={data.message}
    onChange={InputEvent}
    placeholder="enter your message here" required/>
  </div>

 
 
  
  <button className="btn btn-outline-success mb-5" type="submit">Send Us</button>
 
</form>
<div className="space"></div>
          

           </div>

         </div>
       </div>
      
      






<Footer/>



</>);


};

export default Contactus;