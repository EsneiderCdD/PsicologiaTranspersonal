import React from "react";
import estilos from "./PsicologiaTranspersonal.module.css";
import mariposa from "../../assets/imagenes/mariposa.jpg";
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
            <p>ipsu Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, dolorum explicabo perspiciatis veniam cupiditate architecto tempore ratione aliquam obcaecati corrupti libero facilis molestiae natus voluptatibus ducimus aut nisi. Recusandae, ipsum. </p>

            <p>ipsu Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, dolorum explicabo perspiciatis veniam cupiditate architecto tempore ratione aliquam obcaecati corrupti libero facilis molestiae natus voluptatibus ducimus aut nisi. Recusandae, ipsum. </p>
          </div>

          <div className={estilos.ts2}>
              <div className={estilos.cn}>
                
                  <div className={estilos.texto}>
                    <p>ipsu Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non soluta officia possimus aut, fugiat nulla minima eius nemo, magnam quod ex vel atque enim excepturi magni perferendis distinctio ut iure. </p>
                    <p>ipsu Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non soluta officia possimus aut, fugiat nulla minima eius nemo, magnam quod ex vel atque enim excepturi magni perferendis distinctio ut iure.</p>
                  </div>
                  <img src={mariposa} alt="SUSANASIMBOLO" />

              </div>  
            
          </div>
            <div className={estilos.ts1}>
           
            <p>ipsu Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, dolorum explicabo perspiciatis veniam cupiditate architecto tempore ratione aliquam obcaecati corrupti libero facilis molestiae natus voluptatibus ducimus aut nisi. Recusandae, ipsum. </p>

            <p>ipsu Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, dolorum explicabo perspiciatis veniam cupiditate architecto tempore ratione aliquam obcaecati corrupti libero facilis molestiae natus voluptatibus ducimus aut nisi. Recusandae, ipsum. </p>
          </div>
          
            

        </div>
       
        

        
      </section>
    </div>
  );
}
       