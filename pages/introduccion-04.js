import React, { useState } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Introduccion02 = () => {
  const prev_page = "/introduccion-03";
  const next_page = "/introduccion-05";

  const [showPanel, setShowPanel] = useState(false);

  const showPanelVisiblity = () => {
    setShowPanel(showPanel ? false : true);
  };

  return (
    <Layout>
      <div className="introduccion-04">
        <div className="introduccion-04-left"></div>
        <div className="introduccion-04-right">
          <div className="introduccion-04__top">Sabías que...</div>
          <div className="introduccion-04__bottom">
            <div className="introduccion-04__bottom--left">
              <img className="bottom__left--img" src="/04/ico_01.png" />
              <div className="bottom__left--number">94%</div>
              <div className="bottom__left--text">
                de los profesionales utiliza
                <br />
                el ordenador en su trabajo
              </div>
            </div>
            <div className="buttom__right--text">pero solo</div>
            <div className="introduccion-04__buttom--right">
              <img className="buttom__right--img" src="/04/ico_02.png" />
              <div
                onClick={showPanelVisiblity}
                className="buttom__right--img-panel"
              >
                <img
                  className="buttom__right--img-mas"
                  src="/generals/ico+.png"
                />
              </div>
              <div
                className={showPanel ? "panel-text-04" : "panel-text-04-hide"}
              >
                <div className="bottom__left--number">46%</div>
                <div className="bottom__left--number-text">
                  conoce los programas que utiliza en su trabajo habitual
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="introduccion-04__barra"></div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Introduccion02;
