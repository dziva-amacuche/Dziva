import React from "react";
import Image from "next/image";
import styled from "styled-components";
import stock from "../assets/icons/stock.svg";
import time from "../assets/icons/24hour.svg";
import list from "../assets/icons/list.svg";
import delivery from "../assets/icons/delivery.svg";

function WhyUs() {
  return (
    <More>
      <div className="more-container">
        {" "}
        <h1>O nosso diferencial</h1>
        <div className="main-container">
          <div className="value-container">
            <Image className="img" src={stock}></Image>
            <p>
              Disponibilizamos equipamento no momento em que este se faz
              necessário, pois mantemos os nossos artigos mais solicitados em
            </p>
          </div>
          <div className="value-container">
            <Image className="img"  src={time}></Image>
            <p>
              Fornecemos suporte pelo serviço de acompanhamento 24/7, presencial
              ou remoto para garantir a eficiência do trabalho a todo momento.
            </p>
          </div>
          <div className="value-container">
            <Image className="img" src={list}></Image>
            <p>
              Fazemos o levantamento preventivo dos equipamentos ou materiais a
              obter como forma de garantir a aquisição de material de qualidade
              e que seja adequado ao cliente e às suas necessidades.
            </p>
          </div>
          <div className="value-container">
            <Image className="img" src={delivery}></Image>
            <p>Garantimos a entrega de materiais e equipamentos à domicílio </p>
          </div>
        </div>
      </div>
    </More>
  );
}

const More = styled.div`
  height: 100vh;
  overflow: auto;

    //RESPONSIVENESS FOR MOBILE
    @media only screen and (max-width: 768px) {
      overflow:hidden;
      height: 110vh;
      .more-container{
        margin: 0 0 !important;

      }
    .main-container{
      display: flex;
      flex-direction: column;
      margin: 2rem -4rem !important;
    }
    p{
      text-align: center !important;
      font-size:20px;
    }

    .value-container{
      margin: 1rem 0;
    }
    }

  background-color: #f8f8f8;
  .more-container {
    margin: 0 8rem;
    h1 {
      text-align: center;
      font-size: 32px;
      margin-top: 4rem;
    }
    .main-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      justify-content: space-between;
      margin-top: 5rem;
      .value-container {
        width: 30rem;
        .img {
          width: 3rem;
          height: 3rem;
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 1rem;
        }
        p {
          width: 20rem;
          text-align: justify;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
`;

export default WhyUs;
