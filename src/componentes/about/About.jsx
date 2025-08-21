import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import ScrollSteps from "./ScrollSteps";
import Inicio from "./Inicio";
import { useConfigBotones } from "../../componentes/ui/botones/configBotones";

const About = () => {
  const botones = useConfigBotones().filter(b => b.label !== "Sobre mí");
  return (
    <div>
      <Inicio />
      <ScrollSteps />
      <Footer botones={botones} />
    </div>
  );
};

export default About;
