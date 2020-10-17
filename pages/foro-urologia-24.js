import React, { useState } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Programas = () => {
  const prev_page = "/foro-urologia-23";
  const next_page = "/foro-urologia-25";

  const [isShown1, setIsShown1] = useState(false);
  return (
    <Layout>
      <div className="urologia-24">
        {isShown1 && (
          <div className="urologia-23-panel__info ">
            <div className="urologia-23-panel__info--title">
              <b>Ponente: Isabel Marín</b>
            </div>
            <br />
            <div className="urologia-23-panel__info--text">
              Doctora en derecho y abogada especializada en Derecho Farmacéutico
              y Sanitario. Consultora en protección de datos e implementación de
              herramientas tecnológicas en el sector salud. Profesora en la
              Universidad Francisco de Vitoria y en programas de escuelas de
              negocio dirigidos a profesionales sanitarios (CESIF, CEU, ESESA…).
            </div>
            <br />
            <div className="urologia-23-panel__info--text">
              Ponente y formadora para empresas del sector salud (Pfizer,
              Almirall, Stada, Aristo, Bidafarma…). Autora de numerosos
              artículos y libros jurídicos, así como del blog:
              www.farmaciayderecho.com
            </div>
          </div>
        )}
        <div className="urologia-24-left">
          <div className="urologia-24-title">
            <b>Ciberseguridad</b>
            <br />
            <div className="urologia-24__title-text">
              Propiedad intelectual, entorno jurídico e implicaciones
            </div>
          </div>
          <div className="urologia-24-text">
            La utilización de las tecnologías de la información abre{" "}
            <b>nuevas problemáticas y riesgos.</b>
            <br />
            <br />
            Todos los profesionales de la salud{" "}
            <b>
              deben conocerlos para trabajar en el entorno digital de forma
              segura.
            </b>
          </div>
          <div className="urologia-23-info">
            <div className="urologia-23-info__text">
              <b>Sede:</b> Valencia <br />
              <b>Fecha:</b> Marzo 2021
            </div>
          </div>
        </div>
        <div className="urologia-24-right">
          <img
            className="urologia-24-right-img"
            onMouseEnter={() => setIsShown1(true)}
            onMouseLeave={() => setIsShown1(false)}
            src="/24/foto-panelista.png"
          />
        </div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
