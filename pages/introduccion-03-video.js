import React from "react";
import Head from "next/head";
import Link from "next/link";

const Introduccion03Video = () => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/theme/favicon.jpg"
        />
        <title>Salud Digital</title>
      </Head>
      <Link href="/introduccion-03">
        <a className="introduccion03-video-x">X</a>
      </Link>
      <div className="introduccion03-video">
        <iframe
          className="introduccion03-video-iframe"
          frameBorder="0"
          src="https://player.vimeo.com/video/426274571?autoplay=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </>
  );
};
export default Introduccion03Video;
