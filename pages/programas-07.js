import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Link from "next/link";

const Programas = () => {
  const prev_page = "/introduccion-06";
  const next_page = "/nivel-basico-08";
  return (
    <Layout>
      <div className="programas-07">
        <div className="programas-07-top">
          <div className="programas-07-top__title">
            Niveles
            <br />
            de formación
          </div>
        </div>
        <div className="programas-07__bottom">
          <div className="programas-07__bottom-item programas-07__bottom-item-01">
            <div className="programas-07__bottom-item--line-01"></div>
            <Link href="/nivel-basico-08">
              <a className="programas-07__bottom-item--line-01-a">
                <div className="programas-07__bottom-item--number ">01</div>
              </a>
            </Link>
            <div className="programas-07__bottom-item--text">Nivel Básico</div>
          </div>
          <div className="programas-07__bottom-item programas-07__bottom-item-02">
            <div className="programas-07__bottom-item--line-02"></div>
            <Link href="/nivel-avanzado-10">
              <a className="programas-07__bottom-item--line-01-a">
                <div className="programas-07__bottom-item--number">02</div>
              </a>
            </Link>
            <div className="programas-07__bottom-item--text">
              Nivel
              <br />
              Especializado
            </div>
          </div>
          <div className="programas-07__bottom-item programas-07__bottom-item-03">
            <div className="programas-07__bottom-item--line-03"></div>
            <Link href="/nivel-especializado-18">
              <a className="programas-07__bottom-item--line-01-a">
                <div className="programas-07__bottom-item--number">03</div>
              </a>
            </Link>
            <div className="programas-07__bottom-item--text">
              Nivel
              <br />
              Avanzado
            </div>
          </div>
          <div className="programas-07__bottom-item programas-07__bottom-item-04">
            <div className="programas-07__bottom-item--line-04"></div>
            <Link href="/foro-urologia-20">
              <a className="programas-07__bottom-item--line-01-a">
                <div className="programas-07__bottom-item--number">04</div>
              </a>
            </Link>
            <div className="programas-07__bottom-item--text">
              Foros
              <br />
              de Urología
            </div>
          </div>
        </div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
