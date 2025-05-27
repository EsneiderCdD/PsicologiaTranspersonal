
import styles from './Encabezado2.module.css';
const Encabezado2 = ({ titulo = "Título", tonoClaro = false }) => {
  const fondo = tonoClaro ? '#FBF8EF' : '#FFFFFF';

  return (
    <div className={styles.contenedortxt} style={{ backgroundColor: fondo }}>
      <h2 className={styles.titulo}>{titulo}</h2>
    </div>
  );
};

export default Encabezado2;
