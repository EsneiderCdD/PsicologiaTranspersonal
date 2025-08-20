"use client";
import { motion } from "framer-motion";
import BotonAnimado from "./BotonAnimado";
import estilos from "./Botones.module.css";

export default function BotonesGrupo({ botones = [] }) {
  return (
    <motion.div
      className={estilos.botones}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      viewport={{ once: true }}
    >
      {botones.map((btn, i) => (
        <BotonAnimado key={i} {...btn} />
      ))}
    </motion.div>
  );
}
