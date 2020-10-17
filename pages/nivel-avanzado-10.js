import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Submenu from "../components/Submenu-ne";
import Link from "next/link";

const Programas = () => {
  const prev_page = "/programas-07";
  const next_page = "/nivel-avanzado-11";
  return (
    <Layout>
      <Submenu></Submenu>
      <div className="avanzado-10">
        <img className="avanzado-10-number" src="/generals/02-number.png" />
        <div className="avanzado-10-top">
          <div className="avanzado-10-top__left">
            <div className="avanzado-10-top__left--text">
              Programa de desarrollo de <br />
              <strong>
                Competencias Digitales
                <br />
                para profesionales de la salud
              </strong>
            </div>
            <div className="avanzado-10__video">
              <Link href="/nivel-avanzado-10-video">
                <a className="avanzado-10__video--a">
                  <img
                    className="avanzado-10__video--img"
                    src="/generals/ico_ver-video.png"
                  />
                  <h1 className="avanzado-10__video--h1">Ver video</h1>
                </a>
              </Link>
            </div>
          </div>
          <div className="avanzado-10-top__right"></div>
        </div>
        <div className="avanzado-10-bottom">
          <img className="avanzado-10-bottom-item" src="/10/cuadro01.png" />
          <img className="avanzado-10-bottom-item" src="/10/cuadro02.png" />
          <img className="avanzado-10-bottom-item" src="/10/cuadro03.png" />
        </div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
