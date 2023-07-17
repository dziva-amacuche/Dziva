"use client";
import { React, useState } from "react";
import Image from "next/image";
import Banner from "@/assets/images/phc/logistica/banner.png";
import Monitoring from "@/assets/images/phc-software-crm-mz.jpg";
import Automation from "@/assets/images/software-crm-phc-mz.jpg";
import Law from "@/assets/images/crm-phc-software.jpg";
import PHCForm from "@/components/PHCForm";
import "@/styling/Phc.css";
import Background from "@/assets/images/phc/industrias-bg.jpg";

//Options
import First1 from "@/assets/images/phc/logistica/gerais.png";
import Second1 from "@/assets/images/phc/logistica/mercadoria.png";
import Third1 from "@/assets/images/phc/logistica/expedicao.png";
import Fourth1 from "@/assets/images/phc/logistica/armazem.png";

function Logistica() {
  const [selectedOption, setSelectedOption] = useState("firstOption");
  const videoId = "qLWb1mcUPFQ";

  const renderOption = () => {
    switch (selectedOption) {
      case "firstOption":
        return (
          <div className="option">
            <ul>
              <li>
                Totalmente integrado com o módulo de gestão e respetivos stocks
              </li>
              <li>
                Configuração, representação e desenho de armazém a três
                dimensões
              </li>
              <li>Visualização de stocks por alvéolo e por zona</li>
              <li>
                Gestão e controlo do circuito documental de aprovisionamento
              </li>
              <li>Gestão do circuito de entradas e saídas de mercadorias</li>
              <li>Gestão de faturação integrada no processo de encomendas</li>
              <li>
                Geração de números de séries provisórios na entrada de
                mercadoria (se possuir o Módulo Equipamento desktop ou Suporte
                desktop)
              </li>
              <li>Utilização opcional de Stock por localização</li>
              <li>Elaborar inventários físicos</li>
              <li>
                Gestão de acessos por utilizador a um armazém ou grupos de
                armazéns
              </li>
            </ul>

            <Image src={First1}></Image>
          </div>
        );
      case "secondOption":
        return (
          <div className="option">
            <ul>
              <li>
                Gestão e controlo do circuito documental de aprovisionamento
              </li>
              <li>
                Gestão dos custos de armazém e da localização da mercadoria (de
                forma a melhorar o aprovisionamento, racionalizar o espaço
                físico e automatizar o processo de expedição)
              </li>
              <li>Definição de prioridades de utilização por alvéolo</li>
              <li>Criação de listas de arrumação das mercadorias</li>
            </ul>

            <Image src={Second1}></Image>
          </div>
        );
      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>Monitor gráfico do armazém e monitor de "picking list"</li>
              <li>
                Monitor de expedição com gestão de moradas de entrega por
                cliente
              </li>
              <li>Aviar, imprimir e controlar Picking Lists não aviadas</li>
              <li>Gestão de várias moradas de entrega por cliente</li>
            </ul>

            <Image src={Third1}></Image>
          </div>
        );
      case "fourthOption":
        return (
          <div className="option">
            <ul>
              <li>Relação de transferências entre alvéolos</li>
              <li>Definição de armazém multinível, ou seja com vários pisos</li>
              <li>
                Gestão de agrupamentos de armazéns e de centros de logística
              </li>
              <li>
                Criação de corredores, zonas, alvéolos, gavetas, prateleiras,
                entre outros, no interior de um ou vários armazéns
              </li>
              <li>
                Duplicação de um armazém e toda a estrutura que compõe o mesmo
              </li>
              <li>Geração automática de alvéolos</li>
              <li>Visualização de stock por alvéolo e/ou por zona</li>
            </ul>

            <Image src={Fourth1}></Image>
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
        <h1>Software de Gestão para Logística e Distribuição</h1>

        <p>
          Acelere a gestão da cadeia logística e assegure a máxima rentabilidade
        </p>
        {/* <div className="buttons">
            <button className="more-info">Saber mais</button>
          </div> */}
      </div>
      <div className="gestao-content">
        <h3>
          <span>
            Tenha total controlo sobre os artigos rececionados, armazenados,
            transportados e expedidos{" "}
          </span>
        </h3>
        <p>
          A Solução de Logística e Distribuição do PHC CS ajuda-o a gerir as
          necessidades de distribuição da sua empresa – desde a cadeia de
          abastecimento ao controlo de fornecedores, passando pela gestão de
          stocks e armazéns – e a executá-las com a máxima eficácia.
        </p>
        <div className="img-container">
        <Image className="img" src={Banner}></Image>
        </div>      </div>
      <div className="gestao-description">
        <h3>
          <span>Otimize o circuito de entrada e saída de mercadorias </span> com
          o Software PHC CS
        </h3>
        <div className="description-options">
          <div className="option">
            <div className="option-text">
              <Image src={Monitoring}></Image>
              <h4>Processos de gestão logística mais ágeis</h4>
              <p>
                Garanta uma inventariação correta de todos os artigos em
                armazém, controle todos os circuitos de entrada e saída de
                mercadoria e assegure o cumprimento de todos os prazos de
                entrega de encomendas.{" "}
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Automation}></Image>
              <h4>Visão completa de todas as etapas do circuito </h4>
              <p>
                Tenha um controlo 360 do negócio, com informação centralizada,
                sempre atualizada e fidedigna – por exemplo, acerca da ocupação
                dos alvéolos e da rotatividade dos artigos aí armazenados –,
                essencial para apoiar decisões estratégicas em tempo real.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Law}></Image>
              <h4>Gestão comercial e financeira de áreas vitais </h4>
              <p>
                Graças à integração da Solução com a sua gestão empresarial, tem
                total controlo sobre clientes e vendas, fornecedores e compras e
                tesouraria e bancos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="more-gestao">
        <h3>
          <span>
            O software que lhe garante vantagem competitiva num mercado
            extremamente concorrencial{" "}
          </span>
        </h3>
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption("firstOption")}>
            Funcionalidades gerais
          </p>
          <p onClick={() => setSelectedOption("secondOption")}>
            Receção e arrumação da mercadoria
          </p>
          <p onClick={() => setSelectedOption("thirdOption")}>
            Expedição de mercadorias
          </p>
          <p onClick={() => setSelectedOption("fourthOption")}>
            Gestão logística do armazém
          </p>
        </div>
        {renderOption()}
      </div>
      <PHCForm />
    </div>
  );
}

export default Logistica;
