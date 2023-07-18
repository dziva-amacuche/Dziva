"use client";

import { React, useState } from "react";
import "@/styling/Phc.css";
import "@/styling/Aluguer.css";

import Description from "@/assets/images/aluguer/locacao-description.jpg";

import Background from "@/assets/images/aluguer/locacao-bg.jpg";
import Image from "next/image";
import PHCForm from "@/components/PHCForm";
import WhyLocacao from "@/components/whyLocacao.js";

import Servidores from "@/assets/images/aluguer/saas-server.jpeg";
import Storage from "@/assets/images/aluguer/saas-storage.jpeg";
import Network from "@/assets/images/aluguer/saas-network.jpg";
import Library from "@/assets/images/aluguer/saas-library.png";
import Workstation from "@/assets/images/aluguer/saas-workstation.jpeg";

import Arista from "@/assets/images/aluguer/partners/Arista_Logo.png";
import Brocade from "@/assets/images/aluguer/partners/Brocade_Logo.png"
import Cisco from "@/assets/images/aluguer/partners/CISCO_Logo.png"
import DellEMC from "@/assets/images/aluguer/partners/DellEMC_Logo.png"
import Fujitsu from "@/assets/images/aluguer/partners/Fujitsu_Logo.png"
import Hitachi from "@/assets/images/aluguer/partners/Hitachi_Logo.png"
import HPE from "@/assets/images/aluguer/partners/HPE_Logo.png"
import Huawei from "@/assets/images/aluguer/partners/Huawei_logo.png"
import IBM from "@/assets/images/aluguer/partners/IBM_logo.png"
import Juniper from "@/assets/images/aluguer/partners/Juniper_logo.png"
import Lenovo from "@/assets/images/aluguer/partners/Lenovo_logo.png"
import NetApp from "@/assets/images/aluguer/partners/NetApp_logo.jpg"
import Overlandtandberg from "@/assets/images/aluguer/partners/Overlandtandberg_logo.png"
import Quantum from "@/assets/images/aluguer/partners/Quantum_logo.png"
import SunOracle from "@/assets/images/aluguer/partners/SunOracle_logo.png"
import Supermicro from "@/assets/images/aluguer/partners/Supermicro_logo.png"

