import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Programas = () => {
  const prev_page = "/programas-07";
  const next_page = "/nivel-basico-09";
  return (
    <Layout>
      <div className="basico-01">
        <div className="basico-01-left">
          <img
            className="basico-01-left__number"
            src="/generals/01-number.png"
          />
          <div className="basico-01-left__title">Presencial</div>
          <div className="basico-01-left__text">
            <b>
              Capacitación en desafíos de la digitalización <br />
              aplicada a la salud como es:{" "}
            </b>
            la consulta en remoto,
            <br />
            el liderazgo en comunidades de pacientes...etc
            <br />
            <br />
            <b>Impartido por: </b>Expertos en la temática establecida
            <br />
            anualmente
          </div>
          <div className="basico-01-left__aforo">
            <img
              className="basico-01-left__aforo--img"
              src="/08/08-ico_aforo.png"
            />
            <div className="basico-01-left__right">
              <div className="basico-01-left__aforo--title">
                <b>Aforo máximo:</b> 20 pax.
              </div>
              <div className="basico-01-left__aforo--text">
                *(se establecerá un programa online o presencial")
              </div>
            </div>
          </div>
        </div>
        <div className="basico-01-right"></div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
