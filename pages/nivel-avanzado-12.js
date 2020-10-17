import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Submenu from "../components/Submenu-ne";

const Programas = () => {
  const prev_page = "/nivel-avanzado-11";
  const next_page = "/nivel-avanzado-13";
  return (
    <Layout>
      <Submenu></Submenu>
      <div className="avanzado-12">
        <img className="avanzado-12-img" src="/generals/02-number.png" />
        <div className="avanzado-12__content">
          <img
            className="avanzado-12__content-left--img"
            src="/12/ilustracion.png"
          />
          <div className="avanzado-12__content-right">
            <div className="avanzado-12__content-right--title">
              Objetivos
              <div className="avanzado-12__content-right--separator">___</div>
            </div>
            <div className="avanzado-12__content-right--panel">
              <div className="avanzado-12__content-right--item">
                <img
                  className="avanzado-12__content-right--img"
                  src="/12/ico_01.png"
                />
                <div className="avanzado-12__content-right--text">
                  Reforzar y desarrollar competencias digitales
                </div>
              </div>
              <div className="avanzado-12__content-right--item">
                <img
                  className="avanzado-12__content-right--img"
                  src="/12/ico_02.png"
                />
                <div className="avanzado-12__content-right--text">
                  Adquirir conocimientos en Salud Digital
                </div>
              </div>
            </div>
            <div className="avanzado-12__content-right--panel">
              <div className="avanzado-12__content-right--item">
                <img
                  className="avanzado-12__content-right--img"
                  src="/12/ico_03.png"
                />
                <div className="avanzado-12__content-right--text">
                  Entender y controlar las TICs
                </div>
              </div>
              <div className="avanzado-12__content-right--item">
                <img
                  className="avanzado-12__content-right--img"
                  src="/12/ico04.png"
                />
                <div className="avanzado-12__content-right--text">
                  Poner en práctica los beneficios que aportan las competencias
                  digitales
                </div>
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
