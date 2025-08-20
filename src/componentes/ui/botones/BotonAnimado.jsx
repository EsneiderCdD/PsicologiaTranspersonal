"use client";
import { motion } from "framer-motion";
import estilos from "./Botones.module.css";

export default function BotonAnimado({
  label,
  onClick,
  variant = "secundario", // "principal" o "secundario"
  initial,
  animate,
  whileHover,
}) {
  return (
    <motion.button
      className={variant === "principal" ? estilos.boton : estilos.botonSecundario}
      onClick={onClick}
      initial={initial}
      animate={animate}
      whileHover={whileHover}
    >
      {label}
    </motion.button>
  );
}
