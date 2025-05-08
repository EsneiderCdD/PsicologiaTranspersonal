import estilos from "./Home2.module.css";
import SusanaS from "../../assets/imagenes/SusanaS.png";
import React, { useEffect, useState } from "react";
import { FiMessageCircle, FiUsers, FiCalendar, FiUser, FiCompass } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export default function Home2() {
    const [experiencia, setExperiencia] = useState(0);
    const [sesiones, setSesiones] = useState(0);
    const [pacientes, setPacientes] = useState(0);
    const [seguidores, setSeguidores] = useState(0);

    // Animaciones estadísticas
    useEffect(() => {
      const intervalos = [
        setInterval(() => setExperiencia((prev) => (prev < 4 ? prev + 1 : prev)), 500),
        setInterval(() => setSesiones((prev) => (prev < 500 ? prev + 50 : prev)), 100),
        setInterval(() => setPacientes((prev) => (prev < 200 ? prev + 10 : prev)), 200),
        setInterval(() => setSeguidores((prev) => (prev < 190000 ? prev + 10000 : prev)), 200)
      ];
  
      return () => intervalos.forEach(clearInterval);
    }, []);
 
  
  return (
    <div>
      <div className={estilos.layout}>
      
        <div className={`${estilos.imagen} ${estilos.imagenDesktop}`}>
          <img src={SusanaS} alt="imagen decorativa" />
        </div>
        <div className={estilos.contenedor}>
          <h1 className={estilos.tituloprincipal}>
            Susana Santamaria
          </h1>
          <h2>Psicologa Profesional Especializada en Terapia Transpersonal y acompañamiento femenino</h2>
          <p className={estilos.descripcion}>
            Soy psicóloga con amplia experiencia en salud mental, bienestar emocional y desarrollo del potencial humano. Mi enfoque está basado en la psicología transpersonal, un modelo terapéutico que integra la mente, el cuerpo y la dimensión espiritual para generar procesos de transformación profunda.
          </p>
      
          <div className={`${estilos.imagen} ${estilos.imagenMobile}`}>
            <img src={SusanaS} alt="imagen decorativa" />
          </div>
      
        </div>
        <div className={estilos.descripcion2}>
          <p>
            Además de mi formación en psicología clínica, me he especializado en terapia transpersonal y terapia enfocada a los ciclos y necesidades femeninas, lo que me ha permitido profundizar en los procesos de sanación de la mujer.
          </p>
          <p>
            Entender el impacto de tus vivencias y trabajarlas desde un enfoque terapéutico adecuado puede marcar la diferencia en cómo enfrentas la vida y construyes tus relaciones, especialmente contigo misma.
          </p>
        </div>
        <button>Sobre Mi enfoque</button>
      
      </div>
        <div className={estilos.seccionExperiencia}>
        <h2 className={estilos.tituloImpacto}>Impacto</h2>
        <div className={estilos.cardsEstadisticas}>
          <div className={estilos.card}>
            <div className={`${estilos.iconoFondo} ${estilos.morado}`}>
              <FiCalendar />
            </div>
            <h3 className={estilos.valor}>+{experiencia}</h3>
            <p className={estilos.descripcion}>Años de experiencia</p>
          </div>
          <div className={estilos.card}>
            <div className={`${estilos.iconoFondo} ${estilos.rosa}`}>
              <FiMessageCircle />
            </div>
            <h3 className={estilos.valor}>+{sesiones}</h3>
            <p className={estilos.descripcion}>Sesiones realizadas</p>
          </div>
          <div className={estilos.card}>
            <div className={`${estilos.iconoFondo} ${estilos.durazno}`}>
              <FiUsers />
            </div>
            <h3 className={estilos.valor}>+{pacientes}</h3>
            <p className={estilos.descripcion}>Personas acompañadas</p>
          </div>
          <div className={estilos.card}>
            <div className={`${estilos.iconoFondo} ${estilos.azul}`}>
              <FaInstagram />
            </div>
            <h3 className={estilos.valor}>
              {seguidores >= 1000 ? `${Math.round(seguidores / 1000)}K+` : seguidores}
            </h3>
            <p className={estilos.descripcion}>Seguidores en Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
}
