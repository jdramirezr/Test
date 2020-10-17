import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import link from "next/link";
import Link from "next/link";

const Documentacion = () => {
  const next_page = "/fin";
  const prev_page = "foro-urologia-26";
  return (
    <Layout>
      <div className="documentacion-28">
        <div className="documentacion-28-title">Documentación</div>
        <div className="documentacion-28-panel">
          <div className="documentacion-28-panel__item">
            <Link href="/pdf/Salud digital Nivel Basico.pdf">
              <a
                className="documentacion-28-panel__item--a"
                target="_blank"
                download
              >
                <img
                  className="documentacion-28-panel__item--img"
                  src="/28/ico-pdf.png"
                />
              </a>
            </Link>
            <div className="documentacion-28-panel__item--text">
              <Link href="/pdf/Salud digital Nivel Basico.pdf">
                <a
                  className="documentacion-28-panel__item--a"
                  target="_blank"
                  download
                >
                  Salud digital Nivel Básico
                </a>
              </Link>
            </div>
          </div>
          <div className="documentacion-28-panel__item">
            <Link href="/pdf/Salud digital Nivel Avanzado.pdf">
              <a
                className="documentacion-28-panel__item--a"
                target="_blank"
                download
              >
                <img
                  className="documentacion-28-panel__item--img"
                  src="/28/ico-pdf.png"
                />
              </a>
            </Link>
            <div className="documentacion-28-panel__item--text">
              <Link href="/pdf/Salud digital Nivel Avanzado.pdf">
                <a
                  className="documentacion-28-panel__item--a"
                  target="_blank"
                  download
                >
                  Salud digital Nivel Avanzado
                </a>
              </Link>
            </div>
          </div>
          <div className="documentacion-28-panel__item">
            <Link href="/pdf/Salud digital Nivel Especializado.pdf">
              <a
                className="documentacion-28-panel__item--a"
                target="_blank"
                download
              >
                <img
                  className="documentacion-28-panel__item--img"
                  src="/28/ico-pdf.png"
                />
              </a>
            </Link>
            <div className="documentacion-28-panel__item--text">
              <Link href="/pdf/Salud digital Nivel Especializado.pdf">
                <a
                  className="documentacion-28-panel__item--a"
                  target="_blank"
                  download
                >
                  Salud digital Nivel Especializado
                </a>
              </Link>
            </div>
          </div>
          <div className="documentacion-28-panel__item">
            <Link href="/pdf/Salud digital Foro de Urología.pdf">
              <a
                className="documentacion-28-panel__item--a"
                target="_blank"
                download
              >
                <img
                  className="documentacion-28-panel__item--img"
                  src="/28/ico-pdf.png"
                />
              </a>
            </Link>
            <div className="documentacion-28-panel__item--text">
              <Link href="/pdf/Salud digital Foro de Urología.pdf">
                <a
                  className="documentacion-28-panel__item--a"
                  target="_blank"
                  download
                >
                  Foro de Urología
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="separator"></div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Documentacion;
