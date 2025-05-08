import React, { useEffect, useState } from "react";

import estilos from "./About.module.css";
import Home2 from "./Home2";
import Footer from "../footer/Footer";
import Terminos from "../terminos/Terminos";
import Cv from "./Cv";import Faqs from "./Faqs";






const About = () => {


  return (
    
    <div >
      <Home2 />
      
      
      <Terminos />
      <Faqs />
      <Footer />
    
 
      
    </div>
  

  );
}
export default About;