"use client"

import { React, useState } from "react";
import "@/styling/Phc.css";
import "@/styling/Aluguer.css";

import Background from "@/assets/images/aluguer/spaas-bg.jpg"
import Image from "next/image";
import Servidores from "@/assets/images/aluguer/saas-server.jpeg"
import PHCForm from "@/components/PHCForm";
import WhySpaas from "@/components/whySpaas.js";

import Storage from "@/assets/images/aluguer/saas-storage.jpeg"
import Network from "@/assets/images/aluguer/saas-network.jpg"
import Library from "@/assets/images/aluguer/saas-library.png"
import Workstation from "@/assets/images/aluguer/saas-workstation.jpeg"

function Spare() {
  const [selectedOption, setSelectedOption] = useState("firstOption");

  const renderOption = () => {
    switch (selectedOption) {
      case "firstOption":
        return (
          <div className="option">
            <Image src={Servidores}></Image>
            <p>
              A Dziva garante que você tenha em mãos o equipamento que precisa
              para manter seus servidores funcionando ao mais alto nível. A
              partir de estoques que contam com mais de 850 mil itens
              multimarcas, as nossas peças renovadas, as quais passam por testes
              rigorosos, estão disponíveis para instalação imediata no seu
              sistema.
            </p>
          </div>
        );
      case "secondOption":
        return (
          <div className="option">
            <p>
              A Dziva oferece equipamentos de storage renovados de confiança
              garantida, assegurando que seus dados estejam sempre seguros. Ao
              substituir ou fazer o upgrade com o nosso equipamento que posui
              garantia de qualidade, você está dando mais uma vida para a
              infraestrutura preexistente e evitando atualizações
              desnecessárias.{" "}
            </p>
            <Image src={Storage}></Image>
          </div>
        );
      case "thirdOption":
        return (
          <div className="option">
            <Image src={Network}></Image>
            <p>
              A experiência trabalhando com diversos fabricantes nos possibilita
              fornecer suporte para redes com qualquer configuração. Nossos
              abrangentes serviços garantirão que seus sistemas mantenham o
              desempenho ideal utilizando peças de reposição, todas cobertas
              pelo nosso suporte no período pós-garantia.{" "}
            </p>
          </div>
        );
      case "fourthOption":
        return (
          <div className="option">
            <p>
              Manter a sua library atualizada e com todo o suporte necessário
              não precisa ser caro. A Dziva ajudará você a atingir todas as
              metas de desempenho, economia e sustentabilidade através dos
              nossos serviços completos para libraries, fornecendo o equipamento
              que você precisa, na hora necessária.
            </p>
            <Image src={Library}></Image>
          </div>
        );
      case "fifthOption":
        return (
          <div className="option">
            <Image src={Workstation}></Image>
            <p>
              O nosso amplo estoque de peças de reposição, distribuídas a partir
              de mais de 330 locais de armazenamento, nos possibilita fornecer
              praticamente todos os modelos de workstations existentes para os
              mais variados locais do mundo. Quando se deparar com falhas,
              garantiremos que as peças cheguem até você em tempo recorde,
              preservando a continuidade das suas atividades empresariais e o
              orçamento.{" "}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="main">
      <Image src={Background} className="background-image"></Image>
      <div className="banner-info management">
        <h1>Spare as a Service, SPaaS™</h1>
      </div>
        <div className="gestao-content">
          <h3>
            Tenha as peças de reposição certas, no lugar e na hora que precisar
          </h3>
          <p>
            Compreendemos que cada empresa está inserida num contexto
            específico, mas, numa economia cada vez mais digital, a necessidade
            de equipamentos de data center e suporte relacionado é universal. Em
            parceria com a Evernex, trazemos um serviço exclusivo para atender
            às necessidades dos gerentes de TI: com o Spare as a Service, SPaaS,
            as peças de reposição requeridas chegarão até você, quando e onde
            forem necessárias. Enviamos peças de reposição para todo territorio
            nacional em tempo recorde e aos melhores preços do mercado,
            garantindo assim a continuidade das suas atividades empresariais de
            forma econômica.
          </p>
        </div>
        <WhySpaas/>
        <div className="container">
        <div className="more-gestao">
          <div className="more-gestao-options">
            <p onClick={() => setSelectedOption("firstOption")}>Servidores</p>
            <p onClick={() => setSelectedOption("secondOption")}>Storages</p>
            <p onClick={() => setSelectedOption("thirdOption")}>Equipamentos de Rede</p>
            <p onClick={()=> setSelectedOption("fourthOption")}>Libraries</p>
            <p onClick={()=> setSelectedOption("fifthOption")}>Workstations</p>
          </div>
          {renderOption()}
        </div>
        </div>
        <div className="red-bar">

        </div>
<PHCForm/>
    </div>
  );
}

export default Spare;
