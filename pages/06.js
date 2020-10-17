import React from "react";
import Head from "next/head";
import Link from "next/link";

const Avanzado10Video = () => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/theme/favicon.jpg"
        />
        <title>Salud Digital</title>
      </Head>
      <Link href="/nivel-avanzado-15">
        <a className="introduccion03-video-x">X</a>
      </Link>
      <div className="introduccion03-video">
        <div className="a15-panel__left">
          <div className="a15-panel__left__title-number">06</div>
          <div className="a15-panel__left__title">
            Análisis y manejo de datos
          </div>
          <div className="a15-panel__right-time">
            Horas: 30
            <br />
            Duración: 3 meses
            <br />
            Número de plazas: 50
            <br />
          </div>
        </div>
        <div className="a15-panel__right">
          <div className="a15-panel__right-text">
            <div className="a15-panel__left__title-content">
              Cursos y contenido
              <br />
              ___
            </div>

            <ol>
              <li>
                Fuentes de datos e información de la institución sanitaria y el
                marco regulatorio en el entorno sanitario virtual.
              </li>
              <br />

              <li>
                Agrupación, explotación, análisis e interpretación de la
                información en las fuentes de datos institucionales. Así como
                diseñar indicadores para evaluar la información y medir
                resultados.
              </li>
              <br />
              <li>
                Gestión adecuada de bases de datos, información de fuentes de
                datos para la toma de decisiones y grandes volúmenes de datos (
                Big Data) para obtener información, extraer conocimientos y
                tomar decisiones.
                <br />
                *Es posible realizar el curso por competencias de interés en
                función de las prioridades del alumno.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default Avanzado10Video;
