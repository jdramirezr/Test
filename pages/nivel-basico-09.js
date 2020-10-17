import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Link from "next/link";

const Programas = () => {
  const prev_page = "/nivel-basico-08";
  const next_page = "/nivel-avanzado-10";
  return (
    <Layout>
      <div className="basico-09">
        <div className="basico-09__left">
          <img
            className="basico-09-left__number"
            src="/generals/01-number.png"
          />
          <div className="basico-09__left--title">
            <div className="basico-09__left--title-text">
              <strong>Online</strong> Becas en{" "}
            </div>
            <img
              className="basico-09__left--title-img"
              src="/06/Logo-Salusplay.png"
            />
            <Link href="https://www.salusplay.com/cursos/salud-digital-enfermeria">
              <a
                className=" basico-09__left--button-info basico-09__left--button-info-a"
                target="_blank"
              >
                + Info
              </a>
            </Link>
          </div>
          <div className="basico-09__left--panel">
            <div className="basico-09__left--item">
              <div className="basico-09__left--number">01</div>
              <div className="basico-09__left--text">
                Comunicación y difusión de información digital en salud.
              </div>
              <div className="basico-09__left--info">
                Créditos: 4,7
                <br />
                Horas: 22
              </div>
            </div>
            <div className="basico-09__left--item">
              <div className="basico-09__left--number">02</div>
              <div className="basico-09__left--text">
                Diseño y producción de contenidos digitales en salud.
              </div>
              <div className="basico-09__left--info">
                Créditos: 4,7 <br />
                Horas: 22
              </div>
            </div>
            <div className="basico-09__left--item">
              <div className="basico-09__left--number">03</div>
              <div className="basico-09__left--text">
                La identidad, reputación online e influencia digital en salud.
              </div>
              <div className="basico-09__left--info">
                Créditos: 4,7
                <br />
                Horas: 22
              </div>
            </div>
            <div className="basico-09__left--item">
              <div className="basico-09__left--number">04</div>
              <div className="basico-09__left--text">
                Práctica del profesional sanitario en la era digital.
              </div>
              <div className="basico-09__left--info">
                Créditos: 4,7 <br />
                Horas: 22
              </div>
            </div>
            <div className="basico-09__left--item">
              <div className="basico-09__left--number">05</div>
              <div className="basico-09__left--text">
                Enfermería digital en la práctica asistencial.
                <br />
                <strong>(3 cursos)</strong>
              </div>
              <div className="basico-09__left--info">
                Créditos: 14,1 <br />
                Horas: 22
              </div>
            </div>
          </div>
          <div className="basico-09__left--panel">
            <div className="basico-09__left--item">
              <div className="basico-09__left--number">06</div>
              <div className="basico-09__left--text">
                La salud digital en la sociedad del conocimiento.
              </div>
              <div className="basico-09__left--info">
                Créditos: 4,7
                <br />
                Horas: 22
              </div>
            </div>
            <div className="basico-09__left--item">
              <div className="basico-09__left--number">07</div>
              <div className="basico-09__left--text">
                Herramientas digitales en investigación enfermera.
                <br />
                <strong>(3 cursos)</strong>
              </div>
              <div className="basico-09__left--info">
                Créditos: 14,1 <br />
                Horas: 22
              </div>
            </div>
            <div className="basico-09__left--item">
              <div className="basico-09__left--number">08</div>
              <div className="basico-09__left--text">
                Cursos de búsqueda de información digital en salud.
              </div>
              <div className="basico-09__left--info">
                Créditos: 4,7 <br />
                Horas: 22
              </div>
            </div>
            <div className="basico-09__left--item">
              <div className="basico-09__left--number">09</div>
              <div className="basico-09__left--text">
                Recopilación y almacenamiento de información digital en salud.
              </div>
              <div className="basico-09__left--info">
                Créditos: 4,7
                <br />
                Horas: 22
              </div>
            </div>
            <div className="basico-09__left--item">
              <div className="basico-09__left--number">10</div>
              <div className="basico-09__left--text">
                Productividad digital y trabajo colaborativo en salud.
              </div>
              <div className="basico-09__left--info">
                Créditos: 4,7 <br />
                Horas: 22
              </div>
            </div>
          </div>
        </div>
        <div className="basico-09__right"></div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
