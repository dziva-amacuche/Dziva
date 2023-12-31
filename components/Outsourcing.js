import React from "react";
import "@/styling/App.css";
import Outsourcing from "@/assets/images/outsourcing-ds.png";
import Remote from "@/assets/images/remote-support.jpg"
import Image from "next/image";

function OutsourcingTI() {
  return (
    <div className="option" id="outsourcing">
      <div className="option-header">
        <div className="content-container">
          <div className="option-text">
            <h2>Outsourcing de TI</h2>
            <p>
              A vantagem do suporte realizado com o outsourcing de TI vem da
              praticidade e facilidade da gestão do ambiente de TI estar
              totalmente centralizado em uma única empresa, nós somos
              especialistas em tecnologia da informação para negócios e iremos
              manter sua empresa operacional full time. Veja mais algumas
              vantagens técnicas e gerenciais ao contratar uma empresa de
              tecnologia da informação para cuidar da sua TI.
            </p>
          </div>
          <Image className="img" src={Outsourcing}></Image>
        </div>
      </div>
      <div className="rename">
        <h4>
          Com a terceirização de TI, sua empresa conta com profissionais sempre,
          atualizados, prontos para agir em sua empresa.
        </h4>
        <div className="rename-box">
          <Image className="img" src={Remote}></Image>
          <ul>
            <li>
              Profissionais qualificados para cada tecnologia da sua empresa
            </li>
            <li>Treinamento constantemente aplicado para novas tecnologias</li>
            <li>
              Cursos e certificações aplicadas para verificação de aptidão
              técnica
            </li>
            <li>Investimento em conhecimento e estudos</li>
            <li>Investimento em novas tecnologias para treinamento</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OutsourcingTI;
