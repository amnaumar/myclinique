import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '.././node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Navbar from './Navbar';
import Clearbraces from './Clearbraces';
import Pricing from './Pricing';
import Faqs from './Faqs';

import Multipledentalimplants from './Multipledentalimplants';
import Dentalimplant from './Dentalimplant';
import Invisalign from './Invisalign';
import Implantretaineddentures from './Implantretaineddentures';
import Antiwrinkleinjectionandfillers from './Antiwrinkleinjectionandfillers';
import Clearaligner from './Clearaligner';
import Fixedbraces from './Fixedbraces';
import Lingualbraces from './Lingualbraces';
import  Veneerssinglearch from './Veneerssinglearch';
import   Crownsandbridges from './Crownsandbridges';
import  Dentalbridges  from './Dentalbridges';
import  Dentalcrowns  from './Dentalcrowns';
import  Smilemakeoverandveneers  from './Smilemakeoverandveneers';
import  Hollywoodsmile  from './Hollywoodsmile';
import  Singleveneers  from './Singleveneers';
import   Wholearchreplacement  from './Wholearchreplacement';
import  Allon6   from './Allon6';
import  Singleimplant  from './Singleimplant';
import  Allon4 from './Allon4';
import  Teethinaday from './Teethinaday';






import {Switch,Route,Redirect} from 'react-router-dom';

const App = () => {
  return (
    < >
   <Navbar/> 
   
   <Switch>
     <Route exact path = "/" component = {Home}/>
    <Route exact path = "/Aboutus" component = {Aboutus}/>
     <Route exact path = "/contactus" component = {Contactus}/>
     <Route exact path = "/Pricing" component = {Pricing}/>
     <Route exact path = "/Faqs" component = {Faqs}/>
     <Route exact path = "/Clearbraces" component = {Clearbraces}/>
     
     <Route exact path = "/Multipledentalimplants" component = {Multipledentalimplants}/>
      <Route exact path = "/Dentalimplant" component = {Dentalimplant}/>
      <Route exact path = "/Invisalign" component = {Invisalign}/>
      <Route exact path = "/Implantretaineddentures" component = {Implantretaineddentures}/>
      <Route exact path = "/Antiwrinkleinjectionandfillers" component = {Antiwrinkleinjectionandfillers}/>
      <Route exact path = "/Clearaligner" component = {Clearaligner}/>
      <Route exact path = "/Fixedbraces" component = {Fixedbraces}/>
      <Route exact path = "/Lingualbraces" component = {Lingualbraces}/>
      <Route exact path = "/Veneerssinglearch" component = {Veneerssinglearch}/>
      <Route exact path = "/Crownsandbridges" component = {Crownsandbridges}/>
      <Route exact path = "/Dentalbridges" component = {Dentalbridges}/>
      <Route exact path = "/Dentalcrowns" component = {Dentalcrowns}/>
      <Route exact path = "/Smilemakeoverandveneers" component = {Smilemakeoverandveneers}/>
      <Route exact path = "/Hollywoodsmile" component = {Hollywoodsmile}/>
      <Route exact path = "/Singleveneers" component = {Singleveneers}/>
      <Route exact path = "/Wholearchreplacement" component = {Wholearchreplacement}/>
      <Route exact path = "/Allon6" component = {Allon6}/>
      <Route exact path = "/Singleimplant" component = {Singleimplant}/>
      <Route exact path = "/Allon4" component = {Allon4}/>
      <Route exact path = "/Teethinaday" component = {Teethinaday}/>


     <Redirect to = "/" />
    
    </Switch>
    </>
  );
}

export default App;
