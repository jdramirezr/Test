import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Submenu from "../components/Submenu-ne";

const Programas = () => {
  const prev_page = "/nivel-avanzado-12";
  const next_page = "/nivel-avanzado-14";
  return (
    <Layout>
      <Submenu></Submenu>
      <div className="avanzado-13">
        <img className="avanzado-13-number" src="/generals/02-number.png" />
        <div className="avanzado-13-content">
          <div className="avanzado-13-content__tilte">
            Metodología<div className="avanzado-13-content__separator">___</div>
          </div>
          <div className="avanzado-13-content__panel">
            <div className="avanzado-13-content__left">
              <div className="avanzado-13-content__left--panel">
                <div className="avanzado-13-content__left--item">
                  <img
                    className="avanzado-13-content__left--img"
                    src="13/ico_01.png"
                  />
                  <div className="avanzado-13-content__left--title">
                    Vídeos explicativos
                  </div>
                </div>
                <div className="avanzado-13-content__left--item">
                  <img
                    className="avanzado-13-content__left--img"
                    src="13/ico_02.png"
                  />
                  <div className="avanzado-13-content__left--title">
                    Materiales descargables
                  </div>
                </div>
                <div className="avanzado-13-content__left--item">
                  <img
                    className="avanzado-13-content__left--img"
                    src="13/ico_03.png"
                  />
                  <div className="avanzado-13-content__left--title">
                    Links y herramientas
                  </div>
                </div>
              </div>
              <div className="avanzado-13-content__left--panel">
                <div className="avanzado-13-content__left--item">
                  <img
                    className="avanzado-13-content__left--img"
                    src="13/ico_04.png"
                  />
                  <div className="avanzado-13-content__left--title">
                    Foro de discusión
                  </div>
                </div>
                <div className="avanzado-13-content__left--item">
                  <img
                    className="avanzado-13-content__left--img"
                    src="13/ico_05.png"
                  />
                  <div className="avanzado-13-content__left--title">
                    Tutorías mixtas
                  </div>
                </div>
                <div className="avanzado-13-content__left--item">
                  <img
                    className="avanzado-13-content__left--img"
                    src="13/ico_06.png"
                  />
                  <div className="avanzado-13-content__left--title">
                    Tutorías mixtas
                  </div>
                </div>
              </div>
            </div>
            <img
              className="avanzado-13-content__right--img"
              src="/13/ilustracion.png"
            />
          </div>
        </div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
