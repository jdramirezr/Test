import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);

  const showMenuVisiblity = () => {
    setShowMenu(showMenu ? false : true);
  };

  return (
    <nav className="header-navbar">
      <div onClick={showMenuVisiblity}>
        <img
          className="header-menu__img"
          src={
            showMenu ? "/theme/ico_cerrar.png" : "/theme/ico_hamburguesa.png"
          }
        />
      </div>
      <ul
        className={
          showMenu
            ? "header-navbar-mobile__ul"
            : "header-navbar-mobile__ul-hide"
        }
      >
        <li className="header-navbar__ul--li">
          <Link href="/">
            <a
              className={
                router.pathname === "/"
                  ? "header-menu__a header-menu__a--active"
                  : "header-menu__a header-menu__a--initial"
              }
            >
              Inicio
            </a>
          </Link>
        </li>
        <li className="header-navbar__ul--li">
          <Link href="/programas-07">
            <a
              className={
                router.pathname === "/programas-07"
                  ? "header-menu__a header-menu__a--active"
                  : "header-menu__a header-menu__a--initial"
              }
            >
              Programas
            </a>
          </Link>
        </li>
        <li className="header-navbar__ul--li">
          <Link href="/documentacion">
            <a
              className={
                router.pathname === "/documentacion"
                  ? "header-menu__a header-menu__a--active"
                  : "header-menu__a header-menu__a--initial"
              }
            >
              Documentación
            </a>
          </Link>
        </li>
      </ul>
      <ul className="header-navbar-desktop__ul">
        <li className="header-navbar__ul--li">
          <Link href="/">
            <a
              className={
                router.pathname === "/"
                  ? "header-menu__a header-menu__a--active"
                  : "header-menu__a header-menu__a--initial"
              }
            >
              Inicio
            </a>
          </Link>
        </li>
        <li className="header-navbar__ul--li">
          <Link href="/programas-07">
            <a
              className={
                router.pathname === "/programas-07"
                  ? "header-menu__a header-menu__a--active"
                  : "header-menu__a header-menu__a--initial"
              }
            >
              Programas
            </a>
          </Link>
        </li>
        <li className="header-navbar__ul--li">
          <Link href="/documentacion">
            <a
              className={
                router.pathname === "/documentacion"
                  ? "header-menu__a header-menu__a--active"
                  : "header-menu__a header-menu__a--initial"
              }
            >
              Documentación
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
