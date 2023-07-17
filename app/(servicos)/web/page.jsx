import React from "react";
import Image from "next/image";
import Background from "@/assets/images/web-bg.jpg"
import "@/styling/app.css";

function Web() {
  return (
    <>
      <Image src={Background} className="background-image web"></Image>
      <div className="coming-soon">
        <h1>DISPONIVEL BREVEMENTE</h1>
      </div>
      <div className="banner-info">
        <h1>Web</h1>
        <ul>
          <li>
            <a>Domínios </a>
          </li>
          <li>
            <a>Hospedagem </a>
          </li>
          <li>
            <a>Design de Websites e Aplicações</a>
          </li>
        </ul>
      </div>
    </>
  );
}


export default Web;
