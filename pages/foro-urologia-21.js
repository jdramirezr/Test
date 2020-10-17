import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Programas = () => {
  const prev_page = "/foro-urologia-20";
  const next_page = "/foro-urologia-22";
  return (
    <Layout>
      <div className="urologia-21">
        <div className="urologia-21-text">
          ¿Sabías que el 93% de los
          <br />
          profesionales sanitarios
          <br /> reclaman una capacitación en
          <br />
          Salud Digital?
        </div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
