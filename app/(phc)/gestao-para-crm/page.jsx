"use client";
import { React, useState } from "react";
import Image from "next/image";
import YouTube from "react-youtube";
import Monitoring from "@/assets/images/phc-software-crm-mz.jpg";
import Automation from "@/assets/images/software-crm-phc-mz.jpg";
import Law from "@/assets/images/crm-phc-software.jpg";
import PHCForm from "@/components/PHCForm";
import "@/styling/Phc.css";
import Background from "@/assets/images/phc/crm-bg.jpg";

//Options
import First1 from "@/assets/images/phc/crm/CRM-Funcionalidades-gerais.jpg";
import Second1 from "@/assets/images/phc/crm/CRM-Orientado-para-o-comercial.jpg";
import Third1 from "@/assets/images/phc/crm/CRM-Orientado-para-o-diretor-de-vendasjpg.jpg";

import First2 from "@/assets/images/phc/crm/CRM-Analises-e-mapas.jpg";
import Second2  from "@/assets/images/phc/crm/CRM-Orientado-para-o-comercial.jpg";
import Third2 from "@/assets/images/phc/crm/CRM-PHC-CS-BPM-Desktop-e-Web.jpg";
function CRM() {
  const [selectedOption, setSelectedOption] = useState("firstOption");
  const videoId = "utUoVlohPa8";

  const renderOption = () => {
    switch (selectedOption) {
      case "firstOption":
        return (
          <div className="option">
            <ul>
              <li>Integração com Ignios, MailChimp e LinkedIn</li>
              <li>Integração com a agenda Outlook e Office 365</li>
              <li>Criação e parametrização de campanhas de marketing</li>
              <li>
                Gestão integrada da força de vendas e da atividade comercial
              </li>
              <li>Envio direto de mensagens SMS (módulo PHC CS SMS Desktop)</li>
              <li>
                Gestão de eventos organizados pela empresa e respetivas
                inscrições
              </li>
              <li>
                Alinhado com os novos modelos de gestão de vendas orientada por
                dados (data-driven)
              </li>
              <li>
                Ligação ao processador de texto para criação de cartas ou
                etiquetas com base em informação registada na base de dados
              </li>
            </ul>

            <Image src={First1}></Image>
          </div>
        );
      case "secondOption":
        return (
          <div className="option">
            <ul>
              <li>Agenda e visitas sob controlo</li>
              <li>Introdução de relatórios de visitas</li>
              <li>Marcação e planeamento de visitas</li>
              <li>Registo detalhado dos contactos comerciais</li>
              <li>
                Registo das notas de encomenda e posterior tratamento
                estatístico
              </li>
              <li>
                Agendamento automático de visitas para a condução dos negócios
              </li>
              <li>
                Gestão avançada de negócios que funciona como agregador de tudo
                o que está relacionado com o mesmo (registos dos concorrentes,
                as várias versões das propostas, todos os contatos e visitas
                realizados, entre outros)
              </li>
              <li>
                Monitor 360 do vendedor onde é possível acompanhar toda a
                atividade comercial no telemóvel
              </li>
              <li>
                Elaboração e envio de propostas, orçamentos personalizados
              </li>
              <li>
                Controlo de todos os contatos, pessoas e potenciais clientes
              </li>
              <li>Gestão e monitorização de chamadas telefónicas</li>
            </ul>

            <Image src={Second1}></Image>
          </div>
        );
      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>Objetivos de vendas</li>
              <li>Tabelas de preços por contactos e clientes</li>
              <li>Gestão de perspetivas da equipa de vendas</li>
              <li>
                Listas de marketing, campanhas e respetivo plano de visitas
              </li>
              <li>
                Gestão de ficheiro de comerciais (comissões, supervisores, áreas
                de acesso, etc.)
              </li>
              <li>
                Controlo e impressão da agenda do comercial ou do telemarketing
              </li>
              <li>
                Controlo de custos por vendedor, cliente, mailing, campanha,
                etc.
              </li>
              <li>
                Gestão dos negócios da empresa e respetivo circuito interno,
                desde as perspetivas de negócio, visitas, documentos de
                faturação, à análise individual dos negócios de cada comercial
              </li>
              <li>
                Consulta das comunicações efetuadas com o contacto e respetivas
                pessoas
              </li>
              <li>
                Controlo das visitas realizadas ou agendadas, facultativas ou
                obrigatórias
              </li>
            </ul>

            <Image src={Third1} className="phone"></Image>
          </div>
        );
      default:
        return null;
    }
  };

  const [selectedOption2, setSelectedOption2] = useState("firstOption");
  const renderOption2 = () => {
    switch (selectedOption2) {
      case "firstOption":
        return (
          <div className="option">
            <ul>
              <li>
                Análises em tempo real (como número de visitas, contactos
                realizados ou valor dos negócios)
              </li>
              <li>
                Obtenção da análise de atividade de um período, isto é, as
                visitas realizadas, perspetivas em aberto e negócios fechados
              </li>
              <li>
                Dashboard totalmente dedicado ao comercial, com métricas e
                indicadores que apoiam a concretização dos objetivos
              </li>
              <li>
                Dashboard totalmente dedicado ao diretor de vendas, com métricas
                e indicadores que ajudam a ter uma visão macro da equipa ou qual
                o elemento que necessita de mais apoio
              </li>
            </ul>

            <Image src={First2}></Image>
          </div>
        );
      case "secondOption":
        return (
          <div className="option">
            <ul>
              <li>Envio de chamadas telefónicas via SMS</li>
              <li>Enviar informação de eventos, reuniões, etc. via SMS</li>
              <li>Execução de ações de marketing direto via SMS</li>
              <li>Envio de SMS a clientes, fornecedores ou colaboradores</li>
              <li>Arquivo de todos os SMS enviados a partir do Software PHC</li>
              <li>
                Comunicação de novos lançamentos, produtos, promoções, ofertas
                por SMS aos clientes
              </li>
              <li>
                Informar clientes do estado de encomendas ou que a data limite
                de pagamento da fatura se aproxima
              </li>
            </ul>

            <Image src={Second2}></Image>
          </div>
        );

      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>Ações multiutilizador</li>
              <li>
                Predefinição de quem executa essas ações e quanto tempo tem para
                o fazer
              </li>
              <li>
                Definição da sequência de ações a serem executadas para
                determinado processo de workflow
              </li>
              <li>
                Possibilidade de agregar documentos digitais a cada processo com
                o módulo Documentos Desktop
              </li>
              <li>
                Possibilidade de configurar para quem deve escalar uma ação que
                não foi cumprida num determinado prazo
              </li>
              <li>
                Possibilidade de definir informação específica de cada processo,
                ou seja, criar variáveis com informação relativa ao processo em
                particular
              </li>
              <li>
                Visualize um ecrã de monitor onde cada pessoa pode saber todas
                as ações que tem para executar, bem como a totalidade da
                informação agregada ao respetivo workflow
              </li>
              <li>
                Integração com a gestão de correspondência da PHC para permitir
                iniciar workflows relativos a entrada e saída de correspondência
              </li>
              <li>
                Possibilidade de consultar todo o histórico de ações de cada
                processo, quem fez o quê e quando, quanto tempo demorou, etc.
              </li>
              <li>
                Avisos para o Smartphone (PHC Notify): com uma licença PHC CS
                BPM Web pode ainda ativar o seu PHC CS Notify e configurar os
                seus workflows para receber avisos das ações a executar
              </li>
            </ul>

            <Image src={Third2}></Image>
          </div>
        );


      default:
        break;
    }
  };

  return (
    <div>
      <Image src={Background} className="background-image management"></Image>
      <div className="banner-info management">
        <h1>Software de Gestão para CRM</h1>

        <p>
          Gestão da força comercial e automatização de ações de marketing para
          aumentar as suas vendas
        </p>
        {/* <div className="buttons">
            <button className="more-info">Saber mais</button>
          </div> */}
      </div>
      <div className="gestao-content">
        <h3>
          A máxima produtividade
          <span> para as suas equipas comerciais e de marketing </span>
        </h3>
        <p>
          Execute ações de angariação de novos clientes, automatize ações de
          marketing, monitorize a atividade da equipa de vendas com os atuais e
          potenciais clientes e analise a informação em tempo real, de forma a
          antecipar-se à concorrência e a reagir com a máxima agilidade às
          mudanças do mercado.
        </p>
        <YouTube videoId={videoId} className="youtube" />
      </div>
      <div className="gestao-description">
        <h3>
          Eleve o desempenho das suas equipas de vendas
          <span>com o Software PHC CS</span>
        </h3>
        <div className="description-options">
          <div className="option">
            <div className="option-text">
              <Image src={Monitoring}></Image>
              <h4>Visão global de clientes </h4>
              <p>
                Tenha toda a informação comercial centralizada, com acesso
                imediato ao historial detalhado de cada contacto – propostas,
                pontos de interação com cada área da empresa, produtos vendidos,
                visitas realizadas, perspetivas de negócio –, controlando todos
                os assuntos relacionados com cada cliente a partir da sua ficha
                de contacto.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Automation}></Image>
              <h4>Automatização de processos de gestão e de marketing</h4>
              <p>
                Garanta um planeamento eficaz dos recursos e melhore a
                organização do tempo – com acesso constante às agendas,
                controladas de forma automática, e ao desempenho comercial das
                suas equipas de vendas –, e tire o máximo partido da
                automatização de ações de marketing, planeando lançamentos de
                campanhas de produtos/serviços no tempo.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Law}></Image>
              <h4>Vendas data-driven</h4>
              <p>
                Obtenha informação valiosa sobre o seu negócio – evolução das
                vendas e comparação com anos anteriores, lucro e rentabilidade
                de cada produto, total de visitas em número e tempo despendido,
                total de negócios em curso – e conheça a real eficácia das suas
                campanhas de marketing – número de pessoas abrangidas, propostas
                efetuadas e valor potencial dos negócios basados em campanhas –,
                imprescindíveis para a tomada de decisões estratégicas.
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
            Funcionalidades Gerais
          </p>
          <p onClick={() => setSelectedOption("secondOption")}>
            Orientado para o comercial{" "}
          </p>
          <p onClick={() => setSelectedOption("thirdOption")}>
            Orientado para o diretor de vendas{" "}
          </p>
        </div>
        {renderOption()}
      </div>
      <div className="more-gestao">
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption2("firstOption")}>
            Gestão Documental
          </p>
          <p onClick={() => setSelectedOption2("secondOption")}>
            Documentos eletrónicos{" "}
          </p>
          <p onClick={() => setSelectedOption2("thirdOption")}>Factoring </p>
        </div>
        {renderOption2()}
      </div>

      <PHCForm />
    </div>
  );
}

export default CRM;
