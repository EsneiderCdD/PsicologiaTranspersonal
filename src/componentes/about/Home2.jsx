// Home2.jsx
import React from "react";
import {useState, useEffect} from "react";
import { FiCalendar, FiMessageCircle, FiUsers } from "react-icons/fi";
import { FaInstagram, FaUserGraduate } from "react-icons/fa";
import { GiMoon, GiLotus } from "react-icons/gi";


import estilos from "./Home2.module.css";
import Img4 from "../../assets/imagenes/Img4.jpeg";
import banner from "../../assets/imagenes/banner.jpeg";





export default function Home2() {

  const [experiencia, setExperiencia] = useState(0);
  const [sesiones, setSesiones] = useState(0);
  const [seguidores, setSeguidores] = useState(0);
  const [pacientes, setPacientes] = useState(0);

  useEffect(() => {
    const i1 = setInterval(() => setExperiencia((prev) => (prev < 4 ? prev + 1 : prev)), 500);
    const i2 = setInterval(() => setSesiones((prev) => (prev < 500 ? prev + 10 : prev)), 100);
    const i3 = setInterval(() => setSeguidores((prev) => (prev < 190000 ? prev + 1250 : prev)), 50);
    const i4 = setInterval(() => setPacientes((prev) => (prev < 200 ? prev + 5 : prev)), 100);
    return () => {
      clearInterval(i1);
      clearInterval(i2);
      clearInterval(i3);
      clearInterval(i4);
    };
  }, []);
  return (
    <div>
      <section className={estilos.seccion}>
        <div className={estilos.contenedor}> 
          
          <div className={estilos.banner}>
            <img src={banner} alt="benner" />
            <div className={estilos.imagen}>
            <img src={Img4} alt="imagen" />
          </div>
          
          </div>
        
          
          
          
           <div className={estilos.texto}>

            <div className={estilos.titulo}>
               <h3>Susana Santamaria</h3>
                <h3>Terapeuta Transpersonal</h3>

            </div>

            
           
          
             <p>
              Soy psicóloga con amplia experiencia en salud mental, bienestar emocional y desarrollo del potencial humano.
              Mi enfoque está basado en la psicología transpersonal, un modelo terapéutico que integra la mente, el cuerpo
              y la dimensión espiritual para generar procesos de transformación profunda.
            </p>

             <div style={{ display: "flex", flexDirection: "row" , justifyContent: "center" }}>
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
          </div>

            <p>@Psicotranspersonal es un proyecto profesional, consciente y profundamente comprometido con el bienestar integral del ser humano. Hoy, Psicotranspersonal también es un espacio digital vivo: he cultivado una comunidad que crece día a día, no solo en número, sino en profundidad.  </p>


             <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <div className={estilos.item}>
              <div className={estilos.icon} style={{ backgroundColor: '#FFF5BA' }}>
                <FiUsers />
              </div>
              <span>+{pacientes} Personas atendidas </span>
            </div>
            <div className={estilos.item}>
              <div className={estilos.icon}  style={{ backgroundColor: '#D0E8F2' }}>
                <FaInstagram />
              </div>
              <span>+{seguidores >= 1000 ? `${Math.round(seguidores / 1000)}K` : seguidores} Seguidores en Instagram</span>
            </div>
          </div>

            <p>Además de mi formación en psicología clínica, me he especializado en terapia transpersonal y terapia
            enfocada a los ciclos y necesidades femeninas, lo que me ha permitido profundizar en los procesos de
            sanación de la mujer.
            </p>

            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"  }} >
                         <div className={estilos.item}>
                           <div className={estilos.icon} style={{ backgroundColor: '#F3D1F4' }}>
                             <GiMoon />
                           </div>
                           <span>Certificada en Terapia Menstrual</span>
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
                         
                         
                       </div>

            <p>Entender el impacto de tus vivencias y trabajarlas desde un enfoque terapéutico adecuado puede marcar la
            diferencia en cómo enfrentas la vida y construyes tus relaciones, especialmente contigo misma.
            </p>
          </div>

        </div>
          
      </section>
    </div>
  );
}
