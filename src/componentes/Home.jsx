import estilos from "./Home.module.css";

export default function Home() {
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
        <button className={estilos.boton}>Agendar</button>
      </div>

       
    </div>
  );
}
