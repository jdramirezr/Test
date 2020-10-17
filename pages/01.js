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
          <div className="a15-panel__left__title-number">01</div>
          <div className="a15-panel__left__title">
            Alfabetización en salud digital
          </div>
          <div className="a15-panel__right-time">
            Horas: 34
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
                Conocimiento del ecosistema digital para el trabajo diario en el
                entorno sanitario (dispositivos, programas, plataformas web y
                herramientas digitales).
              </li>
              <br />

              <li>
                Navegar por internet, usar el correo electrónico, ofimática y
                almacenamiento de información.
              </li>
              <br />
              <li>Uso de las TICs de forma segura y apropiada.</li>
              <br />
              <li>
                Identificación, análisis y evaluación crítica de recursos de
                salud fiables y de calidad.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default Avanzado10Video;
