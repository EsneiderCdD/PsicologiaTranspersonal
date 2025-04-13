import React, { useEffect, useState } from "react";
import Img6 from "../../assets/imagenes/Img6.jpeg";
import estilos from "./About.module.css";  

const About = () => {
  const [experiencia, setExperiencia] = useState(0);
  const [sesiones, setSesiones] = useState(0);
  const [pacientes, setPacientes] = useState(0);
  const [seguidores, setSeguidores] = useState(0);

  useEffect(() => {
    const experienciaInterval = setInterval(() => {
      setExperiencia((prev) => (prev < 4 ? prev + 1 : prev));
      if (experiencia >= 4) clearInterval(experienciaInterval);
    }, 1000);

    const sesionesInterval = setInterval(() => {
      setSesiones((prev) => (prev < 500 ? prev + 50 : prev));
      if (sesiones >= 500) clearInterval(sesionesInterval);
    }, 100);

    const pacientesInterval = setInterval(() => {
      setPacientes((prev) => (prev < 200 ? prev + 10 : prev));
      if (pacientes >= 200) clearInterval(pacientesInterval);
    }, 200);

    const seguidoresInterval = setInterval(() => {
      setSeguidores((prev) => (prev < 190000 ? prev + 10000 : prev));
      if (seguidores >= 190000) clearInterval(seguidoresInterval);
    }, 200);

    return () => {
      clearInterval(experienciaInterval);
      clearInterval(sesionesInterval);
      clearInterval(pacientesInterval);
      clearInterval(seguidoresInterval);
    };
  }, []);

  return (
    <div className={estilos.contenedorHeroico}>
      <div className={estilos.envaseContenido}>
        <div className={estilos.contenidoHeroico}>
          <h1>Susana Santamaría</h1>
          <h2>Psicóloga Especialista en Bienestar Emocional y Desarrollo Personal</h2>
          <p>
            Soy psicóloga con amplia experiencia en salud mental, bienestar emocional y desarrollo del potencial humano. Mi enfoque está basado en la psicología transpersonal, un modelo terapéutico que integra la mente, el cuerpo y la dimensión espiritual para generar procesos de transformación profunda. Creo firmemente en la capacidad del ser humano para sanar, crecer y encontrar un equilibrio entre sus emociones, pensamientos y propósito de vida.
          </p>
          <p>
            Además de mi formación en psicología clínica, me he especializado en terapia transpersonal y manejo del trauma, lo que me ha permitido profundizar en los procesos de sanación de experiencias difíciles, especialmente aquellas que se originan en la infancia. Entender el impacto de estas vivencias y trabajarlas desde un enfoque terapéutico adecuado puede marcar la diferencia en la manera en que enfrentamos la vida y construimos nuestras relaciones.
          </p>
        </div>
        <img src={Img6} alt="Susana Santamaría" className={estilos.imagenHeroica} />
      </div>

      <div className={estilos.seccionExperiencia}>
        <div className={estilos.cardsEstadisticas}>
          <div className={estilos.card}>
            <h2>+<span className={estilos.numero}>{experiencia} años</span></h2>
            <p>Me he formado profesionalmente, especializado, tomado cursos, hasta la actualidad, siendo esta mi profesión y mi pasión.</p>
          </div>
          <div className={estilos.card}>
            <h3>+<span className={estilos.numero}>{sesiones}</span></h3>
            <p>Sesiones de terapia realizadas a lo largo de mi trayectoria, he atendido en más de 500 sesiones de terapia individual.</p>
          </div>
          <div className={estilos.card}>
            <h3>+<span className={estilos.numero}>{pacientes}</span></h3>
            <p>He ayudado a más de 200 pacientes en su camino de autoconocimiento y sanación.</p>
          </div>
          <div className={estilos.card}>
            <h3>+<span className={estilos.numero}>{seguidores}</span></h3>
            <p>Seguidores. Desde el 2021 inicia una comunidad que he construido de manera organizada y leal a mi servicio.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

  