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
          <div className="a15-panel__left__title-number">04</div>
          <div className="a15-panel__left__title">
            Creación de contenido digital científico – sanitario
          </div>
          <div className="a15-panel__right-time">
            Horas: 20
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
              <li>Conocimientos en los tipos de contenido en salud digital.</li>
              <br />

              <li>
                Creación de contenidos y conversaciones de calidad y difusión
                del contenido digital.
              </li>
              <br />
              <li>
                Gestión adecuada de la creatividad a través de recursos para el
                usuario final.
              </li>
              <br />
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default Avanzado10Video;
