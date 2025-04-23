import linksDePago from "./linksDePago.json";
export function obtenerLinkDePago(sesiones, pais) {
  const clave = `${sesiones}-${pais}`;
  return linksDePago[clave];
}

{/* */}