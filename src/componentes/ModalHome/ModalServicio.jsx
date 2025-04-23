import estilos from "./ModalServicio.module.css";
import Terapiai from "../../assets/imagenes/Terapiai.png";
import terapiagrupal from "../../assets/imagenes/terapiagrupal.png";

export default function ModalServicio({ abierto, cerrar, abrirModalDatos }) {
  if (!abierto) return null;

  return (
    <div className={estilos.modalFondo}>
      <div className={estilos.modal}>
        
        <p className={estilos.subtitulo}>Elige el servicio que te interesa</p>

        <div className={estilos.contenedorServicios}>
          {/* Card - Terapia Individual */}
          <div className={estilos.cardServicio}>
            <img
              src={Terapiai}
              alt="Terapia Individual"
            />
            <h3>Terapia Individual</h3>
            <p>
              Sesión terapéutica profesional con enfoque en psicología
              transpersonal. Virtual, personalizada, centrada en tu proceso
              interior. Espacios seguros y confidenciales desde cualquier lugar
              del mundo.
            </p>
            <button onClick={abrirModalDatos}>Agendar</button>
          </div>

          {/* Card - Terapia Grupal */}
          <div className={`${estilos.cardServicio} ${estilos.cardGrupal}`}>
            <img
              src={terapiagrupal}
              alt="Terapia Grupal"
            />
            <h3>Terapia Grupal (próximamente)</h3>
            <p>
              Encuentros presenciales, eventuales y holísticos, creados junto a
              otras mujeres terapeutas. Un círculo de contención, sanación y
              conexión femenina. Espacios únicos y mágicos.
            </p>
            <button disabled>Reservar Cupo</button>
          </div>
        </div>

        <button onClick={cerrar} className={estilos.cerrar}>Cerrar</button>
      </div>
    </div>
  );
}
