import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Link from "next/link";

const Introduccion02 = () => {
  const prev_page = "/introduccion-02";
  const next_page = "/introduccion-04";

  return (
    <Layout>
      <div className="img-introduccion-3">
        <div className="introduccion-3__title">
          <h1 className="introduccion-3__title--h1">
            Todo cambio empieza en <br />
            <span className="introduccion-3__title--span">UNO MISMO</span>
          </h1>
        </div>
        <div className="introduccion-3__text">
          <p className="introduccion-3__text--p">
            <img
              className="content-left__text--comilla1"
              src="/generals/comilla-abriendo.png"
            />
            Ante una realidad social y tecnológica tan cambiante como la actual,
            <b>
              {" "}
              los profesionales sanitarios tenemos la responsabilidad ineludible
              de capacitarnos digitalmente{" "}
            </b>
            para mejorar nuestro desempeño profesional y así ofrecer una
            atención sanitaria cada vez mejor y adaptada al nuevo paradigma
            digital.
            <img
              className="content-left__text--comilla2"
              src="/generals/comilla-cerrando.png"
            />
            <br />
          </p>
        </div>
        <div className="introduccion-3__video">
          <Link href="/introduccion-03-video">
            <a className="introduccion-3__video--a">
              <img
                className="introduccion-3__video--img"
                src="/generals/ico_ver-video.png"
              />
              <h1 className="introduccion-3__video--h1">Ver video</h1>
            </a>
          </Link>
        </div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Introduccion02;
