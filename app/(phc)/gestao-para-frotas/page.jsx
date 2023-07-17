"use client";
import { React, useState } from "react";
import Image from "next/image";
import Banner from "@/assets/images/phc/frota/banner.jpg";
import Monitoring from "@/assets/images/phc-software-crm-mz.jpg";
import Automation from "@/assets/images/software-crm-phc-mz.jpg";
import Law from "@/assets/images/crm-phc-software.jpg";
import PHCForm from "@/components/PHCForm";
import "@/styling/Phc.css";
import Background from "@/assets/images/phc/frota-bg.jpg";

//Options
import First1 from "@/assets/images/phc/frota/operacionais.jpg";
import Second1 from "@/assets/images/phc/frota/analises.jpg";


function Humano() {
  const [selectedOption, setSelectedOption] = useState("firstOption");
  const videoId = "qLWb1mcUPFQ";

  const renderOption = () => {
    switch (selectedOption) {
      case "firstOption":
        return (
          <div className="option">
<ul>
  <li>Gestão abrangente e pormenorizada da frota automóvel e motoristas</li>
  <li>Gestão de todos os acessórios de cada viatura</li>
  <li>Gestão de sinistros, manutenções e revisões de cada viatura</li>
  <li>Historial de revisões e manutenções</li>
  <li>Controlo e gestão dos custos e utilizadores da frota</li>
  <li>Emissão automática de compras a partir de gastos</li>
  <li>Controlo de seguros e “leasings” (e respetivos km)</li>
  <li>Template para ligação ao cartão Galp Frota</li>
  <li>Template para ligação aos registos da Via Verde</li>
</ul>


            <Image src={First1}></Image>
          </div>
        );
      case "secondOption":
        return (
          <div className="option">
<ul>
  <li>Gestão abrangente e pormenorizada da frota automóvel e motoristas</li>
  <li>Gestão de todos os acessórios de cada viatura</li>
  <li>Gestão de sinistros, manutenções e revisões de cada viatura</li>
  <li>Historial de revisões e manutenções</li>
  <li>Controlo e gestão dos custos e utilizadores da frota</li>
  <li>Emissão automática de compras a partir de gastos</li>
  <li>Controlo de seguros e “leasings” (e respetivos km)</li>
  <li>Template para ligação ao cartão Galp Frota</li>
  <li>Template para ligação aos registos da Via Verde</li>
  <li>Estatísticas globais e “rankings” de viaturas</li>
  <li>Análise de datas e Km em “Leasing” e “ALD”</li>
  <li>Análises gráficas de evolução de gastos</li>
  <li>Análises e rankings de médias e evolução de consumos e custos</li>
  <li>Análise de informação por centro de custo</li>
  <li>Estatísticas de viaturas, departamentos e viagens</li>
  <li>Dashboard com inúmeros indicadores e métricas</li>
</ul>


            <Image src={Second1}></Image>
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <div>
      <Image src={Background} className="background-image management"></Image>
      <div className="banner-info management">
        <h1>Software para a Gestão de Frotas</h1>

        <p>
          Controle a evolução dos custos e a gestão da manutenção do seu parque
          automóvel.
        </p>
        {/* <div className="buttons">
            <button className="more-info">Saber mais</button>
          </div> */}
      </div>
      <div className="gestao-content">
        <h3>
          <span>A gestão completa da frota automóvel da sua empresa com </span>{" "}
          aumento de produtividade e redução de custos
        </h3>
        <p>
          Simplifique a gestão do seu parque, com acesso constante a informação
          atualizada sobre as viaturas, motoristas, viagens e acessórios, e
          obtenha a máxima rentabilidade, assegurando total controlo sobre
          manutenções, prazos de seguros, quilómetros de leasing e custos.{" "}
        </p>
        <div className="img-container">
        <Image className="img" src={Banner}></Image>
        </div>      </div>
      <div className="gestao-description">
        <h3>
          <span>Assegure a </span> máxima rentabilidade
          <span> da sua frota com o Software PHC CS</span>
        </h3>
        <div className="description-options">
          <div className="option">
            <div className="option-text">
              <Image src={Monitoring}></Image>
              <h4>Controlo total de veículos e utilizadores da frota</h4>
              <p>
                Tenha toda a informação sobre cada viatura – dados do
                certificado de matrícula, acessórios instalados, historial
                completo de revisões e manutenções, custos médios e mensais e
                quilómetros rodados – centralizada e disponível em tempo real.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Automation}></Image>
              <h4>Análises gráficas pormenorizadas</h4>
              <p>
                Aceda a um conjunto alargado de análises sobre a sua frota, como
                a evolução anual por tipo de gasto para determinado centro de
                custo ou referente a determinado modelo. Saiba, a qualquer
                momento, quais são as viaturas mais dispendiosas, com maior
                média de consumo por km, que percorrem mais km ou com km
                percorridos por contrato de leasing ou ALD.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Law}></Image>
              <h4>Gestão completa de seguros e sinistros</h4>
              <p>
                Através das fichas de viaturas, tenha acesso ao historial
                completo de sinistros – motorista, local do acidente, dados do
                outro veículo, entre outros – e saiba antecipadamente que
                seguros estão prestes a expirar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="more-gestao">
        <h3>
          <span>O software que se apadta ao dia a dia da sua </span>
          frota
        </h3>
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption("firstOption")}>Operacionais</p>
          <p onClick={() => setSelectedOption("secondOption")}>
            Dashboard e análises
          </p>
        </div>
        {renderOption()}
      </div>

      <PHCForm />
    </div>
  );
}

export default Humano;
