import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Programas = () => {
  const prev_page = "/foro-urologia-21";
  const next_page = "/foro-urologia-23";
  return (
    <Layout>
      <div className="urologia-22">
        <div className="urologia-21-text">
          <strong>
            Hollister con la
            <br />
            Salud Digital
          </strong>
          <br />
          Descubre cómo podemos
          <br />
          aportar valor a tu día a día
        </div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
