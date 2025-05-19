import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Testimonios.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

// Paso 1: Testimonios originales
const testimoniosBase = [
  {
    nombre: "Laura Martínez",
    usuario: "@laura.mtz",
    comentario: "Gracias a las sesiones pude reconectar conmigo misma. Fue un proceso muy amoroso.",
    imagen: "https://images.unsplash.com/photo-1616002411355-49593fd89721?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm90byUyMGRlJTIwbXVqZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    nombre: "Carlos Ríos",
    usuario: "@carlos.rios",
    comentario: "Me sentí escuchado y contenido desde el primer momento. Recomiendo esta experiencia totalmente.",
    imagen: "https://img.fotocommunity.com/hombre-comun-y-silvestre-1200f50b-4f3d-45a3-80f1-8b80b05cb51f.jpg?height=1080"
  },
  {
    nombre: "Valeria Gómez",
    usuario: "@val.gomez",
    comentario: "Las sesiones grupales me ayudaron a entender que no estoy sola. Maravilloso espacio.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMC5BGG7_DRcn35ArjT_jdbQzlAB_s3vKEgQ&s"
  },
  {
    nombre: "Andrés López",
    usuario: "@andres.lo",
    comentario: "Una mirada profesional pero cercana. Las herramientas que me brindaron cambiaron mi día a día.",
    imagen: "https://images.unsplash.com/photo-1599192111704-6cab503473ff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tYnJlJTIwbGF0aW5vfGVufDB8fDB8fHww"
  },
  {
    nombre: "Sofía Herrera",
    usuario: "@sofi.herrera",
    comentario: "Aprendí a poner límites y a valorarme más. Inmensamente agradecida.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq94sJz7nCTqM8ijuTMH5Gn4cdSaTSyxQQ7g&s"
  },
  {
    nombre: "Mariano Díaz",
    usuario: "@marianodiaz",
    comentario: "El acompañamiento emocional fue clave para atravesar un momento difícil. Excelente profesional.",
    imagen: "https://pbs.twimg.com/profile_images/1558682051/IMG00004-20110710-1406_400x400.jpg"
  }
];

// Paso 2: Copiamos y modificamos ligeramente los anteriores
const testimoniosExtras = Array.from({ length: 6 }, (_, i) => ({
  ...testimoniosBase[i % testimoniosBase.length],
  nombre: testimoniosBase[i % testimoniosBase.length].nombre + " (extra)",
  usuario: testimoniosBase[i % testimoniosBase.length].usuario + ".2"
}));

// Paso 3: Unimos en una sola lista
const testimoniosData = [...testimoniosBase, ...testimoniosExtras];


const Testimonios = () => {
  const [verMas, setVerMas] = useState(false);
  const tituloRef = useRef(null);
  const parrafoRef = useRef(null);

  const tituloEnVista = useInView(tituloRef, { once: false, margin: "-100px" });
  const parrafoEnVista = useInView(parrafoRef, { once: true, margin: "-100px" });

  const variantesServicios = {
    oculto: { color: "#000000" },
    visible: {
      color: "#8D2C24",
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const testimoniosVisibles = verMas ? testimoniosData : testimoniosData.slice(0, 6);

  return (
    <div>
      <div className={styles.Container}>
        <div className={styles.servicios}>
          <h2 className={styles.tituloSeccion}>
            Opiniones de{" "}
            <motion.span
              ref={tituloRef}
              variants={variantesServicios}
              initial="oculto"
              animate={tituloEnVista ? "visible" : "oculto"}
            >
              Pacientes
            </motion.span>
          </h2>
          <motion.p
            ref={parrafoRef}
            className={styles.descripcion}
            initial={{ opacity: 0 }}
            animate={
              parrafoEnVista
                ? { opacity: 1, transition: { duration: 1.2, delay: 0.2 } }
                : {}
            }
          >
            Experiencias compartidas por personas que han formado parte de mi práctica terapéutica, tanto en sesiones individuales como grupales.
          </motion.p>
        </div>

        <div className={styles.testimoniosLista}>
          {testimoniosVisibles.map((testimonio, index) => (
            <motion.div
              key={index}
              className={styles.testimonioCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={testimonio.imagen} alt={testimonio.nombre} className={styles.avatarGrande} />
              <div className={styles.contenidoCard}>
                <h4 className={styles.nombrePersona}>{testimonio.nombre}</h4>
                <p className={styles.usuarioPersona}>{testimonio.usuario}</p>
                <p className={styles.textoComentario}>"{testimonio.comentario}"</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón ver más/ver menos */}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button
            onClick={() => setVerMas(prev => !prev)}
            className={styles.verMasBtn}
          >
            {verMas ? (
              <>
                Ver menos comentarios <FaChevronUp />
              </>
            ) : (
              <>
                Ver más comentarios <FaChevronDown />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
