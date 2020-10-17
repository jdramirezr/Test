import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Programas = () => {
  const prev_page = "/foro-urologia-25";
  const next_page = "/documentacion";
  return (
    <Layout>
      <div className="urologia-26">
        <div className="urologia-26-left">
          <div className="urologia-26-left-panel">
            <div className="urologia-26-left__title">
              <div className="urologia-26-left__title-gray">Metodología</div>
              <div className="urologia-26-left__title-foros">
                Foros interactivos
              </div>
              <div className="urologia-26-left__title-semi">
                semipresenciales
              </div>
              <div className="urologia-26-left__title-text">
                de 10 a 20 profesionales de urología funcional*
              </div>
            </div>
            <div className="urologia-26-left__text">
              <span className="urologia-26-left__text-span--gray">
                Una sede y foros satélite.
              </span>
              <br />
              <br />
              <span className="urologia-26-left__text-span--red">Agenda</span>
              <br />
              <br />
              <b>20h - 20.30h</b>
              <br />
              Bienvenida Hollister
              <br />
              <br />
              <b>20.30 - 21.30h</b>
              <br />
              Ponencia con foro de debate y preguntas
              <br />
              <br />
              <b>21.30</b>
              <br />
              Cena
            </div>
          </div>
        </div>
        <div className="urologia-26-right">
          <div className="urologia-26-right__text">
            *Los encuentros se limitarán a 10 plazas en aquellos casos en que
            las autoridades restrinjan el aforo de los mismos debido a la
            evolución de la pandemia COVID-19.
            <br />
            <br />
            Así mismo, Hollister garantiza su realización con las medidas de
            seguridad establecidas.
          </div>
        </div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
