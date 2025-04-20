import estilos from "./ModalServicio.module.css";

export default function ModalServicio({ abierto, cerrar, abrirModalDatos }) {
  if (!abierto) return null;

  return (
    <div className={estilos.modalFondo}>
      <div className={estilos.modal}>
        <h2>¿Qué tipo de sesión estás buscando?</h2>

        <div className={estilos.botones}>
          <button onClick={abrirModalDatos}>Terapia Individual</button>
          <button disabled>Terapia Grupal (próximamente)</button>
        </div>

        <button onClick={cerrar} className={estilos.cerrar}>Cerrar</button>
      </div>
    </div>
  );
}
