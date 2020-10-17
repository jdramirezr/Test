import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Submenu from "../components/Submenu-ne";

const Programas = () => {
  const prev_page = "/nivel-avanzado-10";
  const next_page = "/nivel-avanzado-12";
  return (
    <Layout>
      <Submenu></Submenu>
      <div className="avanzado-11">
        <img className="avanzado-11__number" src="/generals/02-number.png" />
        <div className="avanzado-11__top">
          <div className="avanzado-11__top-left">
            <div className="avanzado-11__top-left--text">
              Principales motivos para desarrollar
              <br />
              tu formación en Competencias Digitales
              <br />
              <div className="avanzado-11__top-left--separator">___</div>
            </div>
          </div>
          <img className="avanzado-11__top-right" src="/11/ilustracion.png" />
        </div>
        <div className="avanzado-11__panel">
          <div className="avanzado-11__panel-item">
            <img
              className="avanzado-11__panel-item--img"
              src="/11/ico_01.png"
            />
            <div className="avanzado-11__panel-item--txt">
              <span className="avanzado-11__panel-item--span">01</span>
              <br />
              La eSalud mejora la calidad asistencial.
            </div>
          </div>
          <div className="avanzado-11__panel-item">
            <img
              className="avanzado-11__panel-item--img"
              src="/11/ico_02.png"
            />
            <div className="avanzado-11__panel-item--txt">
              <span className="avanzado-11__panel-item--span">02</span>
              <br />
              En el actual contexto sanitario se han convertido en
              imprescindibles.
            </div>
          </div>
          <div className="avanzado-11__panel-item">
            <img
              className="avanzado-11__panel-item--img"
              src="/11/ico_03.png"
            />
            <div className="avanzado-11__panel-item--txt">
              <span className="avanzado-11__panel-item--span">03</span>
              <br />
              Estudios demuestran la necesidad de formación en estas
              competencias.
            </div>
          </div>
        </div>
      </div>

      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
