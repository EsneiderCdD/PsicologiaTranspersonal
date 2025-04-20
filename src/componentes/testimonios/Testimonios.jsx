// src/components/Testimonios.jsx
import React from 'react';
import styles from '../testimonios/Testimonios.module.css';

const testimonios = [
  {
    inicial: 'L',
    nombre: 'Laura Marúnez',
    tipo: 'Terapia Individual Virtual',
    estrellas: 5,
    texto: 'Las sesiones virtuales individuales me han permitido profundizar en mi autoconocimiento de una manera que nunca imaginé posible. El enfoque transpersonal ha sido revelador para integrar aspectos de mi vida que parecían desconectados.',
    fecha: 'Marzo 2023',
  },
  {
    inicial: 'G',
    nombre: 'Gabriel Rodríguez',
    tipo: 'Terapia Grupal Presencial',
    estrellas: 5,
    texto: 'Participar en la terapia grupal ha sido una de las mejores decisiones que he tomado. El poder del grupo amplifica el proceso de sanación y me ha permitido sentirme comprendido y acompañado en mi camino.',
    fecha: 'Julio 2023',
  },
  {
    inicial: 'S',
    nombre: 'Sofía Vega',
    tipo: 'Terapia Individual Virtual',
    estrellas: 4,
    texto: 'Desde que comencé las sesiones virtuales, he notado un cambio profundo en mi percepción de la vida y en cómo manejo mis relaciones. Las herramientas que he aprendido me acompañan día a día.',
    fecha: 'Diciembre 2022',
  },



];

export default function Testimonios() {
  return (
    <section >
      <div className={styles.titulo}>
        <h2>Testimonios de <span>Pacientes</span></h2>
        <p>
          Experiencias compartidas por personas que han formado parte de mi práctica
          terapéutica, tanto en sesiones individuales como grupales.
        </p>
      </div>

      <div className={styles.cardsContainer}>
        {testimonios.map((t, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.avatar}>{t.inicial}</div>
            <div className={styles.nombre}>
              <strong>{t.nombre}</strong>
              <span>{t.tipo}</span>
            </div>
            <div className={styles.estrellas}>
              {'★'.repeat(t.estrellas)}
              {'☆'.repeat(5 - t.estrellas)}
            </div>
            <p className={styles.texto}>"{t.texto}"</p>
            <span className={styles.fecha}>{t.fecha}</span>
          </div>
        ))}

        
      </div>
      <div className={styles.cardsContainer}>
        {testimonios.map((t, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.avatar}>{t.inicial}</div>
            <div className={styles.nombre}>
              <strong>{t.nombre}</strong>
              <span>{t.tipo}</span>
            </div>
            <div className={styles.estrellas}>
              {'★'.repeat(t.estrellas)}
              {'☆'.repeat(5 - t.estrellas)}
            </div>
            <p className={styles.texto}>"{t.texto}"</p>
            <span className={styles.fecha}>{t.fecha}</span>
          </div>
        ))}

        
      </div>
    </section>
  );
}
