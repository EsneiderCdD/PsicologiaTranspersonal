import linksDePago from " ./linksDePago.js";
export function obtenerLinkDePago(sesiones, pais) {
  const clave = `${sesiones}-${pais}`;
  return linksDePago[clave];
}

{/* */}