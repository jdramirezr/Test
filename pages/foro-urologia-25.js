import React, { useState } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Programas = () => {
  const prev_page = "/foro-urologia-24";
  const next_page = "/foro-urologia-26";

  const [isShown1, setIsShown1] = useState(false);
  return (
    <Layout>
      <div className="urologia-25">
        {isShown1 && (
          <div className="urologia-23-panel__info">
            <div className="urologia-23-panel__info--title">
              <b>Ponente: Manuel Alonso Coto</b>
            </div>
            <br />
            <div className="urologia-23-panel__info--text">
              Consultor en estrategia y transformación digital en múltiples
              sectores y Director Académico del Programa de Dirección de
              Marketing y Publicidad Digital en IE Business School. Ingeniero de
              telecomunicaciones y doctor en ciencias empresariales por la
              Universidad Rey Juan Carlos.
            </div>
            <br />
            <div className="urologia-23-panel__info--text">
              Profesor de marketing digital Instituto de Empresa. Consultor en
              marketing digital para empresas del sector salud (Grünenthal,
              Roche…). Autor de varios libros sobre marketing digital: Digital
              Self Branding, La Empresa Colaborativa El Plan de Marketing
              Digital, El Plan de Social Media Marketing.
            </div>
          </div>
        )}
        <div className="urologia-23-left">
          <img
            onMouseEnter={() => setIsShown1(true)}
            onMouseLeave={() => setIsShown1(false)}
            className="urologia-23-left-img"
            src="/25/foto_panelista.jpg"
          />
        </div>
        <div className="urologia-23-right">
          <div className="urologia-23-title">
            <b>
              Trabajo colaborativo
              <br />y redes profesionales
            </b>
          </div>
          <div className="urologia-23-text">
            <ul>
              <li>
                Aunque las reuniones presenciales van a disminuir,
                <b>la necesidad de networking permanece</b>
              </li>
              <br />
              <li>
                Las <b>nuevas tecnologías</b> nos permiten gestionar equipos y
                trabajos sin barreras geográficas
              </li>
              <br />
              <li>
                Las <b>herramientas digitales y redes profesionales</b> son un
                punto de partida <b>imprescindible</b>
              </li>
            </ul>
          </div>
          <div className="urologia-23-info">
            <div className="urologia-23-info__text">
              <b>Sede:</b> Valencia <br />
              <b>Fecha:</b> Octubre 2021
            </div>
          </div>
        </div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
