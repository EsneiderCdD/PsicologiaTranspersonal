import { useState } from "react";
import estilos from "./Home.module.css";
import Modal from "./modalwindows/Modal";

export default function Home() {
  const [modalAbierto, setModalAbierto] = useState(false);

  const precios = [
    { nombre: "Sesión única", precio: "$40 USD" },
    { nombre: "Paquete mensual", precio: "$140 USD" },
    { nombre: "Acompañamiento completo", precio: "$250 USD" },
  ];

  return (
    <div className={estilos.contenedor}>
      <h1 className={estilos.tituloprincipal}>Psicología Transpersonal</h1>

      <p className={estilos.titulo}>
        <span className={estilos.resaltado}>Espacio</span> de crecimiento y acompañamiento{" "}
        <span className={estilos.resaltado}>terapéutico</span>
      </p>

      <p className={estilos.descripcion}>
        Empieza una transformación de la mano de un{" "}
        <span className={estilos.resaltado}>enfoque</span>{" "}
        que{" "}
        <span className={estilos.resaltado}>equilibra</span>{" "}
        <span className={estilos.resaltado}>ciencia</span>,{" "}
        <span className={estilos.resaltado}>humanidad</span> y{" "}
        <span className={estilos.resaltado}>espiritualidad</span>.
      </p>

      <div className={estilos.botones}>
        <button className={estilos.boton}>Sobre Mí</button>
        <button className={estilos.boton} onClick={() => setModalAbierto(true)}>
          Agendar
        </button>
      </div>

      {/* Aquí se monta el modal */}
      <Modal abierto={modalAbierto} cerrar={() => setModalAbierto(false)} precios={precios} />
    </div>
  );
}
