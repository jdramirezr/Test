import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Introduccion02 = () => {
  const prev_page = "/introduccion-04";
  const next_page = "/introduccion-06";

  return (
    <Layout>
      <div className="introduccion-5">
        <div className="introduccion-5__title">
          Por qué Hollister
          <br />
          con la Salud Digital
        </div>
        <div className="introduccion-5__text">
          <ul>
            <li>
              <b>Nuestra misión:</b> hacer la vida del paciente más digna y
              gratificante.
              <br />
              <br />
            </li>
            <li>
              <b>Corresponsabilidad y firme compromiso</b> de acompañar a los
              profesionales sanitarios en este proceso de transformación digital
              bajo el paraguas de la humanización en los cuidados.
            </li>
          </ul>
        </div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Introduccion02;
