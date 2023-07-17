"use client";
import { React, useState } from "react";
import Image from "next/image";
import Banner from "@/assets/images/phc/restauracao/banner.jpg";
import Monitoring from "@/assets/images/phc-software-crm-mz.jpg";
import Automation from "@/assets/images/software-crm-phc-mz.jpg";
import Law from "@/assets/images/crm-phc-software.jpg";
import PHCForm from "@/components/PHCForm";
import "@/styling/Phc.css";
import Background from "@/assets/images/phc/restauracao-bg.jpg";

//Options
import First1 from "@/assets/images/phc/restauracao/gestao.jpg";
import Second1 from "@/assets/images/phc/restauracao/artigos.png";
import Third1 from "@/assets/images/phc/restauracao/terminal.jpg";
import Fourth1 from "@/assets/images/phc/restauracao/monotorizacao.png";
import Fifth1 from "@/assets/images/phc/restauracao/analises.jpg";

function Restauracao() {
  const [selectedOption, setSelectedOption] = useState("firstOption");
  const videoId = "qLWb1mcUPFQ";

  const renderOption = () => {
    switch (selectedOption) {
      case "firstOption":
        return (
          <div className="option">
            <ul>
              <li>Gestão de mesas e setores</li>
              <li>
                Gestão de reservas e ocupações, com diferentes cores para
                identificar o status da mesa
              </li>
              <li>Divisão da conta no ato do pagamento</li>
              <li>
                Transferência da conta e consumos entre setores do restaurante
              </li>
              <li>
                Estado dos pedidos no terminal com base no feedback do centro de
                preparação
              </li>
              <li>
                Possibilidade de desenhar as áreas do restaurante com elementos
                gráficos como a planta da sala, a disposição das mesas, etc.
              </li>
            </ul>

            <Image src={First1}></Image>
          </div>
        );
      case "secondOption":
        return (
          <div className="option">
            <ul>
              <li>Menus e respetiva definição de preços e doses disponíveis</li>
              <li>Gestão dos extras e acompanhamentos com preços próprios</li>
              <li>Parametrização de descontos e promoções</li>
              <li>Definição de hierarquia de artigos</li>
              <li>
                Várias taxas de IVA por artigo (consumo no restaurante e
                take-away)
              </li>
              <li>
                Preços de venda diferentes por setor (café na esplanada tem um
                preço, no restaurante tem outro)
              </li>
              <li>
                Possibilidade de ter preços de venda e teclados diferentes por
                horário (happy hour)
              </li>
            </ul>

            <Image src={Second1}></Image>
          </div>
        );
      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>Ecrã tátil personalizável</li>
              <li>Integração com terminais portáteis X64</li>
              <li>
                Configuração personalizada dos botões (cor, dimensão, texto,
                imagem, mostra preço, mostra stock)
              </li>
              <li>
                Monitor de cozinha e do bar (com alertas visuais e sonoros)
              </li>
            </ul>

            <Image src={Third1}></Image>
          </div>
        );
      case "fourthOption":
        return (
          <div className="option">
            <ul>
              <li>
                Integração com o módulo PHC CS Gestão para ainda mais
                funcionalidades como fornecedores, tesouraria e bancos
              </li>
              <li>Definição dos centros de preparação (cozinha, bar)</li>
              <li>Controlo de acesso por funcionário</li>
              <li>
                Controlo das anulações de artigos na conta com registo do motivo
              </li>
              <li>
                Configuração de alerta visual das mesas sem atendimento há mais
                de X minutos
              </li>
            </ul>

            <Image src={Fourth1}></Image>
          </div>
        );
      case "fifthOption":
        return (
          <div className="option">
            <ul>
              <li>Histórico de linhas apagadas / alteradas nos documentos</li>
              <li>
                Definição da impressora alocada a cada local (bar, cozinha) com
                talão personalizado a cada tipo de pedido
              </li>
              <li>Controlo de movimentos de caixa</li>
              <li>
                Dashboard com dezenas de indicadores relativos a artigos,
                funcionários, mesas
              </li>
              <li>Painel de bordo com a situação atual do seu restaurante</li>
            </ul>

            <Image src={Fifth1}></Image>
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
        <h1>Software de Gestão para Restauração</h1>

        <p>
          Proporcione o melhor atendimento e controle as diferentes áreas do seu
          restaurante{" "}
        </p>
        {/* <div className="buttons">
            <button className="more-info">Saber mais</button>
          </div> */}
      </div>
      <div className="gestao-content">
        <h3>
          <span>
            Simplifique processos de gestão e aumente a qualidade do serviço que
            presta
          </span>
        </h3>
        <p>
          A Solução de Restauração do PHC CS ajuda-o a ultrapassar estes
          desafios e a diferenciar-se da concorrência, assegurando-lhe uma
          gestão operacional diária simples e eficaz – essencial para ter
          clientes fiéis e satisfeitos – e um backoffice desenvolvido para
          otimizar procedimentos internos de compras e controlo de custos – base
          para uma situação financeira sustentável e orientada para o
          crescimento.
        </p>
        <div className="img-container">
          <Image className="img" src={Banner}></Image>
        </div>{" "}
      </div>
      <div className="gestao-description">
        <h3>
          <span>Eleve a gestão do seu estabelecimento </span> com o Software PHC
          CS
        </h3>
        <div className="description-options">
          <div className="option">
            <div className="option-text">
              <Image src={Monitoring}></Image>
              <h4>Gestão completa e integrada de estabelecimentos</h4>
              <p>
                Tenha total controlo sobre as áreas vitais do seu negócio –
                clientes e vendas, fornecedores e compras, tesouraria e bancos –
                e otimize os seus processos internos de compras e controlo de
                custos.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Automation}></Image>
              <h4>Controlo de todas as áreas do restaurante </h4>
              <p>
                Desde o ato de reserva, até à gestão do próprio espaço, passando
                pela excelência do atendimento e culminado na eficácia do
                serviço prestado.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Law}></Image>
              <h4>Visão global do negócio </h4>
              <p>
                Controle, ao pormenor, a situação financeira e comercial do seu
                estabelecimento ou conjunto de estabelecimentos, com acesso a
                análises detalhadas de vendas e estatísticas de consumos, que
                lhe permitem monitorizar a rentabilidade do negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="more-gestao">
        <h3>
          <span>
            O software que se adapta ao dia a dia do seu estabelecimento
          </span>
        </h3>
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption("firstOption")}>
            Gestão de Restaurante
          </p>
          <p onClick={() => setSelectedOption("secondOption")}>
            Artigos e Menus{" "}
          </p>
          <p onClick={() => setSelectedOption("thirdOption")}>
            Terminal de Venda e Equioamentos{" "}
          </p>
          <p onClick={() => setSelectedOption("fourthOption")}>
            Monotorização e Controlo
          </p>
          <p onClick={() => setSelectedOption("fifthOption")}>
            Análises e Impressões{" "}
          </p>
        </div>
        {renderOption()}
      </div>
      <PHCForm />
    </div>
  );
}

export default Restauracao;
