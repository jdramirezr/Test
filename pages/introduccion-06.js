import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Introduccion02 = () => {
  const prev_page = "/introduccion-05";
  const next_page = "/programas-07";

  return (
    <Layout>
      <div className="introduccion-6">
        <div className="introduccion-6-h1">Colaboradores / Avales</div>
        <div className="introduccion-6-colaboradores">
          <div className="introduccion-6-colaboradores__item">
            <div className="introduccion-6-colaboradores__item--title">
              Avalado por
            </div>
            <div className="introduccion-6-colaboradores__item--logo">
              <img
                className="introduccion-6-colaboradores__item--img"
                src="/06/logo-ASD.png"
              />
            </div>
          </div>
          <div className="introduccion-6-colaboradores__item">
            <div className="introduccion-6-colaboradores__item--title">
              Colaborador en <br />
              proyectos de humanización
            </div>
            <div className="introduccion-6-colaboradores__item-">
              <img
                className="introduccion-6-colaboradores__item--img"
                src="/06/Logo-huci.png"
              />
            </div>
          </div>
          <div className="introduccion-6-colaboradores__item">
            <div className="introduccion-6-colaboradores__item--title">
              Colaborador en niveles <br />
              básico y avanzado
            </div>
            <div className="introduccion-6-colaboradores__item--logo">
              <img
                className="introduccion-6-colaboradores__item--img"
                src="/06/Logo-Salusplay.png"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Introduccion02;
