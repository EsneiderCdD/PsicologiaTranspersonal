import React from "react";
import estilos from "./CirculoMujeres.module.css";
import ft0 from "../../assets/imagenes/ft0.jpeg";
import { FaLeaf, FaHeart, FaHandsHelping, FaStar } from 'react-icons/fa';
import Encabezado from "../global/Encabezado";

export default function CirculoMujeres() {
  return (
    <section className={estilos.seccion}>
      <div className={estilos.contenedor}>
        <Encabezado
          destacado="Círculo de Mujeres"
          descripcion="Del uno al nosotros: tejemos en círculo la piel viva de un sueño que quiso volverse abrazo."
        />

        <div className={estilos.contenido}>
         

         <div className={estilos.parallax}>
          <div className={estilos.parallaxImagen}></div>
        </div>

         <div className={estilos.texto}>
  <p>
    Este espacio nació de forma orgánica, como un susurro del corazón. Al principio fue una simple invitación a compartir entre amigas, y con el tiempo, se fue tejiendo algo más profundo. Lo que comenzó como un encuentro casual se transformó en un lugar sagrado, donde las mujeres pueden ser, sentir y expresarse sin miedo ni juicio.
  </p>

  <p>
    El círculo es un reflejo de lo que anhelo ver más en el mundo: espacios seguros, libres, humanos. Ahí se comparten emociones, pensamientos, silencios y memorias. Es un espacio de entrega, de aprendizaje y de liberación, donde cada mujer suelta lo que ya no le pertenece y recibe aquello que nutre su camino.
  </p>
</div>


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
          <div>
               
            <button >Reservar</button>

          </div>
        
        </div>
     
      </div>
    </section>
  );
}
