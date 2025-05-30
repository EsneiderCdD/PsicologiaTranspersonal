// Home2.jsx
import React from "react";
import estilos from "./Home2.module.css";
import aaa from "../../assets/imagenes/aaa.jpg";

export default function Home2() {
  return (
    <div>
      <section className={estilos.seccion}>
        <div className={estilos.contenedor}>
          {/* Versión fila para >1080px */}
          <div className={estilos.rowVersion}>
            <div className={estilos.cn}>
              <div className={estilos.columnaIzquierda}>
                <img src={aaa} alt="SUSANA" className={estilos.img} />
                <h3>Susana Santamaria</h3>
                <h2>Psicóloga Profesional En Terapia Transpersonal</h2>
              </div>
              <div className={estilos.texto}>
                <p>
                  Soy psicóloga con amplia experiencia en salud mental, bienestar emocional y desarrollo del potencial humano.
                  Mi enfoque está basado en la psicología transpersonal, un modelo terapéutico que integra la mente, el cuerpo
                  y la dimensión espiritual para generar procesos de transformación profunda.
                </p>
                <p>
                  El propósito no se trata solo de “tener clientes”, sino de crear vínculos conscientes, de sostener espacios seguros, sagrados y humanos donde las personas pueden mirar adentro, sanar heridas, recordar quiénes son y conectar con su alma.
                </p>
                <p>
                  Además de mi formación en psicología clínica, me he especializado en terapia transpersonal y terapia
                  enfocada a los ciclos y necesidades femeninas, lo que me ha permitido profundizar en los procesos de
                  sanación de la mujer.
                </p>
                <p>
                  Entender el impacto de tus vivencias y trabajarlas desde un enfoque terapéutico adecuado puede marcar la
                  diferencia en cómo enfrentas la vida y construyes tus relaciones, especialmente contigo misma.
                </p>
              </div>
            </div>
          </div>

          {/* Versión columna para ≤1080px */}
          <div className={estilos.colVersion}>
            <div className={estilos.cnColumn}>
              <h3>Susana Santamaria</h3>
              <h2>Psicóloga Profesional En Terapia Transpersonal</h2>
              <div className={estilos.textoColumn}>
                <p>
                  Soy psicóloga con amplia experiencia en salud mental, bienestar emocional y desarrollo del potencial humano.
                  Mi enfoque está basado en la psicología transpersonal, un modelo terapéutico que integra la mente, el cuerpo
                  y la dimensión espiritual para generar procesos de transformación profunda.
                </p>
                <p>
                  El propósito no se trata solo de “tener clientes”, sino de crear vínculos conscientes, de sostener espacios seguros, sagrados y humanos donde las personas pueden mirar adentro, sanar heridas, recordar quiénes son y conectar con su alma.
                </p>
                <p>
                  Además de mi formación en psicología clínica, me he especializado en terapia transpersonal y terapia
                  enfocada a los ciclos y necesidades femeninas, lo que me ha permitido profundizar en los procesos de
                  sanación de la mujer.
                </p>
                <p>
                  Entender el impacto de tus vivencias y trabajarlas desde un enfoque terapéutico adecuado puede marcar la
                  diferencia en cómo enfrentas la vida y construyes tus relaciones, especialmente contigo misma.
                </p>
              </div>
              <div className={estilos.imagenColumn}>
                <img src={aaa} alt="SUSANA" className={estilos.imgColumn} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
