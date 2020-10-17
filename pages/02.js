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
          <div className="a15-panel__left__title-number">02</div>
          <div className="a15-panel__left__title">
            Gestión eficaz de la información científico – sanitaria
          </div>
          <div className="a15-panel__right-time">
            Horas: 32
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
                Capacidad para buscar, monitorizar y organizar información on
                line.
              </li>
              <br />
              <li>
                Estrategias de mejora de la información y los principios legales
                y éticos de las TICs.
              </li>
              <br />
              <li>
                Identificación de criterios de valor en la información sanitaria
                de la red.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default Avanzado10Video;
