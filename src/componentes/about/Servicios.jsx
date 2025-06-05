import React from "react";
import estilos from "./Servicios.module.css";
import Img4 from "../../assets/imagenes/Img4.jpeg";
import banner from "../../assets/imagenes/banner.png";
import mariposa from "../../assets/imagenes/mariposa.jpg";
import Encabezado from "../global/Encabezado";

export default function Servicios() {
  return (
    <div>
        
      <section className={estilos.seccion}>
        <Encabezado titulo="@" destacado="Psicotranspersonal"
        descripcion="La semilla que floreció en comunidad." imagen={banner} />
        <div className={estilos.contenedor}>
          <div className={estilos.banner}>
            <img src={mariposa} alt="benner" />
           
          </div>

          <div className={estilos.texto}>
            

            <p>
              Psicotranspersonal nace de mi pasión por la profundidad, por el misterio, por los escritos que nutren la visión y la mirada, por mi deseo de compartir lo que habita dentro de mi corazón, se gesta hace 6 años en un anhelo de darle voz a procesos y vivencias que giran en torno a la sanación, la transformación humana y la evolución del ser
            </p>

            <p>
             Nace y se desarrolla desde la coherencia interna, desde el deseo genuino de acompañar a otros en su despertar, en su transformación, en su reconexión con su verdad más esencial.
            </p>

            <p>
             Lo que comenzó como una búsqueda personal se transformó en un proyecto con propósito. Psicotranspersonal tomó forma como un espacio profesional y consciente, nacido del deseo genuino de acompañar procesos de transformación, de crear vínculos conscientes, de sostener espacios seguros, sagrados y humanos donde las personas pueden mirar adentro, sanar heridas, recordar quiénes son y conectar con su alma.
            </p>

            <p>
              Con el tiempo, la pasión se tradujo en formación, experiencia y una comunidad que crece desde la autenticidad. Cada palabra, sesión y creación digital refleja ese compromiso con el alma y la sanación. Desde ahí, nace también el impulso de crear espacios colectivos, como los círculos de mujeres, que dan continuidad a este viaje compartido.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
