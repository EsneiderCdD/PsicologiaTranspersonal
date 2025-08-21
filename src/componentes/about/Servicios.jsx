import React, { useRef, useState, useEffect } from "react";
import Modal from "../ocupacion/Modal";
import estilos from "./Servicios.module.css";
import psicotranspersonal from "../../assets/imagenes/psicotranspersonal.webp";
import { motion, useInView } from "framer-motion";
import { psicotranspersonalData } from "../../ss/data";
import { acompañamientoTerapeuticoData } from "../../ss/data";
import { useLocation } from "react-router-dom";
import {
  FaSearch,
  FaUnlock,
  FaLeaf,
  FaHeart,
  FaBaby,
  FaUserShield,
  FaChild,
  FaLink,
  FaBrain,
  FaSadTear,
  FaCompass,
  FaSeedling,
  FaFeather,
  FaBalanceScale,
  FaHeadphones,
  FaHourglassHalf,
  FaWrench,
  FaLightbulb,
  FaHandshake
} from "react-icons/fa";

export default function Servicios() {
  const location = useLocation();

  const [modalAbierto, setModalAbierto] = useState(false);

  const [modalPricingAbierto, setModalPricingAbierto] = useState(false);

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

  useEffect(() => {
    if (location.hash === "#psicotranspersonal") {
      const t = setTimeout(() => {
        const el = document.getElementById("psicotranspersonal");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150); // pequeño delay para que monte el DOM
      return () => clearTimeout(t);
    }
  }, [location.hash]);



  return (
    <div>
      <section id="psicotranspersonal" className={estilos.seccion}>
        <div className={estilos.contenedor}>
          <div className={estilos.bannerLineLeft}></div>
          <div className={estilos.bannerLineRight}></div>
          <motion.div
            className={estilos.banner}
            ref={imagenRef}

          >
            <img src={psicotranspersonal} alt="banner2" />
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

            {Object.values(psicotranspersonalData).map((text, index) => (
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

              {/* BLOQUE ICONOS - NUEVOS TEMAS */}
              <div className={estilos.iconContainer}>

              </div>
              {/* Párrafo 1 */}
              <motion.p
                variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`${estilos.textoAnimado} ${estilos.preserveLines}`}
              >
                {acompañamientoTerapeuticoData.parrafo1}
              </motion.p>

              {/* Párrafo 2 */}
              <motion.p
                variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`${estilos.textoAnimado} ${estilos.preserveLines}`}
              >
                {acompañamientoTerapeuticoData.parrafo2}
              </motion.p>

              {/* 👇 BLOQUE DE ICONOS AQUÍ */}
              <div className={estilos.iconContainer}>
                <div className={estilos.iconRow}>
                  <div className={estilos.item} style={{ "--item-color": "#FFD6D6" }}>
                    <div className={estilos.icon}><FaSearch /></div>
                    <span className={estilos.iconText}>
                      Explorar las causas profundas de lo que hoy te bloquea o duele.
                    </span>
                  </div>

                  <div className={estilos.item} style={{ "--item-color": "#C6F1D6" }}>
                    <div className={estilos.icon}><FaUnlock /></div>
                    <span className={estilos.iconText}>
                      Liberar creencias y patrones heredados que ya no sirven a tu vida.
                    </span>
                  </div>
                

                
                  <div className={estilos.item} style={{ "--item-color": "#FFF5BA" }}>
                    <div className={estilos.icon}><FaLeaf /></div>
                    <span className={estilos.iconText}>
                      Integrar experiencias pasadas para vivir en mayor paz y plenitud.
                    </span>
                  </div>

                  <div className={estilos.item} style={{ "--item-color": "#D0E8F2" }}>
                    <div className={estilos.icon}><FaHeart /></div>
                    <span className={estilos.iconText}>
                      Despertar tu conexión interior y tu confianza en ti misma.
                    </span>
                  </div>
                </div>
                <motion.p className={`${estilos.textoAnimado} ${estilos.preserveLines}`}>
                  {acompañamientoTerapeuticoData.parrafo3}
                </motion.p>
              </div>



              {/* 🌿 Temas que puedes trabajar en este espacio: */}
              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`${estilos.textoAnimado} ${estilos.preserveLines}`}
              >
                🌿 Temas que puedes trabajar en este espacio:
              </motion.p>

              <div className={estilos.iconContainer}>
                <div className={estilos.iconRow}>
                  <div className={estilos.item} style={{ "--item-color": "#FFD6D6" }}>
                    <div className={estilos.icon}><FaBaby /></div>
                    <span className={estilos.iconText}>
                      Heridas de la infancia y su impacto en tu vida actual.
                    </span>
                  </div>

                  <div className={estilos.item} style={{ "--item-color": "#FEE8C6" }}>
                    <div className={estilos.icon}><FaUserShield /></div>
                    <span className={estilos.iconText}>
                      Autoestima y autoconfianza para elegirte y priorizarte.
                    </span>
                  </div>

                 <div className={estilos.item} style={{ "--item-color": "#F0E8FF" }}>
                    <div className={estilos.icon}><FaBalanceScale /></div>
                    <span className={estilos.iconText}>
                      Equilibrio entre energía femenina y masculina.
                    </span>
                  </div>

                  <div className={estilos.item} style={{ "--item-color": "#D0E8F2" }}>
                    <div className={estilos.icon}><FaLink /></div>
                    <span className={estilos.iconText}>
                      Dependencia emocional y vínculos poco saludables.
                    </span>
                  </div>
                </div>

                <div className={estilos.iconRow}>
                  <div className={estilos.item} style={{ "--item-color": "#C6F1D6" }}>
                    <div className={estilos.icon}><FaBrain /></div>
                    <span className={estilos.iconText}>
                      Manejo de la ansiedad y estrés desde la conexión interior.
                    </span>
                  </div>

                  <div className={estilos.item} style={{ "--item-color": "#FFD6E0" }}>
                    <div className={estilos.icon}><FaSadTear /></div>
                    <span className={estilos.iconText}>
                      Pérdida, duelos y cierres de ciclo.
                    </span>
                  </div>

                  <div className={estilos.item} style={{ "--item-color": "#E8F2FF" }}>
                    <div className={estilos.icon}><FaCompass /></div>
                    <span className={estilos.iconText}>
                      Conexión con tu propósito y sentido de vida.
                    </span>
                  </div>

                  <div className={estilos.item} style={{ "--item-color": "#E8FFF0" }}>
                    <div className={estilos.icon}><FaSeedling /></div>
                    <span className={estilos.iconText}>
                      Crecimiento espiritual desde tu propia visión de la fe.
                    </span>
                  </div>
                </div>

                
              </div>
              <br />

              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`${estilos.textoAnimado} ${estilos.preserveLines}`}
              >
                💫 Qué puedes esperar de este proceso:
              </motion.p>

              {/* BLOQUE DE ICONOS REPETIDO */}
              <div className={estilos.iconContainer}>
                <div className={estilos.iconRow}>
                

                  <div className={estilos.item} style={{ "--item-color": "#C6F1D6" }}>
                    <div className={estilos.icon}><FaHourglassHalf /></div>
                    <span className={estilos.iconText}>
                      Un acompañamiento adaptado a tus tiempos y necesidades.
                    </span>
                  </div>

                  <div className={estilos.item} style={{ "--item-color": "#FFF5BA" }}>
                    <div className={estilos.icon}><FaWrench /></div>
                    <span className={estilos.iconText}>
                      Herramientas prácticas para aplicar en tu vida diaria.
                    </span>
                  </div>

                  <div className={estilos.item} style={{ "--item-color": "#D0E8F2" }}>
                    <div className={estilos.icon}><FaLightbulb /></div>
                    <span className={estilos.iconText}>
                      Mayor claridad, calma y empoderamiento para tomar decisiones.
                    </span>
                  </div>

                  <div className={estilos.item} style={{ "--item-color": "#E8FFF0" }}>
                    <div className={estilos.icon}><FaHandshake /></div>
                    <span className={estilos.iconText}>
                      Una conexión más auténtica contigo misma y con la vida.
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Botón principal animado */}
            <motion.button
              className={estilos.boton}
              onClick={() => setModalPricingAbierto(true)}
              initial={{ boxShadow: "none", backgroundColor: "#321033" }}
              animate={{
                boxShadow: "0 0 20px #6b21a8, 0 0 40px #ca66eb66",
                backgroundColor: "#800089",
                transition: {
                  delay: 1,
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                backgroundColor: "#6b21a8",
                boxShadow: "0 0 25px #6b21a8, 0 0 50px #ca66ebaa",
                transition: { duration: 1.5 },
              }}
            >
              Reserva tu espacio
            </motion.button>
          </motion.div>
        </div>

        {modalPricingAbierto && (
          <Modal
            isOpen={modalPricingAbierto}
            onClose={() => setModalPricingAbierto(false)}
            showTerms={true}
            requireTermsAcceptance={true}
            confirmText="Agendar ahora"
          />
        )}
      </section>
    </div>
  );
}
