import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Stock from "@/assets/images/aluguer/locacao-brand.png";
import Worldwide from "@/assets/images/aluguer/locacao-maintance.png";
import Help from "@/assets/images/aluguer/locacao-support.png";

function whyLocacao() {
  return (
    <BENEFITS>
      <div className="container">
        <h3>
          Porque utilizar os serviços de locação de equipamentos oferecidos pela
          Dziva
        </h3>
        <div className="motives-container">
          <div className="motive">
            <Image src={Stock}></Image>
            <h4>850 mil+</h4>
            <p>Itens multimarcas em estoque</p>
          </div>
          <div className="motive">
            <Image src={Worldwide}></Image>
            <h4>360 mil+</h4>
            <p>
              Suporte fornecido para 360 mil+ sistemas espalhados por todo o
              mundo{" "}
            </p>
          </div>
          <div className="motive">
            <Image src={Help}></Image>
            <h4>24/7/365</h4>
            <p>Disponibilidade de suporte especializado </p>
          </div>
        </div>
      </div>
    </BENEFITS>
  );
}
2;
const BENEFITS = styled.div`
  height: 60vh;
  width: 100%;
  margin-bottom: 4rem;

  .container {
    display: flex;
    flex-direction: column;

    align-items: center;
    padding-top: 4rem;
    gap: 2rem;

    h3 {
      font-size: 28px;
      color: red;
    }

    .motives-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 4rem;

      .motive {
        width: 20rem;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        gap: 1rem;
        border-radius: 5px;
        box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
        transform: scale(1);
        transition: opacity 0.3s, transform 0.3s;
      }
      .motive:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export default whyLocacao;
