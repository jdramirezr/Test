import React, { useState } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Programas = () => {
  const prev_page = "/foro-urologia-22";
  const next_page = "/foro-urologia-24";

  const [isShown1, setIsShown1] = useState(false);
  return (
    <Layout>
      <div className="urologia-23">
        {isShown1 && (
          <div className="urologia-23-panel__info">
            <div className="urologia-23-panel__info--title">
              <b>Ponente: Dr. Esteban Jódar Gimeno</b>
            </div>
            <br />
            <div className="urologia-23-panel__info--text">
              Jefe de Servicio de Endocrinología y Nutrición. Hospital Quiron
              Salud Madrid, Juan Bravo y San Camilo de Madrid. Catedrático de
              Endocrinología, Universidad Europea de Madrid.
            </div>
            <br />
            <div className="urologia-23-panel__info--text">
              Pioneros en España del Grupo Quirón en adaptar y pilotar procesos
              de teleasistencia, llamadas sobre IP, prescripción de fármacos a
              distancia, citas telemáticas de pruebas de imagen o analíticas y
              videoconsultas, durante la crisis del COVID-19, realizadas por un
              equipo de 16 endocrinos, 3 nutricionistas y 1 enfermera en
              pacientes crónicos con diabetes y osteoporosis principalmente.
            </div>
          </div>
        )}
        <div className="urologia-23-left">
          <img
            onMouseEnter={() => setIsShown1(true)}
            onMouseLeave={() => setIsShown1(false)}
            className="urologia-23-left-img"
            src="/23/foto-panelista.png"
          />
        </div>
        <div className="urologia-23-right">
          <div className="urologia-23-title">
            <strong>Teleconsulta</strong>
            <br />
            <div className="urologia-23-subtitle">
              Nuevos retos de atención al paciente
            </div>
          </div>
          <div className="urologia-23-text">
            <ul>
              <li>
                La emergencia sanitaria del COVID-19 ha llevado a un{" "}
                <strong>aumento exponencial del uso de la telemedicina.</strong>
              </li>
              <br />
              <li>
                La teleconsulta consiste en construir un servicio no presencial
                que permita proporcionar{" "}
                <strong>la mejor asistencia a los pacientes.</strong>
              </li>
            </ul>
          </div>
          <div className="urologia-23-info">
            <div className="urologia-23-info__text">
              <b>Sede:</b> Madrid <br />
              <b>Fecha:</b> 19 de Noviembre 2020
            </div>
          </div>
        </div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
