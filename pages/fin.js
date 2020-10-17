import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Programas = () => {
  const prev_page = "/documentacion";
  const next_page = "no";
  return (
    <Layout>
      <div className="urologia-27">
        <div className="urologia-27-panel__logos">
          <img
            className="urologia-27-panel__logos--img"
            src="/27/logo-hollsiter-blanco.png"
          />
          <img
            className="urologia-27-panel__logos--img"
            src="/27/logo-hollsiter_education-blanco.png"
          />
        </div>
        <div className="urologia-27-panel__text">
          Hollister con la Salud digital
        </div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
