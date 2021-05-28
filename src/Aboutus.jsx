
import React from 'react';
import Web1 from "../src/images/Mark-Buddha.jpg.png";
import Web2 from "../src/images/doc2.jfif.png";
import Web3 from "../src/images/doc-3.jfif.png";
import Footer from './Footer';

const Aboutus = () => {

return (   
     <>
      
        
       <section id = "about" className ="d-flex text-center mt-5">
       <div className ="container">
<div className ='row width= "100%"'>
  <div className =" col-10 mx-auto">
                                   
   <div className =  "col-md-10 mx-auto d-flex align-items-center "> 
   <div className ="row">
    <h1 className="brace"> We are a team of caring and competent specialists to deliver superior health care </h1>
    <h2 className ="brace-1 my-3">  We are a team of qualified and trained specialists to ensure best medical services at <strong className ="brand-name"> myclinique  </strong>  </h2>
   <div className ="explain">
     <p className="text-center maxm">We originated in Northampton back in 2006, and the team have since created thousands of new smiles for patients seeking treatment to improve the appearance of their teeth. MyClinique is home to some of the top cosmetic dentists in Northampton, with staff members holding multiple certificates of qualification in many areas of dentistry. You'll be able to be seen by qualified Invisalign Doctors, dental implant specialists and Hollywood smile experts, so you can be sure you're in the best possible hands.

Our team is dedicated to providing the very best in both general and cosmetic dentistry in Northampton, as well as being leaders in other treatments like anti-wrinkle injections and dermal fillers.

Meet our team and see why we have a consistently high level of patient satisfaction.</p>

<div className ="mt-5  ">
    
    <a href= "Contactus" className ="swagButton"> Ask for appointment </a>                                                             


 
    </div>
 

  </div>
  </div>
</div>
</div>
</div>
</div>
       </section>

       <section className="we-are container mt-5 " >
  <div className=" text-center extramaxm">
    <div>

<h3 className="brace-1">Decades of experience, a true passion & a patient first mentality</h3>

<h2 className="brace mb-5">
Our Team<br/>
</h2>
<div className ='row'>
  <div className ="col-10 mx-auto text-center">
    <div className ="row gy-4" >
    <div className="col-md-4 col-10 mx-auto">
    <img src={Web1} alt=''/>
   <h5>Mark Buddha<br/>
DDMS<hr/>Dr Mark has been active throughout his 20+ years in dentistry and has build up a wealth of experience

</h5>
    </div>
     <div className="col-md-4 col-10 mx-auto">
     <img src={Web3} alt=''/>
   <h5>Lisa Tran<br/>Dental Nurse
   <hr/>Lisa is a qualified beautician and is also certified in dental radiography
   </h5>
    </div>
     <div className="col-md-4 col-10 mx-auto">
     <img src={Web2} alt=''/>
  <h5>Christos Nikolakis<br/>Orthodontist

  <br/> <hr/>Christos has a passion for passing his knowledge on to aspiring orthodontists and he's spent time as both a consultant and teacher to dentists. </h5>
    </div>
    
    </div>
    </div>
    </div>
</div>

</div>


</section>


<section className="reviews container-fluid mt-5" id='reviews-id'>
  <div className="py-5 text-center">
    <div>
<h2>
Reviews
</h2>
<h3>Here are some reviews we've received from some of our real patients...</h3>
<div className ='row'>
  <div className ="col-10 mx-auto text-center">
    <div className ="row gy-4" >
    <div className="col-md-4 col-10 mx-auto">
   <h5>I had my consultation with Dr Buddha. He was by far the most professional compared to the other clinics I went to for consultations this week. His colleague Lisa was very friendly and helpful.<hr/>

Sue Green</h5>
    </div>
     <div className="col-md-4 col-10 mx-auto">
   <h5 className="hide">So I went to see myclinique this week for a Invisalign consultation and I was very impressed, I saw a lady called Lisa and a man called Mark, I told them what a great consultation it was because I was informed of lot's of options and were given lots of information about Invisalign that other clinics never told me before.

   <hr/>Natalia Marjovic</h5>
    </div>
     <div className="col-md-4 col-10 mx-auto">
  <h5 className="hide ">MyClinique is the best clinic in Northampton my daughter got her Invisalign here with the gentleman and I get my anti-wrinkle injections here.

  <hr/>Marianne Donova</h5>
    </div>
    
    </div>
    </div>
    </div>
</div>

</div>


</section>


<Footer/>





</>);


};

export default Aboutus;