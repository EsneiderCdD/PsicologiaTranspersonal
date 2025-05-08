import React, { useEffect, useState } from "react";
import Img6 from "../../assets/imagenes/Img6.jpeg";
import estilos from "./Cv.module.css";
import { FiMessageCircle, FiUsers, FiCalendar, FiUser, FiCompass } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Cv = () => {
  const [experiencia, setExperiencia] = useState(0);
  const [sesiones, setSesiones] = useState(0);
  const [pacientes, setPacientes] = useState(0);
  const [seguidores, setSeguidores] = useState(0);
  const [mostrarSobreMi, setMostrarSobreMi] = useState(true);

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

  const alternarTexto = () => setMostrarSobreMi((prev) => !prev);

  

  return (
    <div className={estilos.aboutPage}>
      <div className={estilos.heroSection}>
        <h1>Conoce sobre nuestra terapeuta</h1>
      </div>

      <div className={estilos.hojaContenido}>
        <div className={estilos.contenedorInfo}>
          <div className={estilos.textoColumna}>
            <h2>Susana Santamaría</h2>
            <h3>Psicóloga Especialista en Bienestar Emocional y Desarrollo Personal</h3>
            <div className={estilos.textoInfo}>
              {mostrarSobreMi ? (
                <>
                  <p>
                    Soy psicóloga con amplia experiencia en salud mental, bienestar emocional y desarrollo del potencial humano. Mi enfoque está basado en la psicología transpersonal, un modelo terapéutico que integra la mente, el cuerpo y la dimensión espiritual para generar procesos de transformación profunda.
                  </p>
                  <p>
                    Además de mi formación en psicología clínica, me he especializado en terapia transpersonal y terapia enfocada a los ciclos y necesidades femeninas, lo que me ha permitido profundizar en los procesos de sanación de la mujer.
                  </p>
                  <p>
                    Entender el impacto de tus vivencias y trabajarlas desde un enfoque terapéutico adecuado puede marcar la diferencia en cómo enfrentas la vida y construyes tus relaciones, especialmente contigo misma.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Mi enfoque terapéutico está basado en la Psicología Transpersonal, una corriente que entiende al ser humano como una totalidad: cuerpo, mente, emociones y espíritu.
                  </p>
                  <p>
                    Utilizo herramientas como la meditación guiada, el trabajo con símbolos, respiración consciente y técnicas narrativas para ayudarte a conectar con tu sabiduría interior.
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

          {/* Imagen visible solo en modo "Sobre Mí" */}
          {mostrarSobreMi && (
            <div className={estilos.imagenColumna}>
              <img src={Img6} alt="Susana Santamaría" />
            </div>
          )}
        </div>
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
};

export default Cv;
