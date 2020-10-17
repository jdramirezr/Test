import React from "react";
import Head from "next/head";
import Menu from "./Menu";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/theme/favicon.jpg"
        />
      </Head>
      <header className="header">
        <div className="header-left">
          <div className="header-left__logo">
            <Link href="/">
              <a>
                <img src="/theme/logo-header.png" alt="logo " />
              </a>
            </Link>
          </div>
          <div className="header-left__text">
            Salud <strong>Digital</strong>
          </div>
        </div>
        <div className="header-right">
          <Menu></Menu>
        </div>
      </header>
    </>
  );
};
export default Header;
