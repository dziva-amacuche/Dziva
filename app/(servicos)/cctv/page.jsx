import React from "react";
import Background from "@/assets/images/cctv-bg.jpg"

import "@/styling/App.css";
import Image from "next/image";


function CCTV() {
  return (
    <>
      <Image src={Background} className="background-image"></Image>
      <div className="coming-soon">
        <h1>DISPONIVEL BREVEMENTE</h1>
      </div>
      <div className="banner-info">
        <h1>CCTV</h1>
        <ul>
          <li>
            <a>Projeto </a>
          </li>
          <li>
            <a>Instalação  </a>
          </li>
          <li>
            <a>Manutenção</a>
          </li>
        </ul>
      </div>


    </>
  )
}



export default CCTV