import { useState, useEffect } from "react";

import estilos from "./Home.module.css";
import Modal from "./modalwindows/Modal";
import Modal2 from "./modalwindows/Modal2";
import Modal3 from "./modalwindows/Modal3";
import { Link } from "react-router-dom";

export default function Home() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modal2Abierto, setModal2Abierto] = useState(false);
  const [modal3Abierto, setModal3Abierto] = useState(false);

  // Estado para guardar las selecciones
  const [datosSeleccionados, setDatosSeleccionados] = useState({
    sesiones: null,
    pais: null,
  });
  // Efecto que se dispara cuando ya tenemos país y sesión
useEffect(() => {
  const { sesiones, pais } = datosSeleccionados;
  if (sesiones && pais) {
    const clave = `${sesiones}-${pais}`;
    const linkPago = linksDePago[clave];
    if (linkPago) {
      window.location.href = linkPago;
    } else {
      alert("No se encontró un link de pago para esta combinación.");
    }
  }
}, [datosSeleccionados]); // <- Esto se ejecuta cada vez que se actualiza país o sesión


  

  const precios = [
    { nombre: "Sesión única", precio: "$40 USD" },
    { nombre: "Paquete mensual", precio: "$140 USD" },
    { nombre: "Acompañamiento completo", precio: "$250 USD" },
  ];

  const linksDePago = {
    "1-COL": "https://biz.payulatam.com/L0f9bc393C704E5",
    "4-COL": "https://biz.payulatam.com/L0f9bc3DF4E9C75",
    "6-COL": "https://biz.payulatam.com/L0f9bc3206920E3",

    // Otros países...
  };

  // Función para generar la clave única
  const generarClave = () => {
    const { sesiones, pais } = datosSeleccionados;
    return `${sesiones}-${pais}`;
  };

  // Redirigir al link de pago
  const redirigirAlPago = () => {
    const clave = generarClave();  // Ejemplo: "1-COL"
    const linkPago = linksDePago[clave]; // Esto devolverá el link para esa clave
    if (linkPago) {
      window.location.href = linkPago;  // Redirige al usuario
    } else {
      alert("No se encontró un link de pago para esta combinación.");
    }
  };

  const abrirModal2 = () => {
    setModalAbierto(false);
    setModal2Abierto(true);
  };

  const abrirModal3 = () => {
    setModal2Abierto(false);
    setModal3Abierto(true);
  };

  const seleccionarSesion = (sesiones) => {
    setDatosSeleccionados((prevState) => ({
      ...prevState,
      sesiones,
    }));
  };

  const seleccionarPais = (pais) => {
    setDatosSeleccionados((prevState) => ({
      ...prevState,
      pais,
    }));
  };

  return (
    <div className={estilos.layout}>
      <div className={estilos.texto}>
        <div className={estilos.contenedor}>
          <h1 className={estilos.tituloprincipal}>Psicología Transpersonal</h1>
  
          <p className={estilos.titulo}>
            <span className={estilos.resaltado}>Espacio</span> de crecimiento y acompañamiento{" "}
            <span className={estilos.resaltado}>terapéutico</span>
          </p>
  
          <p className={estilos.descripcion}>
            Empieza una transformación de la mano de un{" "}
            <span className={estilos.resaltado}>enfoque</span>{" "}
            que <span className={estilos.resaltado}>equilibra</span>,{" "}
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
        </div>
      </div>
  
      <div className={estilos.imagen}>
        <img src="/src/assets/imagenes/PsicoT.png" alt="imagen decorativa" />
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
        abrirModal3={abrirModal3}
        seleccionarSesion={seleccionarSesion}
      />
  
      <Modal3
        abierto={modal3Abierto}
        cerrar={() => setModal3Abierto(false)}
        seleccionarPais={seleccionarPais}
        redirigirAlPago={redirigirAlPago}
      />
    </div>
  );
}  