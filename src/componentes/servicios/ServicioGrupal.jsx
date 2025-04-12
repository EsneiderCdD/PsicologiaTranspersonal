import React, { useState, useEffect } from "react";
import estilos from "../servicios/ServicioGrupal.module.css";
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function ServicioGrupal() {
  const eventoFecha = new Date("2025-07-20T18:00:00");
  const [tiempoRestante, setTiempoRestante] = useState(calcularTiempo());

  function calcularTiempo() {
    const ahora = new Date();
    const diferencia = eventoFecha - ahora;
    if (diferencia > 0) {
      return {
        dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((diferencia / (1000 * 60)) % 60),
        segundos: Math.floor((diferencia / 1000) % 60),
      };
    }
    return null;
  }

  useEffect(() => {
    const temporizador = setInterval(() => {
      setTiempoRestante(calcularTiempo());
    }, 1000);
    return () => clearInterval(temporizador);
  }, []);

  return (
    <section className={estilos.contenedor}>
      <h2 className={estilos.titulo}>Terapia Grupal - Conexión y Crecimiento</h2>

      <p className={estilos.descripcion}>
        Vive una experiencia transformadora con nuestra terapia grupal. Comparte, aprende y crece
        en un ambiente seguro y guiado profesionalmente, enfocado en técnicas efectivas para el autoconocimiento y la sanación.
      </p>

      <div className={estilos.parallaxImagen}></div>

      {tiempoRestante && (
        <div className={estilos.contador}>
          <h3>Tiempo restante para el evento:</h3>
          <p>
            {tiempoRestante.dias}d : {tiempoRestante.horas}h : {tiempoRestante.minutos}m : {tiempoRestante.segundos}s
          </p>
        </div>
      )}

      <div className={estilos.caracteristicas}>
        <div className={estilos.item}>
          <FaUsers className={estilos.icono} />
          <p><strong>Modalidad:</strong> Encuentro presencial con grupos reducidos.</p>
        </div>
        <div className={estilos.item}>
          <FaCalendarAlt className={estilos.icono} />
          <p><strong>Fecha:</strong> 20 de Julio, 2025</p>
        </div>
        <div className={estilos.item}>
          <FaMapMarkerAlt className={estilos.icono} />
          <p><strong>Ubicación:</strong> Centro de Bienestar XYZ</p>
        </div>
      </div>

      <button className={estilos.boton}>Inscribirme al Evento</button>
    </section>
  );
}

export default ServicioGrupal;
