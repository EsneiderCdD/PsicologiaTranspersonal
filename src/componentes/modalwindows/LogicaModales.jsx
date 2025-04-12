// LogicaModales.jsx
import React, { useState } from "react";
import Modal from "./Modal";
import Modal2 from "./Modal2";

const precios = [
  { nombre: "Sesión Básica" },
  { nombre: "Sesión Avanzada" },
  { nombre: "Sesión Premium" },
];

function LogicaModales() {
  const [mostrarModal, setMostrarModal] = useState(true);
  const [mostrarModal2, setMostrarModal2] = useState(false);

  const abrirModal2 = () => {
    setMostrarModal(false);
    setMostrarModal2(true);
  };

  const cerrarModal = () => setMostrarModal(false);
  const cerrarModal2 = () => setMostrarModal2(false);

  return (
    <>
      <Modal
        abierto={mostrarModal}
        cerrar={cerrarModal}
        precios={precios}
        abrirModal2={abrirModal2} // 👈 función que se dispara desde "Agendar Cita"
      />
      <Modal2
        abierto={mostrarModal2}
        cerrar={cerrarModal2}
        precios={precios}
      />
    </>
  );
}

export default LogicaModales;
