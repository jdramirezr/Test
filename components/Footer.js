import React from "react";
import Link from "next/link";

const Footer = ({ prev_page, next_page }) => {
  return (
    <footer
      className={
        prev_page === "no" && next_page === "no" ? "footer-hide" : "footer"
      }
    >
      <div className="footer-arrow-left">
        <Link href={prev_page}>
          <a>
            <img
              className={
                prev_page === "no" ? "footer-arrow" : "footer-arrow-left__img"
              }
              src="/theme/flecha-izq.png"
            />
          </a>
        </Link>
      </div>
      <div className="footer-arrow-right">
        <Link href={next_page}>
          <a>
            <img
              className={
                next_page === "no" ? "footer-arrow" : "footer-arrow-right__img"
              }
              src="/theme/flecha-der.png"
            />
          </a>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
