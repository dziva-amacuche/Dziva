"use client";
import { React, useState } from "react";
import Image from "next/image";
import YouTube from "react-youtube";
import Monitoring from "@/assets/images/phc-mz-ao-agilizar-vencimentos.jpg";
import Automation from "@/assets/images/phc-mz-ao-trabalho-simplificado.jpg";
import Law from "@/assets/images/phc-mz-ao-seguranca-e-higiene.jpg";
import PHCForm from "@/components/PHCForm";
import "@/styling/Phc.css";
import Background from "@/assets/images/phc/seguranca-bg.jpg";



function Seguranca() {
  const [selectedOption, setSelectedOption] = useState("firstOption");
  const videoId = "utUoVlohPa8";

  const renderOption = () => {
    switch (selectedOption) {
      case "firstOption":
        return (
          <div className="option">
            <ul>
              <li>Códigos de vencimento totalmente configuráveis</li>
              <li>
                Processamento do vencimento com base em múltiplos critérios de
                seleção, quer de funcionários, quer de códigos de vencimento a
                considerar
              </li>
            </ul>

            <Image></Image>
          </div>
        );
      case "secondOption":
        return (
          <div className="option">
            <ul>
              <li>
                Processamento automático de vencimentos com base em múltiplos
                critérios
              </li>
              <li>Transferências bancárias de vencimentos</li>
              <li>
                Integração automática na contabilidade de documentos de
                faturação, compras, recibos, pagamentos
              </li>
              <li>
                Emissão de recibos de vencimento (individualmente ou em lote) e
                envio do PDF por email para o funcionário protegido por password
              </li>
            </ul>

            <Image ></Image>
          </div>
        );
      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>Gestão centralizada de acidentes de trabalho</li>
              <li>Gestão de doenças profissionais</li>
              <li>Acompanhamento e controlo de exames médicos necessários</li>
            </ul>

            <Image></Image>
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
        <h1>Vencimentos e Segurança no Trabalho</h1>

        <p>
          Mais agilidade no processamento salarial e na gestão de serviços de
          segurança, higiene e saúde no trabalho (SHST){" "}
        </p>
        {/* <div className="buttons">
            <button className="more-info">Saber mais</button>
          </div> */}
      </div>
      <div className="gestao-content">
        <h3>
          Torne a sua empresa mais produtiva
          <span>com o Software PHC CS </span>
        </h3>
        <p>
          Desenvolvido para simplificar tarefas e apoiá-lo no cumprimento das
          obrigações fiscais, o PHC CS ajuda-o a centralizar a informação
          relativa a cada colaborador, do processamento salarial ao desempenho
          de obrigações inerentes à segurança, higiene e saúde no trabalho.
        </p>
      </div>
      <div className="gestao-description">
        <div className="description-options">
          <div className="option">
            <div className="option-text">
              <Image src={Monitoring}></Image>
              <h4>Agilize o processamento de vencimentos </h4>
              <p>
                Ganhe maior flexibilidade e rapidez ao automatizar o
                processamento vencimentos e transferências bancárias. Alcance
                maior liberdade operacional ao gerir e enviar todas as
                comunicações legais à AT relacionadas com os vencimentos para
                máxima produtividade.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Automation}></Image>
              <h4>Reduza o trabalho administrativo</h4>
              <p>
                Reduza drasticamente o tempo dedicado ao trabalho administrativo
                de todas as etapas de processamento salarial. Consulte, corrija
                ou valide qualquer recebido de vencimento, assegurando o
                cumprimento das obrigações declarativas da empresa com
                ferramentas desenvolvidas para uma gestão mais eficiente.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Law}></Image>
              <h4>
                Simplifique a gestão de segurança, higiene e saúde no trabalho
              </h4>
              <p>
                Garanta a gestão de serviços de segurança, higiene e saúde no
                trabalho (SHST) abrangendo todos os colaboradores contra riscos
                profissionais, de acordo com a legislação. Faça a gestão de
                todas as áreas relacionadas com este tema, desde os exames
                médicos até aos relatórios anuais.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="more-gestao">
        <h3>
          <span>O software que o ajuda a proporcionar </span>a melhor
          experiência de compra aos seus clientes
        </h3>
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption("firstOption")}>
            Pessoal Operações Diárias
          </p>
          <p onClick={() => setSelectedOption("secondOption")}>
            Pessoal Operações Mensais
          </p>
          <p onClick={() => setSelectedOption("thirdOption")}>
            Segurança, Higiene e Saúde no Trabalho (SHST){" "}
          </p>
        </div>
        {renderOption()}
      </div>

      <PHCForm />
    </div>
  );
}

export default Seguranca;
