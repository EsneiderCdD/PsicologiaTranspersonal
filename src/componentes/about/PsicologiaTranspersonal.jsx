import React from "react";
import estilos from "./PsicologiaTranspersonal.module.css";
import mariposa from "../../assets/imagenes/mariposa.jpg";
import ft0 from "../../assets/imagenes/ft0.jpeg"; 
import Encabezado from "../global/Encabezado";

export default function PsicologiaTranspersonal() {
  return (
    <div>
      <Encabezado
        titulo="Proyecto "
        destacado="@Psicotranspersonal"
        descripcion="Deberia de tratar sobre su conexion con @PsicologiaTranspersonal "
      />
      <section className={estilos.seccion}>
        

        <div className={estilos.contenedor}>
          <div className={estilos.ts1}>
            <h2>¿Qué es la Psicología Transpersonal?</h2>
            <p>Psicotranspersonal nace de mi pasión por la profundidad, por el misterio, por los escritos que nutren la visión y la mirada, por mi deseo de compartir lo que habita dentro de mi corazón, se gesta hace 6 años en un anhelo de darle voz a procesos y vivencias que giran en torno a la sanación, la transformación humana y la evolución del ser </p>

          </div>

          <div className={estilos.ts2}>
              <div className={estilos.cn}>
                
                  <div className={estilos.texto}>
                    <p>Nace y se desarrolla desde la coherencia interna, desde el deseo genuino de acompañar a otros en su despertar, en su transformación, en su reconexión con su verdad más esencial. </p>

                    <p>El propósito no se trata solo de “tener clientes”, sino de crear vínculos conscientes, de sostener espacios seguros, sagrados y humanos donde las personas pueden mirar adentro, sanar heridas, recordar quiénes son y conectar con su alma.</p>
                 
                  </div>


                  <img src={mariposa} alt="SUSANASIMBOLO" />

              </div>  
            
          </div>
           


          <div className={estilos.ts4}>

            

            <div className={estilos.cn2}>
              
            <img src={ft0} alt="CIRCULOMUJERES" />
            <p>
              Este encuentro femenino es un espacio de amor, aprendizaje, disfrute y transformación.
              <br />

              En los círculos de mujeres vivimos:

              <ul>
                <li>
                  Circulo de palabra
                </li>
                <li>
                  Mditaciones profundas
                </li>
                <li>
                  Actividades experienciales
                </li>
                <li>
                  Rituales de conexión
                </li>

              </ul>


              Fecha: son los sábados o domingos.
              <br />
              •Hora: de 3:00 a 7:00 pm.
              <br />
              •Lugar: Barrio Mesa, Envigado.
              <br />

              ❣️Aporte: $88.000 cop.
            </p>

            </div>


          </div>
          
            

        </div>
       
        

        
      </section>
    </div>
  );
}
       