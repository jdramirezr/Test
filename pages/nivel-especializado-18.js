import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Link from "next/link";

const Programas = () => {
  const prev_page = "/programas-07";
  const next_page = "/nivel-especializado-19";
  return (
    <Layout>
      <div className="avanzado-18">
        <img className="avanzado-14-number" src="/generals/03-number.png" />
        <div className="avanzado-18__panel">
          <img
            className="avanzado-18__panel-img"
            src="/18/logo-salusplay_blanco.png"
          />
          <div className="avanzado-18__panel-text">
            <div className="avanzado-18__panel-left">
              <div className="avanzado-18__panel-left--title">
                Experto universitario en competencias digitales en docencia e
                investigación enfermera
              </div>
              <div className="avanzado-18__panel-left--icon">
                <Link href="https://www.salusplay.com/experto-universitario-docencia-investigacion-enfermera">
                  <a className="avanzado-19__panel-info-a" target="_blank">
                    <div>+ info</div>
                  </a>
                </Link>
              </div>
              <div className="avanzado-18__panel-left--text">
                Título propio de la Universidad Europea Miguel de Cervantes.
                <br />
                <br />
                <strong>Triple acreditación:</strong>
                <br />
                Experto universitario - 30 ECTS (750 horas) Formación Continuada
                - 17,8 créditos CFC
              </div>
            </div>
            <div className="avanzado-18__panel-right">
              <div className="avanzado-18__panel-left--title">
                Experto universitario en herramientas digitales en la práctica
                asistencial de enfermería
              </div>
              <div className="avanzado-18__panel-left--icon">
                <Link href="https://www.salusplay.com/experto-universitario-practica-asistencial-enfermeria">
                  <a className="avanzado-19__panel-info-a" target="_blank">
                    <div>+ info</div>
                  </a>
                </Link>
              </div>
              <div className="avanzado-18__panel-left--text">
                Título propio de la Universidad Europea Miguel de Cervantes.
                <br />
                <br />
                <strong>Triple acreditación:</strong>
                <br />
                Experto universitario - 30 ECTS (750 horas) Formación Continuada
                - 18,8 créditos CFC
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
