import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Submenu from "../components/Submenu-ne";

const Programas = () => {
  const prev_page = "no";
  const next_page = "no";
  return (
    <Layout>
      <Submenu></Submenu>
      <div className="avanzado-17">
        <img className="avanzado-14-number" src="/generals/02-number.png" />
        <div className="avanzado-17-content__tilte">
          Bibliografía
          <div>___</div>
        </div>
        <div className="avanzado-17-content__text">
          1.Montero Delgado JA, Merino Alonso FJ, Monte Boquet E, Ávila de Tomás
          JF, Cepeda Díez JM. Competencias digitales clave de los profesionales
          sanitarios. Key digital skills for healthcare professionals. Educacion
          Medica. 2019;
          <br />
          <br />
          2. Montero Delgado JCDJADJ. Las 6 competencias digitales de los
          profesionales sanitarios [Internet]. Farmacia Hospitalaria Digital,
          editor. 2019 [cited 2020 Mar 31]. Available from:
          https://www.researchgate.net/publication/330764348_Las_6_competencias_digitales_de_los_
          profesionales_sanitarios
          <br />
          <br />
          3. Ferrari A, Punie Y, Brečko BN. DIGCOMP: A Framework for Developing
          and Understanding Digital Competence in Europe [Internet]. Spain; 2013
          [cited 2020 Mar 30]. Available from: http://europa.eu/.
          <br />
          <br />
          4. Arandojo Morales M. e-nfermería. Las nuevas tecnologías al servicio
          de la Enfermería del siglo XXI. Revista Tesela [Internet]. 2018 [cited
          2020 Mar 24];23. Available from:
          http://www.index-f.com/tesela/ts23/ts11612.php
          <br />
          <br />
          5. Choque Larraurri R. Las nuevas competencias TIC en el personal de
          los servicios de salud - Dialnet. Revista de Comunicación y Salud:
          RCyS [Internet]. 2011 [cited 2020 Mar 30];1(2):47–60. Available from:
          https://dialnet.unirioja.es/servlet/articulo?codigo=3817721
          <br />
          <br />
          6. Fernández ValdésI MZMRUGP. Normas de competencias informacionales
          para el Sistema Nacional de Información en Salud. Rev ACIMED
          [Internet]. 2008 [cited 2020 Mar 30];17(4). Available from:
          http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1024-
          94352008000400003
          <br />
          <br />
          7. Westra BL, Delaney CW. Informatics Competencies for Nursing and
          Healthcare Leaders. 2008.
          <br />
          <br />
          8. HIMSS. TIGER Initiative for Technology and Health Informatics
          Education [Internet]. [cited 2020 Mar 30]. Available from:
          https://www.himss.org/tiger-initiative-technology-and-health-informatics-education
        </div>
      </div>
      <Footer next_page={next_page} prev_page={prev_page}></Footer>
    </Layout>
  );
};
export default Programas;
