import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import ScrollSteps from "./ScrollSteps";

import Inicio from "./Inicio";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); 
    }
  }, [location]);

return (
  <div>
    <Inicio />
    <ScrollSteps />
    <Footer />
  </div>
);

};

export default About;
