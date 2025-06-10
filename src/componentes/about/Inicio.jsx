import React, { useRef } from "react";
import { FiCalendar, FiMessageCircle, FiUsers } from "react-icons/fi";
import { FaInstagram, FaUserGraduate } from "react-icons/fa";
import { GiMoon, GiLotus } from "react-icons/gi";
import { motion, useInView } from "framer-motion";
import { HiUsers } from "react-icons/hi";

import estilos from "./Inicio.module.css";
import Img4 from "../../assets/imagenes/Img4.jpeg";
import banner from "../../assets/imagenes/banner.jpeg";

export default function Inicio() {
  const nombreRef = useRef(null);
  const profesionRef = useRef(null);
  const texto1Ref = useRef(null);
  const texto2Ref = useRef(null);
  const texto3Ref = useRef(null);
  const texto4Ref = useRef(null);
  const iconosRef = useRef(null);
  const contador1Ref = useRef(null);
  const contador2Ref = useRef(null);

  const nombreEnVista = useInView(nombreRef, { once: true, margin: "-100px" });
  const profesionEnVista = useInView(profesionRef, { once: true });
  const texto1EnVista = useInView(texto1Ref, { once: true });
  const texto2EnVista = useInView(texto2Ref, { once: true });
  const texto3EnVista = useInView(texto3Ref, { once: true });
  const texto4EnVista = useInView(texto4Ref, { once: true });
  const iconosEnVista = useInView(iconosRef, { once: true });
  const contador1EnVista = useInView(contador1Ref, { once: true });
  const contador2EnVista = useInView(contador2Ref, { once: true });

  const underlineVariants = {
    hidden: { backgroundSize: "0% 2px" },
    visible: {
      backgroundSize: "100% 2px",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div>
      <section id="home" className={estilos.seccion}>
        <div className={estilos.contenedor}>
          <div className={estilos.banner}>
            <img src={banner} alt="banner" />
            <div className={estilos.imagen}>
              <img src={Img4} alt="imagen" />
            </div>
          </div>

          <div className={estilos.texto}>
            <motion.div
              className={estilos.verticalLineLeft}
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.div
              className={estilos.verticalLineRight}
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            <div className={estilos.titulo}>
              <motion.h3
                ref={nombreRef}
                initial="hidden"
                animate={nombreEnVista ? "visible" : "hidden"}
                variants={underlineVariants}
                className={estilos.underlineEffect}
              >
                Susana Santamaria
              </motion.h3>
              <h3 ref={profesionRef}>Terapeuta Transpersonal</h3>
            </div>

            <div>
              <motion.p
                ref={texto1Ref}
                initial={{ opacity: 0, y: 20 }}
                animate={texto1EnVista ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Soy psicóloga con amplia experiencia en salud mental, bienestar emocional y desarrollo del potencial humano.
                Mi enfoque está basado en la psicología transpersonal, un modelo terapéutico que integra la mente, el cuerpo
                y la dimensión espiritual para generar procesos de transformación profunda.
              </motion.p>

              <motion.div
                ref={contador1Ref}
                initial={{ opacity: 0, y: 20 }}
                animate={contador1EnVista ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
              >
                <div className={estilos.item}>
                  <div className={estilos.icon} style={{ backgroundColor: '#FFD6D6' }}>
                    <FiCalendar />
                  </div>
                  <span>+4 Años de experiencia </span>
                </div>
                <div className={estilos.item}>
                  <div className={estilos.icon} style={{ backgroundColor: '#C6F1D6' }}>
                    <FiMessageCircle />
                  </div>
                  <span>+500 Sesiones realizadas</span>
                </div>
              </motion.div>

              <motion.p
                ref={texto2Ref}
                initial={{ opacity: 0, y: 20 }}
                animate={texto2EnVista ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              >
                @Psicotranspersonal es un proyecto profesional, consciente y profundamente comprometido con el bienestar
                integral del ser humano. Hoy, Psicotranspersonal también es un espacio digital vivo: he cultivado una comunidad
                que crece día a día, no solo en número, sino en profundidad.
              </motion.p>

              <motion.div
                ref={contador2Ref}
                initial={{ opacity: 0, y: 20 }}
                animate={contador2EnVista ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
              >
                <div className={estilos.item}>
                  <div className={estilos.icon} style={{ backgroundColor: '#FFF5BA' }}>
                    <FiUsers />
                  </div>
                  <span>+200 Personas atendidas </span>
                </div>
                <div className={estilos.item}>
                  <div className={estilos.icon} style={{ backgroundColor: '#D0E8F2' }}>
                    <FaInstagram />
                  </div>
                  <span>+195K Seguidores en Instagram</span>
                </div>
              </motion.div>

                            <motion.p
                ref={texto3Ref}
                initial={{ opacity: 0, y: 20 }}
                animate={texto3EnVista ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                Además de mi formación en psicología clínica, me he especializado en terapia transpersonal y terapia
                enfocada a los ciclos y necesidades femeninas, lo que me ha permitido profundizar en los procesos de
                sanación de la mujer.
              </motion.p>

              {/* Tercer bloque de íconos sin contador */}
              <motion.div
                ref={iconosRef}
                initial={{ opacity: 0, y: 20 }}
                animate={iconosEnVista ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
              >
                <div>
                  <div className={estilos.item}>
                    <div className={estilos.icon} style={{ backgroundColor: '#F3D1F4' }}>
                      <GiMoon />
                    </div>
                    <span>Certificada en sanación femenina</span>
                  </div>
                  <div className={estilos.item}>
                    <div className={estilos.icon} style={{ backgroundColor: '#E5E0FF' }}>
                      <FaUserGraduate />
                    </div>
                    <span>Profesional en Psicología</span>
                  </div>
                </div>
                <div>
                  <div className={estilos.item}>
                    <div className={estilos.icon} style={{ backgroundColor: '#C5FAD5' }}>
                      <GiLotus />
                    </div>
                    <span>Diplomada en Psicología Transpersonal</span>
                  </div>
                  <div className={estilos.item}>
                    <div className={estilos.icon} style={{ backgroundColor: '#FFE4D6' }}>
                      <HiUsers />
                    </div>
                    <span>Guía en círculos de mujeres</span>
                  </div>
                </div>
              </motion.div>

              <motion.p
                ref={texto4Ref}
                initial={{ opacity: 0, y: 20 }}
                animate={texto4EnVista ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                Entender el impacto de tus vivencias y trabajarlas desde un enfoque terapéutico adecuado puede marcar la
                diferencia en cómo enfrentas la vida y construyes tus relaciones, especialmente contigo misma.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


