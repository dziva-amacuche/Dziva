import React from "react";
import Background from "@/assets/images/network-bg.jpg"

import "@/styling/app.css";
import Image from "next/image";

function Rede() {
  return (
    <>
      <Image src={Background} className="background-image"></Image>
      <div className="coming-soon">
        <h1>DISPONIVEL BREVEMENTE</h1>
      </div>
      <div className="banner-info">
        <h1>Rede</h1>
        <ul>
          <li>
            <a>Cabeamento Estruturado </a>
          </li>
          <li>
            <a>Projetos de Redes </a>
          </li>
          <li>
            <a>Instalação Wi-fi </a>
          </li>
          <li>
            <a>Cabeamento de Rede </a>
          </li>
          <li>
            <a>Certificação de rede </a>
          </li>
        </ul>
      </div>
    </>
  );
}


export default  Rede;
