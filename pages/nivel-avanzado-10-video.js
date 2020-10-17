import React from "react";
import Head from "next/head";
import Link from "next/link";

const Avanzado10Video = () => {
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
      <Link href="/nivel-avanzado-10">
        <a className="introduccion03-video-x">X</a>
      </Link>
      <div className="introduccion03-video">
        <iframe
          className="introduccion03-video-iframe"
          width="100%"
          frameBorder="0"
          src="https://player.vimeo.com/video/430313655?autoplay=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </>
  );
};
export default Avanzado10Video;
