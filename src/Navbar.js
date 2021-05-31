import React from 'react';
import {NavLink} from 'react-router-dom';
import Mn from "../src/images/menu bar.png";
import Lo from "../src/images/logo-image.png";
const Navbar =() => {

return (

<>

<div className ="container-fluid  nav_bg">
<div className ='row'>
  <div className ="col-10 mx-auto">


<nav className="navbar navbar-expand-lg " >
  <div className="container-fluid"><NavLink className ="navbar-brand" to="/">
  <img src={Lo} className="img-fluid" alt=" surgery"style={{height:"2.83rem",width:"14.83rem"}}/>
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

           <li className="hover-me"><a href="#"></a> Dental Implants
           <div className="sub-menu-2">
               <ul>
               <li><a href="Dentalimplant"> All Dental Implants</a></li>
               <li><a href="multipledentalimplants">Multiple Dental Implants</a></li>
               <li><a href ="Implantretaineddentures"> Implant Retained Dentures</a></li>
               <li><a href="Allon6"> All-On-6</a></li>
               <li><a href="Singleimplant">Single Implant</a></li>
               <li><a href="Wholearchreplacement">Whole Arch Replacement</a></li>
               <li><a href="Allon4">All-On-4</a></li>
               <li><a href="Teethinaday"> Teeth In A Day</a></li>
               </ul>
           </div>
           </li>
           <li className="hover-me" ><a href="#"></a> Invisalign
           <div className="sub-menu-2">
               <ul>
                 <li><a href="Invisalign"> All Invisalign</a></li>
                 <li><a href="Invisalignlite">Invisalign Lite</a></li>
                 <li> <a href="Invisalignexpress">Invisalign Express</a></li>
                 <li><a href="Invisalignfull"> Invisalign Full</a></li>
               </ul>
               </div>
           </li>
           <li><a href="Clearaligner"> Clear Aligners</a></li>
           <li><a href="Clearbraces"> Clear Braces</a></li>
           <li><a href="Fixedbraces"> Fixed Braces</a></li>
           <li><a href="Lingualbraces">Lingula Braces</a></li>
           <li className="hover-me" ><a href="#"></a> Smile Makeovers & Veneers 
           <div className="sub-menu-2">
               <ul>
                 <li><a href="Smilemakeoverandveneers">All Smile Makeovers & Veneers</a></li>
                 <li><a href="Veneerssinglearch">Veneers Single Arch</a></li>
                 <li> <a href="Singleveneers">Single Veneers</a></li>
                 <li><a href="Hollywoodsmile"> Hollywood Smile</a></li>
               </ul>
               </div>
           
           
           
           </li>
           <li className="hover-me" ><a href="#"></a>  Crowns & Bridges
           <div className="sub-menu-2">
               <ul>
                
                 <li><a href="Crownsandbridges">All Crowns & Bridges</a></li>
                 <li><a href="Dentalcrowns"> Dental Crowns</a></li>
                 <li><a href="Dentalbridges">Dental Bridges</a> </li>
               </ul>
               </div>
  
           </li>
           <li  className="hover-me"><a href="#"></a> Anti Wrinkle Injections & Fillers
           
           <div className="sub-menu-2">
               <ul>
                
                 <li><a href ="Antiwrinkleinjectionandfillers">All Anti Wrinkle Injections & Fillers</a></li>
                 <li><a href="Antiwrinkleinjections"> Anti Wrinkle Injections </a></li>
                 <li><a href="fillers">Fillers </a></li>
               </ul>
               </div>
           
           </li>
           <li><a href="Generaldentistry"> General Dentistry</a></li>
           <li><a href="Emergencytreatments">Emergency Treatmen</a>t</li>
           

          
         
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
<li><a href="Home"> Home </a>   </li>
<li><a href="Treatments">Treatments 

 </a> </li>
        
          
         


<li><a href="Aboutus"> Aboutus </a>   </li>
<li><a href="Pricing">Pricing  </a>   </li>
<li><a href="Faqs"> Faqs </a>   </li>
<li><a href="Contactus">Contactus  </a>   </li>




</ul>

</nav>

</div>



</>
);
};


export default Navbar;