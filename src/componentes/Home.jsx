import { useState } from "react";
import estilos from "./Home.module.css";
import Modal from "./modalwindows/Modal";
import Modal2 from "./modalwindows/Modal2";
import { Link } from "react-router-dom";

import et from "../assets/imagenes/et.jpg";
import nh from "../assets/imagenes/nh.jpg";
import pc from "../assets/imagenes/pc.jpg";


export default function Home() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modal2Abierto, setModal2Abierto] = useState(false);


  const precios = [
    { nombre: "Sesión única", precio: "$40 USD", imagen: et },
    { nombre: "Paquete mensual", precio: "$140 USD", imagen: nh },
    { nombre: "Acompañamiento completo", precio: "$250 USD", imagen: pc },
  ];
  

  const abrirModal2 = () => {
    setModalAbierto(false);
    setModal2Abierto(true);
  };

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
        <Link to="/about" className={estilos.boton}>
          Sobre Mí
        </Link>
        <button className={estilos.boton} onClick={() => setModalAbierto(true)}>
          Agendar
        </button>
      </div>

      {/* Modales */}
      <Modal
        abierto={modalAbierto}
        cerrar={() => setModalAbierto(false)}
        precios={precios}
        abrirModal2={abrirModal2}
      />

      <Modal2
        abierto={modal2Abierto}
        cerrar={() => setModal2Abierto(false)}
        precios={precios}
      />
    </div>
  );
}
