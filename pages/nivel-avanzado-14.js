import React, { useState } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Submenu from "../components/Submenu-ne";

const Programas = () => {
  const prev_page = "/nivel-avanzado-13";
  const next_page = "/nivel-avanzado-15";

  return (
    <Layout>
      <Submenu></Submenu>

      <div className="avanzado-14">
        <img className="avanzado-14-number" src="/generals/02-number.png" />
        <div className="avanzado-14-content__tilte">
          Profesorado<div className="avanzado-13-content__separator">___</div>
        </div>
        <div className="avanzado-14__profesorado">
          <div className="avanzado-14__panel">
            <div className="avanzado-14__panel--item avanzado-14__panel--item-1">
              <div className="avanzado-14__item--text"></div>
            </div>
            <div className="avanzado-14__panel--item avanzado-14__panel--item-2">
              <div className="avanzado-14__item--text"></div>
            </div>
            <div className="avanzado-14__panel--item avanzado-14__panel--item-3">
              <div className="avanzado-14__item--text"></div>
            </div>
            <div className="avanzado-14__panel--item avanzado-14__panel--item-4">
              <div className="avanzado-14__item--text"></div>
            </div>
            <div className="avanzado-14__panel--item avanzado-14__panel--item-5">
              <div className="avanzado-14__item--text"></div>
            </div>
          </div>

          <div className="avanzado-14__panel">
            <div className="avanzado-14__panel--item avanzado-14__panel--item-6">
              <img className="avanzado-14__item--img" />
              <div className="avanzado-14__item--text"></div>
            </div>
            <div className="avanzado-14__panel--item avanzado-14__panel--item-7">
              <img className="avanzado-14__item--img" />
              <div className="avanzado-14__item--text"></div>
            </div>
            <div className="avanzado-14__panel--item avanzado-14__panel--item-8">
              <img className="avanzado-14__item--img" />
              <div className="avanzado-14__item--text"></div>
            </div>
            <div className="avanzado-14__panel--item avanzado-14__panel--item-9">
              <img className="avanzado-14__item--img" />
              <div className="avanzado-14__item--text"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
