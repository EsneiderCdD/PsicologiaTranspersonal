import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import ScrollSteps from "./ScrollSteps";
import Inicio from "./Inicio";
import { getConfigBotones } from "../../componentes/ui/botones/configBotones";

const About = () => {
  const location = useLocation();
  const botones = getConfigBotones().filter(b => b.label !== "Sobre mí");
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
      {/* 👇 aquí pasamos los botones al Footer */}
      <Footer botones={botones} />
    </div>
  );
};

export default About;
