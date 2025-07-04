import React, { useState } from 'react';
import styles from './Terminos.module.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



const Terminos = () => {
  const tabs = {
    Horarios: {
      title: 'Política de Horarios',
      content: [
        'Las sesiones están disponibles de lunes a viernes, de 8:00 a.m. a 6:00 p.m. (hora de Colombia)',
        'Es fundamental conectarse puntualmente. La sesión finalizará a la hora programada independientemente de la hora de inicio.',
        'Si llegas con un retraso mayor a 15 minutos sin previo aviso, la sesión podría cancelarse y aplicarse la política de cancelaciones.',
        'Recomendamos agendar tu próxima sesión al finalizar la actual para asegurar continuidad en tu proceso.',
      ],
    },
    Cancelaciones: {
      title: 'Política de Cancelaciones y Reagendamientos',
      content: [
        'Las cancelaciones o reagendamientos deben notificarse con mínimo 12 horas de anticipación sin costo alguno.',
        'Cancelaciones con menos de 12 horas implican un cargo del 50% del valor de la sesión.',
        'No presentarse a la sesión sin aviso previo conlleva el cargo del 100% del valor.',
        'Circunstancias extraordinarias (emergencias médicas documentadas) serán consideradas individualmente.',
        'Cada cliente tiene derecho a un máximo de 2 reagendamientos por mes, sujetos a disponibilidad de agenda.',
      ],
    },
    Pagos: {
      title: 'Política de Pagos',
      content: [
        'El pago debe realizarse antes de cada sesión o al adquirir un paquete de sesiones.',
        'Aceptamos transferencias bancarias, PayPal y tarjetas de crédito/débito.',
        'Los paquetes de sesiones tienen una validez de 3 meses desde la fecha de compra.',
        'Las tarifas se revisan anualmente y pueden estar sujetas a ajustes, los cuales serán notificados con al menos 30 días de anticipación.',
       
      ],
    },
    Confidencialidad: {
      title: 'Confidencialidad y Privacidad',
      content: [
        'Toda la información compartida durante las sesiones es estrictamente confidencial, protegida por el secreto profesional.',
        'Las excepciones a la confidencialidad incluyen: riesgo de daño a uno mismo o terceros, abuso de menores o adultos vulnerables, o requerimiento legal.',
        'Las sesiones no se graban bajo ninguna circunstancia. Se recomienda no grabar por tu cuenta para preservar la integridad del espacio terapéutico.',
        'Es tu responsabilidad asegurar un espacio privado para tus sesiones donde no seas interrumpido/a ni escuchado/a.',
      ],
    },
  };

  const [selectedTab, setSelectedTab] = useState('Pagos');
   const [nombreRef, nombreEnVista] = useInView({ threshold: 0.5, triggerOnce: true });

    
    const underlineVariants = {
    hidden: { backgroundSize: '0% 2px' },
    visible: {
      backgroundSize: '100% 2px',
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };


  return (
    <div id="terminos" className={styles.contenedor}>
       
         <div className={styles.texto}> 
           <div className={styles.titulo}>
             <motion.h3
                          ref={nombreRef}
                          initial="hidden"
                          animate={nombreEnVista ? "visible" : "hidden"}
                          variants={underlineVariants}
                          className={styles.underlineEffect}
                        >
                          Acuerdos
                        </motion.h3>
                        <h4>
                          Para asegurar una experiencia terapéutica óptima, es importante establecer algunos acuerdos claro
         
                          </h4>
           </div>
         
       
      <div className={styles.container}>
     
        <div className={styles.tabButtons}>
  <div className={styles.buttonGroup1}>
    <button
      className={`${styles.tabButton} ${selectedTab === 'Horarios' ? styles.active : ''}`}
      onClick={() => setSelectedTab('Horarios')}
    >
      Horarios
    </button>
    <button
      className={`${styles.tabButton} ${selectedTab === 'Cancelaciones' ? styles.active : ''}`}
      onClick={() => setSelectedTab('Cancelaciones')}
    >
      Cancelaciones
    </button>
  </div>
  <div className={styles.buttonGroup2}>
    <button
      className={`${styles.tabButton} ${selectedTab === 'Pagos' ? styles.active : ''}`}
      onClick={() => setSelectedTab('Pagos')}
    >
      Pagos
    </button>
    <button
      className={`${styles.tabButton} ${selectedTab === 'Confidencialidad' ? styles.active : ''}`}
      onClick={() => setSelectedTab('Confidencialidad')}
    >
      Confidencialidad
    </button>
  </div>
</div>

        <div className={styles.contentBox}>
          <h3 className={styles.sectionTitle}>{tabs[selectedTab].title}</h3>
          <ul className={styles.list}>
            {tabs[selectedTab].content.map((item, index) => (
              <li key={index} className={styles.listItem}>• {item}</li>
            ))}
          </ul>
        </div>
        <p className={styles.footer}>
          Al agendar una sesión, confirmas que has leído, comprendido y aceptado estos términos y condiciones en su totalidad.
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default Terminos;
