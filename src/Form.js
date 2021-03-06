import React, { Component, useState,} from 'react';



const Form = () => {
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


    return(
<>

<form onSubmit={formSubmit}>
<div className="container-fluid cure consultation mt-5" id="consultation">
               <h3 className="beautiful text-center mt-5"><br/>Get your free consultation today</h3>
               <div className="row d-flex justify-content-center mt-5">
               <div className="big-form col-lg-2 col-md-2 col-12">
                 
        <input type="text" 
     className="form-control service-bar" id="exampleFormControlInput1"
     name="message"
     value={data.message}
    onChange={InputEvent}
     placeholder="---message us---" required/>
    </div>
    <div className="big-form col-lg-2 col-md-2 col-12 ">
        <input type="text"  
          className="form-control service-bar" id="exampleFormControlInput1"
          name="fullname"
          value={data.fullname}
          onChange={InputEvent}
          placeholder="Name" required/>
    </div>
    <div className="big-for mcol-lg-2 col-md-2 col-12 ">
        <input type="email" 
          className="form-control service-bar"  id="exampleFormControlInput1"
          name="email"
          value={data.email}
          onChange={InputEvent}
          placeholder="Email Address" />
    </div>
    <div className="big-form col-lg-2 col-md-2 col-12 ">
        <input type="number"  
         className="form-control service-bar" id="exampleFormControlInput1"
         name="phone"
         value={data.phone}
         onChange={InputEvent}
         placeholder="Contact Number" required/>
    </div>
    <div className="big-form col-lg-2 col-md-2 col-12">
        <input type="text" 
          className="form-control service-bar"  id="exampleFormControlInput1"
          name="postcode"
          value={data.postcode}
    onChange={InputEvent}
          placeholder="Postcode" required/>
    </div>
              </div>
              </div>

              <div>
      
    </div>
    <p className="text-center pt-5">I understand that by requesting a consultation through MyClinique I am agreeing with the MyClinique Privacy Policy & Terms & Conditions.
 </p>
 <div className ="mt-5 ">
    
 
   <input type="submit"  className ="btn-orderappointment check8"value="Book your FREE consultation Now"/>  <br/><br/>  <br/><br/>                                                       
</div>
  


</form>





</>);


};

export default Form;