import React, { useRef, useState } from "react"; // agrega useState
import Modal from "../ocupacion/Modal"; // ajusta la ruta si es diferente

import estilos from "./Servicios.module.css";

import Ps from "../../assets/imagenes/Ps.jpeg";

import { motion, useInView } from "framer-motion";


export default function Servicios() {

  const [modalAbierto, setModalAbierto] = useState(false);

  const textoRef = useRef(null);
  const textoEnVista = useInView(textoRef, { once: true, margin: "0px 0px -100px 0px" });

  // Paso extra: ref para la imagen
  const imagenRef = useRef(null);
  const imagenEnVista = useInView(imagenRef, { once: true, margin: "0px 0px -100px 0px" });

  const nombreRef = useRef(null);
  const nombreEnVista = useInView(nombreRef, { once: true });

  const underlineVariants = {
  hidden: { backgroundSize: '0% 2px' },
  visible: {
    backgroundSize: '100% 2px',
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};


  return (
    <div>
      <section className={estilos.seccion}>
       

        <div className={estilos.contenedor}>
          <motion.div
            className={estilos.banner}
            ref={imagenRef}  // Asigno el ref a este div que contiene la imagen
            initial={{ opacity: 0, scale: 0.95 }}
            animate={imagenEnVista ? { opacity: 1, scale: 1 } : {}}  // Solo anima si está en vista
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <img src={Ps} alt="benner" />
          </motion.div>
          <div className={estilos.titulo}>
             <motion.h3
              ref={nombreRef}
              initial="hidden"
              animate={nombreEnVista ? 'visible' : 'hidden'}
              variants={underlineVariants}
              className={estilos.underlineEffect}
            >
              @psicotranspersonal
            </motion.h3>
            <h3>La semilla que floreció en comunidad</h3>
          </div>

          <motion.div
            className={estilos.texto}
            ref={textoRef}
            initial="hidden"
            animate={textoEnVista ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
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
              >
                {text}
              </motion.p>
            ))}


            
                    <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className={estilos.botonReservar}
          onClick={() => setModalAbierto(true)} // abre el modal
        >
          Reserva tu espacio ✨
        </motion.button>


          </motion.div>
          
        </div>

        <Modal
  isOpen={modalAbierto}
  onClose={() => setModalAbierto(false)}
  showTerms={true} // puedes ponerlo en false si no quieres términos
  requireTermsAcceptance={true}
/>


      </section>
    </div>
  );
}
