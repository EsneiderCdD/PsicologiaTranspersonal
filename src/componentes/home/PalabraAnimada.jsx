import { motion } from "framer-motion";
import estilos from "./PalabraAnimada.module.css";

export default function PalabraAnimada({ texto, delay = 0 }) {
  return (
    <motion.span
      className={estilos.resaltado}
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeInOut"
      }}
    >
      {texto}
    </motion.span>
  );
}
