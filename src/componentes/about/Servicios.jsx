import React, { useRef, useState } from "react";
import Modal from "../ocupacion/Modal";

import estilos from "./Servicios.module.css";
import Ps from "../../assets/imagenes/Ps.jpeg";

import { motion, useInView } from "framer-motion";

export default function Servicios() {
  const [modalAbierto, setModalAbierto] = useState(false);

  const textoRef = useRef(null);
  const textoEnVista = useInView(textoRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const imagenRef = useRef(null);
  const imagenEnVista = useInView(imagenRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const nombreRef = useRef(null);
  const nombreEnVista = useInView(nombreRef, { once: true });

  const underlineVariants = {
    hidden: { backgroundSize: "0% 2px" },
    visible: {
      backgroundSize: "100% 2px",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Texto nuevo con saltos de línea
  const textoAcomp = `El acompañamiento terapéutico transpersonal es un espacio seguro y profundo para sanar, conocerte y reconectar con tu esencia. A través de esta mirada, no solo atendemos lo que ocurre en tu mente o tus emociones, sino que integramos todas las dimensiones de tu ser: cuerpo, mente, emociones, alma y propósito.

En este proceso, te acompaño a:
- Explorar las causas profundas de lo que hoy te bloquea o duele.
- Liberar creencias y patrones heredados que ya no sirven a tu vida.
- Integrar experiencias pasadas para vivir en mayor paz y plenitud.
- Despertar tu conexión interior y tu confianza en ti misma.

El enfoque transpersonal combina herramientas de la psicología tradicional con técnicas de expansión de consciencia, como visualizaciones, meditación guiada, trabajo con la respiración, exploración de la niña interior, trabajo con símbolos y arquetipos, metáforas y analogías, y dinámicas creativas que facilitan la transformación.

🌿 Temas que puedes trabajar en este espacio:
- Heridas de la infancia y su impacto en tu vida actual.
- Autoestima y autoconfianza para elegirte y priorizarte.
- Sanar la niña interior y reconectar con tu espontaneidad y alegría.
- Dependencia emocional y vínculos poco saludables.
- Manejo de la ansiedad y estrés desde la conexión interior.
- Pérdida, duelos y cierres de ciclo.
- Conexión con tu propósito y sentido de vida.
- Crecimiento espiritual desde tu propia visión de la fe.
- Liberación de creencias limitantes y patrones repetitivos.
- Equilibrio entre energía femenina y masculina.

💫 Qué puedes esperar de este proceso:
- Escucha profunda y sin juicios.
- Un acompañamiento adaptado a tus tiempos y necesidades.
- Herramientas prácticas para aplicar en tu vida diaria.
- Mayor claridad, calma y empoderamiento para tomar decisiones.
- Una conexión más auténtica contigo misma y con la vida.`;

  return (
    <div>
      <section className={estilos.seccion}>
        <div className={estilos.contenedor}>
          <div className={estilos.bannerLineLeft}></div>
          <div className={estilos.bannerLineRight}></div>
          <motion.div
            className={estilos.banner}
            ref={imagenRef}
        
          >
            <img src={Ps} alt="banner" />
          </motion.div>

          <motion.div
            
            className={estilos.texto}
            ref={textoRef}
            initial="hidden"
            animate={textoEnVista ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            <div className={estilos.verticalLineLeft}></div>
            <div className={estilos.verticalLineRight}></div>
            <div className={estilos.titulo}>
              <motion.h3
                ref={nombreRef}
                initial="hidden"
                animate={nombreEnVista ? "visible" : "hidden"}
                variants={underlineVariants}
                className={estilos.underlineEffect}
              >
                @psicotranspersonal
              </motion.h3>
              <h4>La semilla que floreció en comunidad</h4>
            </div>

            {[
              "Psicotranspersonal nace de mi pasión por la profundidad, por el misterio, por los escritos que nutren la visión y la mirada, por mi deseo de compartir lo que habita dentro de mi corazón, se gesta hace 6 años en un anhelo de darle voz a procesos y vivencias que giran en torno a la sanación, la transformación humana y la evolución del ser.",
              "Nace y se desarrolla desde la coherencia interna, desde el deseo genuino de acompañar a otros en su despertar, en su transformación, en su reconexión con su verdad más esencial.",
              "Lo que comenzó como una búsqueda personal se transformó en un proyecto con propósito. Psicotranspersonal tomó forma como un espacio profesional y consciente, nacido del deseo genuino de acompañar procesos de transformación, de crear vínculos conscientes, de sostener espacios seguros, sagrados y humanos donde las personas pueden mirar adentro, sanar heridas, recordar quiénes son y conectar con su alma.",
              "Con el tiempo, la pasión se tradujo en formación, experiencia y una comunidad que crece desde la autenticidad. Cada palabra, sesión y creación digital refleja ese compromiso con el alma y la sanación. Desde ahí, nace también el impulso de crear espacios colectivos, como los círculos de mujeres, que dan continuidad a este viaje compartido.",
            ].map((text, index) => (
              <motion.p
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={estilos.textoAnimado}
              >
                {text}
              </motion.p>
            ))}

            {/* NUEVO BLOQUE */}
            <div className={estilos.nuevoBloque}>
              <motion.h4
              id="servicios"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={estilos.subtitulo}
                
              >
                Acompañamiento Terapéutico Transpersonal
              </motion.h4>
              <br />

              <motion.p
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`${estilos.textoAnimado} ${estilos.preserveLines}`}
              >
                {textoAcomp}
              </motion.p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={estilos.botonReservar}
              onClick={() => setModalAbierto(true)}
            >
              Reserva tu espacio ✨
            </motion.button>
          </motion.div>
        </div>

        <Modal
          isOpen={modalAbierto}
          onClose={() => setModalAbierto(false)}
          showTerms={true}
          requireTermsAcceptance={true}
        />
      </section>
    </div>
  );
}
