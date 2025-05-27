import React from "react";
import estilos from "./CirculoMujeres.module.css";


export default function CirculoMujeres() {
  return (
    <div>

      <section className={estilos.seccion}>
        <div className={estilos.contenido}>
          <div className={estilos.imagen}>
            <div className={estilos.imagen} role="img" aria-label="Meditación" />

          </div>
          <div className={estilos.texto}>
            <h2 className={estilos.titulo}>Circulo de Mujeres</h2>
            <p className={estilos.parrafo}>
              La idea es que aqui hablemos un poco mas sobre el circulo de mujeres a niver de "saber mas" que se "debe saber mas" INTRODUCCION CIRCULO DE MUJERES 
            </p>
            <p className={estilos.parrafo}>
              DESARROLLAR CIRCULO DE MUJERES ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className={estilos.parrafo}>
             QUE SE HACE, CUANTO TIEMPO DURA, DONDE ES, TODA LA INFO...
            </p>
          </div>
          
        </div>
      </section>
    </div>
  );
}