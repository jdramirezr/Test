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
          <div className="a15-panel__left__title-number">05</div>
          <div className="a15-panel__left__title">
            Trabajo colaborativo en red
          </div>
          <div className="a15-panel__right-time">
            Horas: 35
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
                Recursos de almacenamiento virtual, redes de trabajo
                colaborativo y estrategias de atención a la salud on line.
              </li>
              <br />

              <li>
                Identificación y conexión con grupos de trabajo virtuales y
                trabajar y compartir conocimientos de forma colaborativa con
                redes virtuales de profesionales, pacientes etc.
              </li>
              <br />
              <li>
                Gestión adecuada de equipos de trabajo virtual, redes de
                conocimiento y trabajo virtual y el conocimiento compartido.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default Avanzado10Video;
