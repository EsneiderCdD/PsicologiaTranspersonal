import React, { useState, useEffect, useRef } from "react";
import { FiCalendar, FiMessageCircle, FiUsers } from "react-icons/fi";
import { FaInstagram, FaUserGraduate } from "react-icons/fa";
import { GiMoon, GiLotus } from "react-icons/gi";
import { motion, useInView } from "framer-motion";
import { HiUsers } from "react-icons/hi";

import estilos from "./Inicio.module.css";
import foto from "../../assets/imagenes/foto.webp";
import banner from "../../assets/imagenes/banner.jpeg";

export default function Inicio() {
  const [experiencia, setExperiencia] = useState(0);
  const [sesiones, setSesiones] = useState(0);
  const [seguidores, setSeguidores] = useState(0);
  const [pacientes, setPacientes] = useState(0);

  // Refs y estados para useInView
  const textoRef = useRef(null);
  const textoEnVista = useInView(textoRef, { once: true, margin: "0px 0px -100px 0px" });

  const contadorRef = useRef(null);
  const contadorEnVista = useInView(contadorRef, { once: true, margin: "0px 0px -100px 0px" });

  const nombreRef = useRef(null);
  const nombreEnVista = useInView(nombreRef, { once: true, margin: "-100px" });

  const profesionRef = useRef(null);
  const profesionEnVista = useInView(profesionRef, { once: true, margin: "0px 0px -100px 0px" });

  // Nuevas refs y estados que faltaban
  const texto1Ref = useRef(null);
  const texto1EnVista = useInView(texto1Ref, { once: true, margin: "0px 0px -100px 0px" });


  const texto2Ref = useRef(null);
  const texto2EnVista = useInView(texto2Ref, { once: true, margin: "0px 0px -100px 0px" });


  const texto3Ref = useRef(null);
  const texto3EnVista = useInView(texto3Ref, { once: true, margin: "0px 0px -100px 0px" });

  const iconosRef = useRef(null);
  const iconosEnVista = useInView(iconosRef, { once: true, margin: "0px 0px -100px 0px" });

  const texto4Ref = useRef(null);
  const texto4EnVista = useInView(texto4Ref, { once: true, margin: "0px 0px -100px 0px" });

  // Variantes de animación
  const underlineVariants = {
    hidden: { backgroundSize: "0% 2px" },
    visible: {
      backgroundSize: "100% 2px",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
  if (iconosEnVista) {
    const duracionAnimacion = 2000;
    const pasos = 60;
    const intervalo = duracionAnimacion / pasos;

    let paso = 0;
    const valorFinalExp = 4;
    const valorFinalSes = 500;
    const incrementoExp = valorFinalExp / pasos;
    const incrementoSes = valorFinalSes / pasos;

    let valorExp = 0;
    let valorSes = 0;

    const intervalId = setInterval(() => {
      paso++;
      valorExp += incrementoExp;
      valorSes += incrementoSes;

      setExperiencia(Math.min(Math.round(valorExp), valorFinalExp));
      setSesiones(Math.min(Math.round(valorSes), valorFinalSes));

      if (paso >= pasos) {
        clearInterval(intervalId);
        setExperiencia(valorFinalExp);
        setSesiones(valorFinalSes);
      }
    }, intervalo);
  }
}, [iconosEnVista]);


  useEffect(() => {
  if (iconosEnVista) {
    const duracionAnimacion = 2000;
    const pasos = 60;
    const intervalo = duracionAnimacion / pasos;

    let paso = 0;
    const valorFinalPac = 200;
    const valorFinalSeg = 190000;
    const incrementoPac = valorFinalPac / pasos;
    const incrementoSeg = valorFinalSeg / pasos;

    let valorPac = 0;
    let valorSeg = 0;

    const intervalId = setInterval(() => {
      paso++;
      valorPac += incrementoPac;
      valorSeg += incrementoSeg;

      setPacientes(Math.min(Math.round(valorPac), valorFinalPac));
      setSeguidores(Math.min(Math.round(valorSeg), valorFinalSeg));

      if (paso >= pasos) {
        clearInterval(intervalId);
        setPacientes(valorFinalPac);
        setSeguidores(valorFinalSeg);
      }
    }, intervalo);
  }
}, [iconosEnVista]);



  return (
    <div >
      <section id="home" className={estilos.seccion}>
        <div className={estilos.contenedor}>
          <div className={estilos.banner}>
            <img src={banner} alt="banner" />
            <div className={estilos.imagen}>
              <img src={foto} alt="imagen" />
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
              <br />
            </div>

            <div>
              {/* Párrafo 1 */}
              <motion.p
                ref={texto1Ref}
                initial={{ opacity: 0, y: 20 }}
                animate={texto1EnVista ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Soy psicóloga con amplia experiencia en salud mental, bienestar emocional y desarrollo del potencial humano.
                Mi enfoque está basado en la psicología transpersonal, un modelo terapéutico que integra la mente, el cuerpo
                y la dimensión espiritual para generar procesos de transformación profunda.
              </motion.p>
              <br />


              {/* Párrafo 2 */}
              <motion.p
                ref={texto2Ref}
                initial={{ opacity: 0, y: 20 }}
                animate={texto2EnVista ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                @Psicotranspersonal es un proyecto profesional, consciente y profundamente comprometido con el bienestar integral del ser humano. Hoy, Psicotranspersonal también es un espacio digital vivo: he cultivado una comunidad que crece día a día, no solo en número, sino en profundidad.
              </motion.p>
              <br />

              {/* Párrafo 3 */}
              <motion.p
                ref={texto3Ref}
                initial={{ opacity: 0, y: 20 }}
                animate={texto3EnVista ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Además de mi formación en psicología clínica, me he especializado en terapia transpersonal y terapia
                enfocada a los ciclos y necesidades femeninas, lo que me ha permitido profundizar en los procesos de
                sanación de la mujer. Este trabajo, especialmente en espacios grupales, ha cultivado en mí habilidades como la comunicación asertiva, la coordinación empática, la gestión de dinámicas colectivas y la capacidad de sostener procesos compartidos con escucha activa y liderazgo sensible.
              </motion.p>

              <br />


              {/* BLOQUE UNIFICADO: contadores + íconos */}
              <motion.div
                ref={iconosRef}
                initial={{ opacity: 0, y: 20 }}
                animate={iconosEnVista ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={estilos.iconGrid}
              >
                <div className={estilos.item}>
                  <div className={estilos.icon} style={{ backgroundColor: '#FFD6D6' }}>
                    <FiCalendar />
                  </div>
                  <span>+{experiencia} Años de experiencia </span>
                </div>

                <div className={estilos.item}>
                  <div className={estilos.icon} style={{ backgroundColor: '#C6F1D6' }}>
                    <FiMessageCircle />
                  </div>
                  <span>+{sesiones} Sesiones realizadas</span>
                </div>

                <div className={estilos.item}>
                  <div className={estilos.icon} style={{ backgroundColor: '#FFF5BA' }}>
                    <FiUsers />
                  </div>
                  <span>+{pacientes} Personas atendidas </span>
                </div>

                <div className={estilos.item}>
                  <div className={estilos.icon} style={{ backgroundColor: '#D0E8F2' }}>
                    <FaInstagram />
                  </div>
                  <span>
                    +{seguidores >= 1000 ? `${Math.round(seguidores / 1000)}K` : seguidores} Seguidores en Instagram
                  </span>
                </div>

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
              </motion.div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
