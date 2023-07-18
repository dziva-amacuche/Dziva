import React from "react";
import styled from "styled-components";
import Image from "next/image";
import HappyClients from "@/assets/images/happy-clients.jpg";

function AboutUs() {
  return (
    <About>
      <main>
        <h1>EIS Um pouco sobre nós</h1>
        <div className="about-container">
          <div className="text-container">
            <div className="about-text">
              <p>
                DZIVA é uma empresa que opera na área de Tecnologias de
                Informação e comunicação (TICs), com objectivo de contribuir
                para a eficiência na gestão de empresas.
                <br /> Nosso trabalho consiste em oferecer soluções completas em
                TICs, que permitam eliminar custos e automatizar tarefas do
                dia-a-dia contribuindo, assim, para um aumento real da
                produtividade dos nossos clientes
              </p>

              <div className="more-container">
                <div className="mission">
                  <h2>Nossa Missão</h2>
                  <p>
                    Oferecer soluções completas de tecnologia de informação que
                    permitam automatizar tarefas do dia-a-dia das empresas,
                    garantindo assim um aumento real da produtividade dos nossos
                    clientes
                  </p>
                </div>
                <div className="mission">
                  <h2>Nossa Visão</h2>
                  <p>
                    Tornarmo-nos uma referência na Província de Maputo e em
                    Moçambique através na prestação de serviços na área de
                    Informática e Tecnologias de informação de comunicação.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container">
            <Image className="img" src={HappyClients}></Image>
          </div>
        </div>
      </main>
    </About>
  );
}

const About = styled.section`
  height: 100vh;
  background-color: #ffffff;
display: flex;
  width: 100%;

  //RESPONSIVENESS FOR MOBILE
  @media only screen and (max-width: 768px) {
    height: fit-content;
    main {
      margin: 2rem !important;
    }
    .about-container {
      display: flex;
      flex-direction: column;
      margin-left: -1.2rem;
    }
    .text-container {
      margin: 1rem !important;
      width: 100% !important;
    }
    p {
      font-size: 19px;
    }
    .image-container {
      width: 100% !important;
      margin: -2rem 1rem !important;

      .img {
        filter: contrast(50%);
        width: 100% !important;
      }
    }
  }
  main {
    margin: 4rem;
    text-align: justify;
    h1 {
      text-align: center;
    }

    .about-container {
      display: flex;
      width: 100%;
      .text-container {
        display: block;
        width: 50%;
        margin: 4rem;

        .more-container {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-top: 4rem;

          .mission {
            width: 45%;
          }
        }
      }
      .image-container {
        width: 50%;
        text-align: center;
        .img {
          width: 90%;
          height: 75%;
          display: block;
          margin: 4rem auto;
        }
      }
    }
  }
`;

export default AboutUs;
