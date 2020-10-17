import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Introduccion02 = () => {
  const next_page = "/introduccion-03";
  const prev_page = "/";
  return (
    <Layout>
      <div className="introduccion-2">
        <div className="content-left">
          <div className="content-left__title">
            <h1 className="content-left__title--h1">
              Tu formación nos importa <br />
              <span className="content-left__title--span">
                La Humanización y la Salud Digital
              </span>
              <br />
              Porque tu paciente es lo primero
            </h1>
          </div>
          <div className="content-left__text">
            <p className="content-left__text--p">
              <img
                className="content-left__text--comilla1"
                src="/generals/comilla-abriendo.png"
              />
              ¿Qué es la salud digital y por qué es importante para mí? <br />
              ¿Y si te dijera que la salud digital no es un concepto tecnológico
              sino una forma de mejorar como profesionales y conseguir que los
              pacientes alcancen una salud mejor?
              <img
                className="content-left__text--comilla2"
                src="/generals/comilla-cerrando.png"
              />
              <br />
            </p>
            <p className="content-left__text--p">
              <span className="content-left__text--span">
                José María Cepeda
              </span>
              <br />
              Enfermero de Emergencias y Creador de Contenidos sobre e-salud
            </p>
          </div>
        </div>
        <div className="content-right"></div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Introduccion02;
