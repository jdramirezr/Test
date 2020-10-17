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
          <div className="a15-panel__left__title-number">03</div>
          <div className="a15-panel__left__title">
            Comunicación Sanitaria 2.0
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
              <li>Gestión adecuada de la identidad digital profesional.</li>
              <br />

              <li>
                Lenguajes de comunicación digital en salud, normas de conducta
                en entornos digitales y comunidades más relevantes.
              </li>
              <br />
              <li>
                Nuevos canales digitales y contactar, interactuar y generar
                contenido.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default Avanzado10Video;
