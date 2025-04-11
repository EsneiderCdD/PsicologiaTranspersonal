import React from "react";
import estilos from "../servicios/Servicios.module.css";
import { FaClock, FaLaptop, FaBookOpen } from "react-icons/fa";

function Servicios() {
  return (
    <section className={estilos.sesion}>
      <h2 className={estilos.tituloSeccion}>Servicios</h2>
      <p className={estilos.descripcion}>
        Acompañamientos personalizados desde la Psicología Transpersonal para ayudarte a reconectar con tu esencia, sanar y transformar tu realidad desde una mirada integradora.
      </p>

      <h3 className={estilos.titulo}>Sesión de Acompañamiento Individual</h3>
      <p className={estilos.descripcion}>
        Espacio seguro y personalizado donde podrás trabajar bloqueos emocionales, reconectar con tu sabiduría interna y potenciar tu crecimiento personal.
      </p>

      <div className={estilos.caracteristicas}>
        <div className={estilos.caracteristica}>
          <FaClock className={estilos.icono} />
          <p><strong>Duración:</strong> 1 hora de enfoque en ti.</p>
        </div>
        <div className={estilos.caracteristica}>
          <FaLaptop className={estilos.icono} />
          <p><strong>Modalidad:</strong> Online vía Zoom.</p>
        </div>
        <div className={estilos.caracteristica}>
          <FaBookOpen className={estilos.icono} />
          <p><strong>Material:</strong> Ejercicios y meditaciones.</p>
        </div>
      </div>

      <button className={estilos.boton}>Reserva tu Sesión</button>
    </section>
  );
}

export default Servicios;
