import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home2 from "./Home2";
import Footer from "../footer/Footer";
import Terminos from "../terminos/Terminos";
import ScrollSteps from "./ScrollSteps";
import Servicios from "./Servicios";
import CirculoMujeres from "./CirculoMujeres";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Esperamos que el DOM esté listo para hacer scroll al elemento con el ID indicado
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Puedes ajustar el tiempo si es necesario
    }
  }, [location]);

return (
  <div>
    <Home2 />
    <Servicios />
    <CirculoMujeres />
    <ScrollSteps />
    <Terminos />



    <Footer />
  </div>
);

};

export default About;
