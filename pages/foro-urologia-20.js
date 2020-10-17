import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Programas = () => {
  const prev_page = "/programas-07";
  const next_page = "/foro-urologia-21";
  return (
    <Layout>
      <div className="urologia-20">
        <div className="urologia-20-title">
          Foros de Urología
          <br />
          en Salud Digital
        </div>
        <div className="urologia-20-text">
          Hollister Education con la Salud Digital
        </div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
