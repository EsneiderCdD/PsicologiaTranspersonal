import React, { useEffect, useState } from "react";
import estilos from "./Home2.module.css";
import SusanaS from "../../assets/imagenes/SusanaS.png";
import { FiCalendar, FiMessageCircle, FiUsers } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export default function Home2() {
  const [experiencia, setExperiencia] = useState(0);
  const [sesiones, setSesiones] = useState(0);
  const [pacientes, setPacientes] = useState(0);
  const [seguidores, setSeguidores] = useState(0);

  // Animaciones estadísticas
  useEffect(() => {
    const intervalos = [
      setInterval(() => setExperiencia(prev => (prev < 4 ? prev + 1 : prev)), 500),
      setInterval(() => setSesiones(prev => (prev < 500 ? prev + 50 : prev)), 100),
      setInterval(() => setPacientes(prev => (prev < 200 ? prev + 10 : prev)), 200),
      setInterval(() => setSeguidores(prev => (prev < 190000 ? prev + 10000 : prev)), 200),
    ];
    return () => intervalos.forEach(clearInterval);
  }, []);

  return (
    <div className={estilos.layout}>
      {/* Columna izquierda: imagen + métricas compactas */}
      <div className={estilos.columnaIzquierda}>
        <div className={`${estilos.imagen} ${estilos.imagenDesktop}`}>
          <img src={SusanaS} alt="Susana Santamaria" />
        </div>
        <div className={estilos.cardsPequenas}>
          <div className={estilos.cardPequena}>
            <FiCalendar className={estilos.iconoPequeno} />
            <span>+{experiencia} años</span>
          </div>
          <div className={estilos.cardPequena}>
            <FiMessageCircle className={estilos.iconoPequeno} />
            <span>+{sesiones} sesiones</span>
          </div>
          <div className={estilos.cardPequena}>
            <FiUsers className={estilos.iconoPequeno} />
            <span>+{pacientes} personas</span>
          </div>
          <div className={estilos.cardPequena}>
            <FaInstagram className={estilos.iconoPequeno} />
            <span>
              {seguidores >= 1000 ? `${Math.round(seguidores / 1000)}K+` : seguidores} IG
            </span>
          </div>
        </div>
      </div>

      {/* Columna derecha: texto */}
      <div className={estilos.contenedor}>
        <h1 className={estilos.tituloprincipal}>Susana Santamaria</h1>
        <h2>Psicóloga Profesional en Terapia Transpersonal y Acompañamiento Femenino</h2>
        <p className={estilos.descripcion}>
          Soy psicóloga con amplia experiencia en salud mental, bienestar emocional y desarrollo del potencial humano.
          Mi enfoque está basado en la psicología transpersonal, un modelo terapéutico que integra la mente, el cuerpo
          y la dimensión espiritual para generar procesos de transformación profunda.
        </p>
        <div className={estilos.descripcionSecundaria}>
          <p>
            Además de mi formación en psicología clínica, me he especializado en terapia transpersonal y terapia
            enfocada a los ciclos y necesidades femeninas, lo que me ha permitido profundizar en los procesos de
            sanación de la mujer.
          </p>
          <p>
            Entender el impacto de tus vivencias y trabajarlas desde un enfoque terapéutico adecuado puede marcar la
            diferencia en cómo enfrentas la vida y construyes tus relaciones, especialmente contigo misma.
          </p>
        </div>

        {/* Imagen móvil dentro de la columna de texto */}
        <div className={`${estilos.imagen} ${estilos.imagenMobile}`}>
          <img src={SusanaS} alt="Susana Santamaria" />
        </div>
      </div>
    </div>
  );
}
