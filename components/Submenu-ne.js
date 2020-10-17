import React from "react";
import Link from "next/link";

const Submenu = () => {
  return (
    <div className="submenu">
      <ul className="submenu__ul">
        <li className="submenu__li">
          <Link href="/nivel-avanzado-12">
            <a className="submenu__a">Objetivos</a>
          </Link>
        </li>
        <li className="submenu__li">
          <Link href="/nivel-avanzado-13">
            <a className="submenu__a">Metodología</a>
          </Link>
        </li>
        <li className="submenu__li">
          <Link href="/nivel-avanzado-14">
            <a className="submenu__a">Profesorado</a>
          </Link>
        </li>
        <li className="submenu__li">
          <Link href="/nivel-avanzado-15">
            <a className="submenu__a">Cursos y contenido</a>
          </Link>
        </li>
        <li className="submenu__li">
          <Link href="/nivel-avanzado-17">
            <a className="submenu__a">Bibliografia</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Submenu;
