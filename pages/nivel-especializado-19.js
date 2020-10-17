import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Link from "next/link";

const Programas = () => {
  const prev_page = "/nivel-especializado-18";
  const next_page = "/foro-urologia-20";
  return (
    <Layout>
      <div className="avanzado-19">
        <img className="avanzado-14-number" src="/generals/03-number.png" />
        <div className="avanzado-19__panel">
          <img
            className="avanzado-19__panel-logo"
            src="/27/logo-hollsiter-blanco.png"
          />
          <div className="avanzado-19__panel-title">
            Master en Salud Digital
          </div>
          <div className="avanzado-19__panel-info">
            <Link href="https://www.salusplay.com/master-salud-digital">
              <a className="avanzado-19__panel-info-a" target="_blank">
                <div>+ info</div>
              </a>
            </Link>
          </div>
          <div className="avanzado-19__panel-text">
            Título propio de la Universidad Europea Miguel de Cervantes
            <br />
            <br />
            <strong>Triple acreditación:</strong>
            <br />
            Experto universitario - 60 ECTS (1500 horas)
            <br />
            Formación Continuada - 36,6 créditos CFC
          </div>
        </div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
