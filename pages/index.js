import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Home = () => {
  const next_page = "/introduccion-02";
  const prev_page = "no";
  return (
    <Layout>
      <div className="img-portada">
        <div className="img-portada-logo">
          <img
            className="img-portada-logo__img"
            src="/01/logo-blanco-portada.png"
          />
        </div>
        <div className="img-portada-texto">
          Salud <strong>Digital</strong>
        </div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Home;
