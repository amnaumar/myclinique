import React from 'react';
import {NavLink} from 'react-router-dom';
import Mn from "../src/images/menu bar.png";
const Navbar =() => {

return (

<>

<div className ="container-fluid  nav_bg">
<div className ='row'>
  <div className ="col-10 mx-auto">


<nav className="navbar navbar-expand-lg " >
  <div className="container-fluid"><NavLink className ="navbar-brand" to="/">
   <strong className="logo-name"> myclinique</strong>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse menudropdown1  " id="navbarSupportedContent">
     <div className="menu-bar  ml-auto mb-2 mb-lg-0">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink activeClassName ='menu_active'className="nav-link  text-uppercase "  to ="/">Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink activeClassName ='menu_active  menudrop dropdown-toggle' className="nav-link   text-uppercase" to ="/Treatments"data-toggle="dropdown" >Treatments</NavLink>
         
            <div className="sub-menu-1">
            <ul>

           <li className="hover-me"><a href=""></a> Dental Implants
           <div className="sub-menu-2">
               <ul>
               <li><a href="http://localhost:3000/Dentalimplant"> All Dental Implants</a></li>
               <li><a href="http://localhost:3000/multipledentalimplants">Multiple Dental Implants</a></li>
               <li><a href ="http://localhost:3000/Implantretaineddentures"> Implant Retained Dentures</a></li>
               <li><a href="http://localhost:3000/Allon6"> All-On-6</a></li>
               <li><a href="http://localhost:3000/Singleimplant">Single Implant</a></li>
               <li><a href="http://localhost:3000/Wholearchreplacement">Whole Arch Replacement</a></li>
               <li><a href="http://localhost:3000/Allon4">All-On-4</a></li>
               <li><a href="http://localhost:3000/Teethinaday"> Teeth In A Day</a></li>
               </ul>
           </div>
           </li>
           <li className="hover-me" ><a href=""></a> Invisalign
           <div className="sub-menu-2">
               <ul>
                 <li><a href="http://localhost:3000/Invisalign"> All Invisalign</a></li>
                 <li><a href="">Invisalign Lite</a></li>
                 <li> <a href="">Invisalign Express</a></li>
                 <li><a href=""> Invisalign Full</a></li>
               </ul>
               </div>
           </li>
           <li><a href="http://localhost:3000/Clearaligner"> Clear Aligners</a></li>
           <li><a href="http://localhost:3000/Clearbraces"> Clear Braces</a></li>
           <li><a href="http://localhost:3000/Fixedbraces"> Fixed Braces</a></li>
           <li><a href="http://localhost:3000/Lingualbraces">Lingula Braces</a></li>
           <li className="hover-me" ><a href=""></a> Smile Makeovers & Veneers 
           <div className="sub-menu-2">
               <ul>
                 <li><a href="http://localhost:3000/Smilemakeoverandveneers">All Smile Makeovers & Veneers</a></li>
                 <li><a href="http://localhost:3000/Veneerssinglearch">Veneers Single Arch</a></li>
                 <li> <a href="http://localhost:3000/Singleveneers">Single Veneers</a></li>
                 <li><a href="http://localhost:3000/Hollywoodsmile"> Hollywood Smile</a></li>
               </ul>
               </div>
           
           
           
           </li>
           <li className="hover-me" ><a href=""></a>  Crowns & Bridges
           <div className="sub-menu-2">
               <ul>
                
                 <li><a href="http://localhost:3000/Crownsandbridges">All Crowns & Bridges</a></li>
                 <li><a href="http://localhost:3000/Dentalcrowns"> Dental Crowns</a></li>
                 <li><a href="http://localhost:3000/Dentalbridges">Dental Bridges</a> </li>
               </ul>
               </div>
  
           </li>
           <li  className="hover-me"><a href=""></a> Anti Wrinkle Injections & Fillers
           
           <div className="sub-menu-2">
               <ul>
                
                 <li><a href ="http://localhost:3000/Antiwrinkleinjectionandfillers">All Anti Wrinkle Injections & Fillers</a></li>
                 <li><a href=""> Anti Wrinkle Injections </a></li>
                 <li><a href="">Fillers </a></li>
               </ul>
               </div>
           
           </li>
           <li><a href=""></a> General Dentistry</li>
           <li><a href=""></a> Emergency Treatment</li>
           

          
         
          </ul> 
          </div> 
        </li>
        
        <li className="nav-item ">
          <NavLink activeClassName ='menu_active' className="nav-link   text-uppercase" to ="/Aboutus">About Us</NavLink>
     



        </li>
   
        <li className="nav-item menuitem1  dropdown">
          <NavLink activeClassName ='menu_active ' className="nav-link   text-uppercase" to ="/Pricing" >Pricing</NavLink>
       
      
        
        </li>
        <li className="nav-item dropdown">
          <NavLink activeClassName ='menu_active ' className="nav-link   text-uppercase" to ="/Faqs" >FAQs</NavLink>
         
         
        </li>

       
        <li className="nav-item">
          <NavLink activeClassName ='menu_active' className="nav-link  text-uppercase " to ="/Contactus">Contact Us</NavLink>
        </li>
      </ul>
    </div>
    </div>
  </div>





</nav>
</div>
</div>

</div>

<img src={Mn} activeClassName ='dropdown-toggle' className=" menupic" alt=""style={{height:"1.83rem",width:"1.83rem"}}/>

<div className="menu-bar" id="iconbar">


<nav>
<ul>
<li><a href="http://localhost:3000/"> Home </a>   </li>
<li><a href="">Treatments  </a>   </li>
<li><a href="http://localhost:3000/Aboutus"> Aboutus </a>   </li>
<li><a href="http://localhost:3000/Pricing">Pricing  </a>   </li>
<li><a href="http://localhost:3000/Faqs"> Faqs </a>   </li>
<li><a href="http://localhost:3000/Contactus">Contactus  </a>   </li>




</ul>

</nav>

</div>



</>
);
};


export default Navbar;