function page() {
  const [selectedOption, setSelectedOption] = useState("firstOption");

  const renderOption = () => {
    switch (selectedOption) {
      case "firstOption":
        return (
          <div className="option">
            <Image src={Servidores}></Image>
            <p>
              A locação de servidores fornecida pela Dziva é a solução perfeita
              para atender às necessidades de equipamentos de curto prazo e de
              uma forma que se encaixa no seu orçamento. Os nossos estoques
              locais de servidores espalhados por todo o mundo estão disponíveis
              e prontos para a implantação imediata no seu data center, quando e
              onde você precisar. Os serviços de locação da Dziva possibilitam a
              conclusão de qualquer projeto que exija aumento da capacidade do
              servidor, além de evitarem os altos investimentos que seriam
              feitos num equipamento novo. Também oferecemos a opção de
              desenvolvimento do seu próprio SLA, garantindo que você pague
              apenas pelo serviço que precisa. Ao utilizar o serviço de locação
              da Dziva, você pode planejar melhor o futuro com a garantia de que
              nosso equipamento chegará até você dentro dos prazos e no local
              estabelecido.
            </p>
          </div>
        );
      case "secondOption":
        return (
          <div className="option">
            <p>
              Encontre a solução ideal para qualquer exigência de storage de
              curto prazo com o serviço de locação da Dziva, o qual possibilita
              a conclusão de qualquer projeto que exija aumento da capacidade de
              storage e evita os altos investimentos que seriam feitos num
              equipamento novo. Como estão prontos para envio a partir de nossos
              locais de armazenamento espalhados por todo o mundo, você se livra
              dos atrasos causados pela escassez de componentes e contratempos
              associados. Também oferecemos a opção de desenvolvimento de SLAs
              exclusivos, garantindo que você pague apenas pelo serviço que
              precisa. Ao utilizar o serviço de locação da Dziva, você pode
              planejar melhor o futuro com a garantia de que nosso equipamento
              chegará até você dentro dos prazos e no local estabelecido.{" "}
            </p>
            <Image src={Storage}></Image>
          </div>
        );
      case "thirdOption":
        return (
          <div className="option">
            <Image src={Network}></Image>
            <p>
              A locação de equipamentos de rede fornecida pela Dziva é a solução
              perfeita para atender às necessidades de equipamentos de curto
              prazo e de uma forma que se encaixa no seu orçamento. Os nossos
              estoques locais de ativos de rede espalhados por todo o mundo
              estão disponíveis e prontos para a implantação imediata no seu
              data center, quando e onde você precisar. Os serviços de locação
              da Dziva possibilitam a conclusão de qualquer projeto que exija
              aumento da capacidade dos equipamentos de rede e evita os altos
              investimentos que seriam feitos num equipamento novo. Também
              oferecemos a possibilidade de desenvolvimento de SLAs exclusivos,
              garantindo que você pague apenas pelo serviço que precisa. Ao
              utilizar o serviço de locação da Dziva, você pode planejar melhor
              o futuro com a garantia de que nosso equipamento chegará até você
              dentro dos prazos e no local estabelecido.{" "}
            </p>
          </div>
        );
      case "fourthOption":
        return (
          <div className="option">
            <p>
              O serviço de locação da Dziva atende perfeitamente a qualquer
              exigência de equipamento de curto prazo sem a necessidade de um
              alto investimento. Alugando os nossos ativos de library de
              qualidade garantida, os quais estão disponíveis para implantação
              imediata em todo o mundo, você preserva o seu orçamento destinado
              à TI enquanto possibilita à sua empresa expandir as operações e
              serviços. Também oferecemos a opção de especificação das condições
              durante o desenvolvimento do seu próprio SLA, garantindo que você
              pague apenas pelo serviço que precisa. Ao utilizar o serviço de
              locação da Dziva, você pode planejar melhor o futuro com a
              garantia de que nosso equipamento chegará dentro dos prazos e no
              local estabelecido.{" "}
            </p>
            <Image src={Library}></Image>
          </div>
        );
      case "fifthOption":
        return (
          <div className="option">
            <Image src={Workstation}></Image>
            <p>
              A locação de workstations fornecida pela Evernex é a solução ideal
              para atender às necessidades de equipamentos de curto prazo e de
              maneira que o seu orçamento destinado à TI não seja comprometido.
              Enviados diretamente de nossos amplos estoques de equipamentos
              multimarcas que são integralmente testados, espalhados por todo o
              mundo, os estoques locais de workstations estão disponíveis e
              prontos para a implantação imediata no seu data center, quando e
              onde você precisar. Os serviços de locação da Evernex possibilitam
              a conclusão de qualquer projeto que exija aumento da capacidade de
              workstations e evita os altos investimentos que seriam feitos num
              equipamento novo. Também oferecemos a opção de desenvolvimento de
              um SLA exclusivo, garantindo que você pague apenas pelo serviço de
              que precisa. Ao utilizar o serviço de locação da Evernex, você
              pode planejar melhor o futuro com a garantia de que nosso
              equipamento chegará até você dentro dos prazos e no local
              estabelecido.
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
        <h1>Locação de Equipamentos de TI</h1>
      </div>
      <div className="description-container">
        <Image className="description-image" src={Description}></Image>
        <div className="description-content">
          <h3>
            Obtenha o equipamento necessário para a conclusão do seu projeto{" "}
          </h3>
          <p>
            Numa economia cada vez mais digital, as exigências dos data centers
            por equipamentos estão em constante aumento e diversificação. Tomar
            a decisão de quais e quantos equipamentos comprar é uma etapa
            crucial antes de investir na compra de novos ativos. No entanto,
            muitas empresas estão aproveitando os serviços de locação de
            equipamentos de TI, os quais possibilitam flexibilidade e controle
            para adquirir o que precisam e maximizar a produtividade dos data
            centers sem comprometer os orçamentos destinados à TI.
          </p>
          <p>
            O serviço de locação de equipamentos oferecido pela Dziva é uma
            maneira segura e econômica de atender às necessidades de TI de curto
            ou longo prazo. Se a sua empresa está executando um projeto com
            prazo determinado ou deseja testar um modelo específico antes de
            realizar o investimento definitivo, os nossos serviços globais de
            locação proporcionam a liberdade para que você amplie a capacidade
            através do acesso ao equipamento exigido. Os nossos contratos
            flexíveis e mensais permitem que você retome o controle do seu
            orçamento destinado a equipamentos de TI, mesmo nos casos em que ele
            é limitado. Além disso, o equipamento para locação geralmente dura
            várias vidas, o que o torna um dos caminhos mais sustentáveis para
            atender às suas necessidades.{" "}
          </p>
        </div>
      </div>

      <div className="partners-container">
        <h3>
          Alugamos e oferecemos suporte para equipamentos líderes de mercado
        </h3>
        <p>
          A partir dos nossos locais de armazenamento que contam com um estoque
          de mais de 850.000 itens, empresas podem acessar equipamentos de data
          center de todas as marcas líderes de mercado e que são integralmente
          testados e renovados. Todos os nossos equipamentos, tanto os
          disponibilizados para venda quanto para locação, são cobertos pela
          nossa garantia estendida de manutenção independente de maneira a
          garantir que você tenha a assistência especializada que precisa,
          quando e onde for necessário.
        </p>
        <div className="partners-names">
            <Image className="partner-logo" src={Arista}></Image>
            <Image className="partner-logo" src={Brocade}></Image>
            <Image className="partner-logo" src={Cisco}></Image>
            <Image className="partner-logo" src={DellEMC}></Image>
            <Image className="partner-logo" src={Fujitsu}></Image>
            <Image className="partner-logo" src={Hitachi}></Image>
            <Image className="partner-logo" src={HPE}></Image>
            <Image className="partner-logo" src={Huawei}></Image>
            <Image className="partner-logo" src={IBM}></Image>
            <Image className="partner-logo" src={Juniper}></Image>
            <Image className="partner-logo" src={Lenovo}></Image>
            <Image className="partner-logo" src={NetApp}></Image>
            <Image className="partner-logo" src={Overlandtandberg}></Image>
            <Image className="partner-logo" src={Quantum}></Image>
            {/* <Image className="partner-logo" src={Arista}></Image> */}
            <Image className="partner-logo" src={SunOracle}></Image>
            <Image className="partner-logo" src={Supermicro}></Image>



        </div>
      </div>

      <div className="container">
        <div className="more-gestao locacao">
          <div className="more-gestao-options">
            <p onClick={() => setSelectedOption("firstOption")}>Servidores</p>
            <p onClick={() => setSelectedOption("secondOption")}>Storages</p>
            <p onClick={() => setSelectedOption("thirdOption")}>
              Equipamentos de Rede
            </p>
            <p onClick={() => setSelectedOption("fourthOption")}>Libraries</p>
            <p onClick={() => setSelectedOption("fifthOption")}>Workstations</p>
          </div>
          {renderOption()}
        </div>
      </div>
      <div className="red-bar locacao"></div>
      <WhyLocacao />

      <PHCForm />
    </div>
  );
}

export default page;
