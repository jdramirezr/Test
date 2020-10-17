import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Submenu from "../components/Submenu-ne";
import Link from "next/link";

const Programas = () => {
  const prev_page = "/nivel-avanzado-14";
  const next_page = "/nivel-especializado-18";

  return (
    <Layout>
      <Submenu></Submenu>
      <div className="avanzado-15">
        <img className="avanzado-14-number" src="/generals/02-number.png" />
        <div className="avanzado-14-content__tilte">
          Cursos y contenidos
          <div className="avanzado-13-content__separator">___</div>
        </div>
        <div className="avanzado-15-panel">
          <Link href="/01">
            <a>
              <img className="avanzado-15-img" src="/15/curso01.png" />
            </a>
          </Link>
          <Link href="/02">
            <a>
              <img className="avanzado-15-img" src="/15/curso02.png" />
            </a>
          </Link>
          <Link href="/03">
            <a>
              <img className="avanzado-15-img" src="/15/curso03.png" />
            </a>
          </Link>
          <Link href="/04">
            <a>
              <img className="avanzado-15-img" src="/15/curso04.png" />
            </a>
          </Link>
          <Link href="/05">
            <a>
              <img className="avanzado-15-img" src="/15/curso05.png" />
            </a>
          </Link>
          <Link href="/06">
            <a>
              <img className="avanzado-15-img" src="/15/curso06.png" />
            </a>
          </Link>
        </div>
      </div>

      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
