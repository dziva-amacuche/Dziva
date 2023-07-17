"use client";
import { React, useState } from "react";
import Image from "next/image";
import YouTube from "react-youtube";
import Monitoring from "@/assets/images/phc-software-crm-mz.jpg";
import Automation from "@/assets/images/software-crm-phc-mz.jpg";
import Law from "@/assets/images/crm-phc-software.jpg";
import PHCForm from "@/components/PHCForm";
import "@/styling/Phc.css";
import Background from "@/assets/images/phc/retalho-bg.jpg";

//Options
import First1 from "@/assets/images/phc/retalho/terminal.jpg";
import Second1 from "@/assets/images/phc/retalho/servico.jpg";
import Third1 from "@/assets/images/phc/retalho/online.jpg";

import First2 from "@/assets/images/phc/retalho/promocoes.jpg";
import Second2 from "@/assets/images/phc/retalho/impressoes.jpg";
import Third2 from "@/assets/images/phc/retalho/analises.jpg";

import First3 from "@/assets/images/phc/retalho/fechos.jpg";
import Second3 from "@/assets/images/phc/retalho/backoffice.jpg";

function Retalho() {
  const [selectedOption, setSelectedOption] = useState("firstOption");
  const videoId = "kY4W0LdvsgQ";

  const renderOption = () => {
    switch (selectedOption) {
      case "firstOption":
        return (
          <div className="option">
            <ul>
              <li>Gestão dos talões de depósito</li>
              <li>Suporte para moeda estrangeira</li>
              <li>Gestão de tabelas de preços por cliente</li>
              <li>Possibilidade de registo de encomendas e orçamentos</li>
              <li>
                Vendas diferidas, pode ir fazendo compras em vários terminais e
                pagar tudo no final
              </li>
              <li>
                Gestão de devoluções/trocas (em dinheiro, vale de reembolso) e
                artigos para oferta
              </li>
              <li>
                Possibilidade de usar ecrã tátil – "Touch Screen" muito
                personalizável quer ao nível das várias áreas quer dos teclados
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
                Suporta artigos compostos, artigos com números série, artigos
                com cores e tamanhos e artigos com lotes
              </li>
              <li>Gestão de artigos com referências alternativas</li>
              <li>Gestão de múltiplos códigos de barra</li>
            </ul>

            <Image src={Second1}></Image>
          </div>
        );
      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>Loja online com total integração com o backoffice</li>
              <li>
                Múltiplos templates personalizáveis e que definem o aspeto final
                da sua loja
              </li>
              <li>
                Sincronização automática de clientes, encomendas, artigos e
                preços
              </li>
              <li>
                Possibilidade de integração de pagamentos por entidades e
                referências
              </li>
            </ul>

            <Image src={Third1}></Image>
          </div>
        );
      default:
        return null;
    }
  };

  const [selectedOption2, setSelectedOption2] = useState("firstOption2");

  const renderOption2 = () => {
    switch (selectedOption2) {
      case "firstOption2":
        return (
          <div className="option">
            <ul>
              <li>Gestão de promoções, campanhas e descontos</li>
              <li>
                Várias formas de pagamento configuráveis, tais como cheque,
                dinheiro, pagamento a cartão
              </li>
              <li>Gestão de vales de desconto e cheques-oferta</li>
            </ul>

            <Image src={First2}></Image>
          </div>
        );
      case "secondOption2":
        return (
          <div className="option">
            <ul>
              <li>Personalização do talão de impressão</li>
              <li>Talão diferenciado para artigos de oferta</li>
              <li>Possibilidade de impressão de etiquetas</li>
              <li>Impressões em vários idiomas</li>
            </ul>

            <Image src={Second2}></Image>
          </div>
        );
      case "thirdOption2":
        return (
          <div className="option">
            <ul>
              <li>Diversas estatísticas e listagens de vendas</li>
              <li>
                Monitor do terminal de venda (sessões abertas, funcionários,
                valores por terminal)
              </li>
              <li>
                Dashboard dedicado à loja com dezenas de indicadores por loja,
                por artigo, funcionário, terminal
              </li>
              <li>Listagens X1, X2 e Z</li>
            </ul>

            <Image src={Third2}></Image>
          </div>
        );
      default:
        return null;
    }
  };

  const [selectedOption3, setSelectedOption3] = useState("firstOption3");

  const renderOption3 = () => {
    switch (selectedOption3) {
      case "firstOption3":
        return (
          <div className="option">
            <ul>
              <li>Definição do fundo de caixa</li>
              <li>Gestão de documentos suspensos</li>
              <li>Gestão de recibos de adiantamentos e regularizações</li>
              <li>
                Gestão e controlo dos movimentos de caixa, transferências entre
                caixas
              </li>
              <li>
                Controlo de fechos de caixa, saldos, vendas a crédito e contas
                correntes
              </li>
            </ul>

            <Image src={First3}></Image>
          </div>
        );
      case "secondOption3":
        return (
          <div className="option">
            <ul>
              <li>
                Após instalação do PHC CS e-Commerce B2C, pode colocar os seus
                produtos à venda online em cinco minutos
              </li>
              <li>Loja online com total integração com o BackOffice</li>
              <li>
                Múltiplos templates personalizáveis, que definem o aspeto final
                da sua loja
              </li>
              <li>
                Sincronização automática de clientes, encomendas, artigos e
                preços
              </li>
            </ul>

            <Image src={Second3}></Image>
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
        <h1>Software de Gestão para Retalho</h1>

        <p>
          Controle de perto as suas operações de loja e veja o seu negócio
          crescer{" "}
        </p>
        {/* <div className="buttons">
            <button className="more-info">Saber mais</button>
          </div> */}
      </div>
      <div className="gestao-content">
        <h3>
          <span>
            Proporcione experiências únicas e memoráveis em todos os pontos de
            contacto
          </span>
        </h3>
        <p>
          Maximize o desempenho e a rentabilidade da sua loja ou conjunto de
          lojas, tenha toda a informação – desde a frente de loja até ao armazém
          – integrada, e/ou expanda o seu negócio para novos mercados através
          uma loja online, com um software totalmente configurável e
          personalizável, que pode ser adaptado ao seu negócio e à sua forma
          única de trabalhar.
        </p>
        <YouTube videoId={videoId} className="youtube" />
      </div>
      <div className="gestao-description">
        <h3>
          <span>Torne a sua loja mais competitiva </span> com o Software PHC CS
        </h3>
        <div className="description-options">
          <div className="option">
            <div className="option-text">
              <Image src={Monitoring}></Image>
              <h4>
                Garanta uma gestão rigorosa de processos em loja e armazém
              </h4>
              <p>
                Torne a sua loja mais competitiva, com um controlo total de toda
                a atividade do seu negócio - vendas, desempenhos de loja e
                colaboradores, documentação, comunicação entre lojas, análises e
                estatísticas, stocks, caixa e contas, promoções e descontos.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Automation}></Image>
              <h4>
                Tenha total controlo comercial e financeiro da sua empresa{" "}
              </h4>
              <p>
                Garanta uma gestão ágil e rigorosa – clientes e fornecedores,
                contas correntes e stocks, encomendas e orçamentos, folhas de
                obra e guias de transporte, faturação e compras, recibos e
                pagamentos, cobranças e Dossiers Internos, tesouraria e bancos,
                emissão de documentos e comunicação com a Autoridade Tributária
                – quaisquer que sejam as necessidades do seu negócio.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Law}></Image>
              <h4>
                Beneficie de uma loja de eCommerce integrada com o software e
                pronta a usar
              </h4>
              <p>
                Chegue a mais clientes e mercados de forma rápida e direta,
                proporcionando-lhes uma experiência memorável, onde quer que
                esteja. O eCommerce é uma tendência incontornável e está na hora
                de diversificar os seus canais de venda.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="more-gestao">
        <h3>
          <span>O software que se adapta ao dia a dia do seu negócio </span>
        </h3>
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption("firstOption")}>
            Terminal de venda
          </p>
          <p onClick={() => setSelectedOption("secondOption")}>
            Artigos e Serviços
          </p>
          <p onClick={() => setSelectedOption("thirdOption")}>Loja Online </p>
        </div>
        {renderOption()}
      </div>
      <div className="more-gestao">
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption2("firstOption2")}>
            Pagamentos e Promoções
          </p>
          <p onClick={() => setSelectedOption2("secondOption2")}>Impressões</p>
          <p onClick={() => setSelectedOption2("thirdOption2")}>Análises</p>
        </div>
        {renderOption2()}
      </div>
      <div className="more-gestao">
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption3("firstOption3")}>
            Controlo e fechos de caixa
          </p>
          <p onClick={() => setSelectedOption3("secondOption3")}>
            Integração com o BackOffice
          </p>
        </div>
        {renderOption3()}
      </div>

      <PHCForm />
    </div>
  );
}

export default Retalho;
