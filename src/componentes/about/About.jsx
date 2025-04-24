import React, { useEffect, useState } from "react";
import Img6 from "../../assets/imagenes/Img6.jpeg";
import estilos from "./About.module.css";
import { FiMessageCircle, FiUsers, FiCalendar } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiUser, FiCompass } from "react-icons/fi";



const About = () => {
  const [experiencia, setExperiencia] = useState(0);
  const [sesiones, setSesiones] = useState(0);
  const [pacientes, setPacientes] = useState(0);
  const [seguidores, setSeguidores] = useState(0);
  const [mostrarSobreMi, setMostrarSobreMi] = useState(true);


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
  const alternarTexto = () => {
    setMostrarSobreMi((prev) => !prev);
  };
  

  return (
    <div className={estilos.aboutPage}>
      <div className={estilos.heroSection}>
        <h1>Conoce sobre nuestra terapeuta</h1>
      </div>

      <div className={estilos.fotoPerfil}>
        <img src={Img6} alt="Susana Santamaría" />
        <h2>Susana Santamaría</h2>
        <h3>Psicóloga Especialista en Bienestar Emocional y Desarrollo Personal</h3>
      </div>

      <div className={estilos.hojaContenido}>
  <div className={estilos.textoInfo}>
    {mostrarSobreMi ? (
      <>
        <p>
          Soy psicóloga con amplia experiencia en salud mental, bienestar emocional y desarrollo del potencial humano. Mi enfoque está basado en la psicología transpersonal, un modelo terapéutico que integra la mente, el cuerpo y la dimensión espiritual para generar procesos de transformación profunda. Creo firmemente en la capacidad del ser humano para sanar, crecer y encontrar un equilibrio entre sus emociones, pensamientos, realidad y propósito de vida.
        </p>
        <p>
          Además de mi formación en psicología clínica, me he especializado en terapia transpersonal y terapia enfocada a los ciclos y necesidades femeninas, lo que me ha permitido profundizar en los procesos de sanación de la mujer, experiencias de vida difíciles originadas en la infancia y cambios de vida importantes en el ciclo vital humano.
        </p>
        <p>
          Entender el impacto de tus vivencias y trabajarlas desde un enfoque terapéutico adecuado puede marcar la diferencia en la manera en que enfrentas la vida y construyes tus relaciones, especialmente la relación contigo misma.
        </p>
      </>
    ) : (
      <>
        <p>
          Mi enfoque terapéutico está basado en la Psicología Transpersonal, una corriente que entiende al ser humano como una totalidad: cuerpo, mente, emociones y espíritu. No solo trabajo con lo que piensas o sientes, sino con el significado profundo de tus experiencias.
        </p>
        <p>
          Utilizo herramientas como la meditación guiada, el trabajo con símbolos, respiración consciente y técnicas narrativas para ayudarte a conectar con tu sabiduría interior, sanar heridas emocionales profundas y encontrar sentido en momentos de crisis.
        </p>
        <p>
          Este enfoque es ideal para quienes sienten que hay algo más allá de lo que se ve, que buscan transformación real y están listos para iniciar un camino hacia su autenticidad y propósito.
        </p>
      </>
    )}
  </div>

  <button onClick={alternarTexto} className={estilos.botonAlternar}>
    {mostrarSobreMi ? (
      <>
        <FiCompass className={estilos.iconoBoton} /> Sobre Mi Enfoque
      </>
    ) : (
      <>
        <FiUser className={estilos.iconoBoton} /> Sobre Mí
      </>
    )}
  </button>
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
      <h3 className={estilos.valor}>{seguidores >= 1000 ? `${Math.round(seguidores / 1000)}K+` : seguidores}</h3>
      <p className={estilos.descripcion}>Seguidores en Instagram</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default About;
