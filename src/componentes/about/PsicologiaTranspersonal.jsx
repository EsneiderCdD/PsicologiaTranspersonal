import React from "react";
import estilos from "./PsicologiaTranspersonal.module.css";
import mariposa from "../../assets/imagenes/mariposa.jpg";
import ft0 from "../../assets/imagenes/ft0.jpeg"; 
import Encabezado from "../global/Encabezado";
import { FaLeaf, FaHeart, FaHandsHelping, FaStar } from 'react-icons/fa';
import useMediaQuery from "../Hooks/useMediaQuery";

export default function PsicologiaTranspersonal() {
  const isMobile = useMediaQuery("(max-width: 750px)");
  const isVerySmall = useMediaQuery("(max-width: 550px)");
  const parrafoIntermedio = (
  <p>
    Nace y se desarrolla desde la coherencia interna, desde el deseo genuino de acompañar a otros en su despertar, en su transformación, en su reconexión con su verdad más esencial.
  </p>
);

  const parrafoFinal = (
    <p className={estilos.parrafoFinal}>
      Con el tiempo, la pasión se tradujo en formación, experiencia y una comunidad que crece desde la autenticidad. Cada palabra, sesión y creación digital refleja ese compromiso con el alma y la sanación.
      Desde ahí, nace también el impulso de crear espacios colectivos, como los círculos de mujeres, que dan continuidad a este viaje compartido.
    </p>

    
  );
  return (
    <div>
      <Encabezado
       
        destacado="@psicotranspersonal"
        descripcion="¿Qué es la Psicología Transpersonal?"
       
      />
      <section className={estilos.seccion}>
        

        <div className={estilos.contenedor}>
          <div className={estilos.ts1}>
            
            <p>Psicotranspersonal nace de mi pasión por la profundidad, por el misterio, por los escritos que nutren la visión y la mirada, por mi deseo de compartir lo que habita dentro de mi corazón, se gesta hace 6 años en un anhelo de darle voz a procesos y vivencias que giran en torno a la sanación, la transformación humana y la evolución del ser </p>

             {isVerySmall && <div className={estilos.parrafoExtra}>{parrafoIntermedio}</div>}

          </div>

          <div className={estilos.ts2}>
              <div className={estilos.cn}>
                
                  <div className={estilos.texto}>
                    {!isVerySmall && parrafoIntermedio}

                    <p>Lo que comenzó como una búsqueda personal se transformó en un proyecto con propósito. Psicotranspersonal tomó forma como un espacio profesional y consciente, nacido del deseo genuino de acompañar procesos de transformación, de crear vínculos conscientes, de sostener espacios seguros, sagrados y humanos donde las personas pueden mirar adentro, sanar heridas, recordar quiénes son y conectar con su alma.
                      </p>

                     {/* SOLO se muestra si NO es móvil */}
                {!isMobile && parrafoFinal}

                   
                  </div>


                  <img src={mariposa} alt="SUSANASIMBOLO" />

              </div>  
               {/* SOLO se muestra si SÍ es móvil */}
            {isMobile && (
              <div className={estilos.parrafoFinal}>{parrafoFinal}</div>
            )}
            
          </div>

          
           


          <div className={estilos.ts4}>
             <Encabezado
       
        destacado="Circulo de Mujeres"
        descripcion="Este encuentro femenino es un espacio de amor, aprendizaje, disfrute y transformación."
       
      />

            

            <div className={estilos.cn2}>
              <p>Este espacio nació de forma orgánica, como un susurro del corazón. Al principio fue una simple invitación a compartir entre amigas, y con el tiempo, se fue tejiendo algo más profundo. Lo que comenzó como un encuentro casual se transformó en un lugar sagrado, donde las mujeres pueden ser, sentir y expresarse sin miedo ni juicio.</p>
              
            <img src={ft0} alt="CIRCULOMUJERES" />
            <p>El círculo es un reflejo de lo que anhelo ver más en el mundo: espacios seguros, libres, humanos. Ahí se comparten emociones, pensamientos, silencios y memorias. Es un espacio de entrega, de aprendizaje y de liberación, donde cada mujer suelta lo que ya no le pertenece y recibe aquello que nutre su camino.</p>
            <div className={estilos.actividades}>
              <h4>En los círculos de mujeres vivimos:</h4>
              <div className={estilos.tarjetas}>
                <div className={estilos.tarjeta}>
                  <FaHeart size={30} color="#D16BA5" />
                  <p>Círculo de Palabra</p>
                </div>
                <div className={estilos.tarjeta}>
                  <FaLeaf size={30} color="#6CB28E" />
                  <p>Meditaciones Profundas</p>
                </div>
                <div className={estilos.tarjeta}>
                  <FaHandsHelping size={30} color="#FF9A8B" />
                  <p>Actividades Experienciales</p>
                </div>
                <div className={estilos.tarjeta}>
                  <FaStar size={30} color="#FFD166" />
                  <p>Rituales de Conexión</p>
                </div>
              </div>

              <div className={estilos.infoCita}>
                <p><strong>📅 Fecha:</strong> sábados o domingos</p>
                <p><strong>🕒 Hora:</strong> de 3:00 a 7:00 pm</p>
                <p><strong>📍 Lugar:</strong> Barrio Mesa, Envigado</p>
                <p><strong>❣️ Aporte:</strong> $88.000 COP</p>
              </div>
            </div>


            </div>


          </div>
          
            

        </div>
       
        

        
      </section>
    </div>
  );
}
       