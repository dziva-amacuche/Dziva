import React from "react";
import styled from "styled-components";

function Banner() {
  return (
    <Details>
      <div className="text-container">
        <h1>Soluções informáticas para a sua empresa</h1>
        <p>
          Mantenha seu negócio funcionando perfeitamente e deixe os
          especialistas em tecnologia da Dziva ajudá-lo, fornecendo as melhores
          soluções informáticas para o seu negócio
        </p>
        <div className="buttons">
          <button className="more-info">Saber mais</button>
          <button className="contact-button">Entre em contacto</button>
        </div>
      </div>
    </Details>
  );
}

const Details = styled.div`
  top: 12rem;
  position: absolute;
  width: 30%;
  left: 10rem;

  //RESPONSIVENESS FOR MOBILE
  @media only screen and (max-width: 768px) {
    top: 8rem;
    left: 0rem;
    width: 100%;
    .text-container {
      margin-left: 2rem;
      h1 {
        width: 100%;
      }

      p {
        font-size: 18px !important;
        font-weight: bold;
        width: 80%;
      }

      .contact-button {
        margin-left: 0.3rem;
      }
    }
  }

  h1 {
    color: #dc241f;
    width: 85%;
  }

  p {
    margin-top: 2rem;
    color: #ffffff;
    font-size: 16px;
  }

  .buttons {
    margin-top: 2rem;
    display: flex;
    gap: 0.3rem;
    justify-content: space-between;
    width: 80%;
    button {
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      border-radius: 3px;
      font-size: 15px;
    }

    .more-info {
      border: 1px solid #636363;
      background-color: #636363;
      width: 6rem;
      color: white;
      transition: background-color 0.25s ease-in-out;
    }
    .more-info:hover {
      background-color: #3c3e3d;
      border: 1px solid #3c3e3d;
    }
    .contact-button {
      width: 11rem;
      border: 1px solid #dc241f;
      background-color: #d32c27;
      color: white;
      transition: background-color 0.25s ease-in-out;
    }

    .contact-button:hover {
      background-color: #91100b;
      color: white;
      border: 1px solid #91100b;
    }
  }
`;

export default Banner;
