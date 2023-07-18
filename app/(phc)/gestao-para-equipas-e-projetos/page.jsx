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
import Second2 from "@/assets/images/phc/crm/CRM-Orientado-para-o-comercial.jpg";
import Third2 from "@/assets/images/phc/crm/CRM-PHC-CS-BPM-Desktop-e-Web.jpg";

function Humano() {
  const [selectedOption, setSelectedOption] = useState("firstOption");
  const videoId = "qLWb1mcUPFQ";

  const renderOption = () => {
    switch (selectedOption) {
      case "firstOption":
        return (
          <div className="option">
            <ul>
              <li>
                Gestão de candidaturas e seleção de candidatos com base em
                múltiplos critérios
              </li>
              <li>
                Questionários personalizados adequados a cada tipo de
                candidatura
              </li>
              <li>
                Gestão de recrutamento (interno ou externo), definição de perfis
                e métricas de ponderação por forma a identificar os candidatos
                mais adequados a cada função
              </li>
              <li>Gestão simples de CV</li>
              <li>Histórico de entrevistas e candidatos</li>
              <li>
                Integração com a App PHC Notify para gestão de avisos (datas de
                entrevistas, feedback sobre o status da candidatura)
              </li>
              <li>
                Ferramenta de apoio à preparação e acompanhamento da entrevista
                por forma a ter acesso à informação do candidato e ao mesmo
                tempo ir tomando notas relevantes no decorrer da mesma
              </li>
              <li>Configuração e criação de templates de recrutamento</li>
              <li>
                Informação detalhada de todas as oportunidades de emprego
                através do portal de candidato
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
                Registo intuitivo de férias, faltas, horas extra e despesas
              </li>
              <li>Cálculo de valores a pagar à saída</li>
              <li>Registo e histórico do cadastro do funcionário</li>
              <li>Gestão completa de penhoras</li>
              <li>Gestão de rendimentos em espécie</li>
              <li>Gestão de despesas do pessoal</li>
              <li>Integração com os módulos de Gestão e Financeira</li>
            </ul>

            <Image src={Second1}></Image>
          </div>
        );
      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>Controlo de evolução de custos</li>
              <li>
                Dashboard com indicadores e métricas dos funcionários e
                departamentos
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
              <li>Avaliações de desempenho facilitadas</li>
              <li>
                Pormenores do curso, inscrições e gestão dos formandos com
                informação sempre atualizada e online
              </li>
              <li>
                Definição de cursos e respetivos conteúdos, assim como dos
                requisitos recomendados
              </li>
              <li>Gestão integrada de inscrições</li>
              <li>Gestão de formadores e formandos</li>
              <li>Controlo de certificações por formando</li>
              <li>
                Sugestão de formação com base nas avaliações de desempenho
              </li>
              <li>Informação completa de cada curso de formação</li>
            </ul>

            <Image src={First2}></Image>
          </div>
        );
      case "secondOption":
        return (
          <div className="option">
            <ul>
              <li>
                Gestão de equipas e do trabalho para um controlo total das
                tarefas
              </li>
              <li>Promoção do bem-estar de todos os colaboradores</li>
              <li>Rede colaborativa para agilização da comunicação interna</li>
            </ul>

            <Image src={Second2}></Image>
          </div>
        );

      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>Gestão administrativa de colaboradores</li>
              <li>Homepage com portal do colaborador</li>
              <li>
                Self-service do colaborador no registo de férias, faltas ou
                despesas, entre outros
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
        <h1>Software para a Gestão de Capital Humano</h1>

        <p>Gestão simplificada de recursos humanos para maior produtividade</p>
        {/* <div className="buttons">
            <button className="more-info">Saber mais</button>
          </div> */}
      </div>
      <div className="gestao-content">
        <h3>
          <span> Mais inovação a</span> gerir talento
        </h3>
        <p>
          A Solução de Gestão de Capital Humano do PHC CS ajuda-o a captar os
          melhores talentos e a retê-los com motivação e autonomia, ao mesmo
          tempo que contribui para a redução substancial do trabalho do
          departamento administrativo e gere, eficazmente, a colaboração entre
          equipas e de todo o ciclo de presença dos colaboradores na
          organização, potenciando a comunicação interna e a gestão de tarefas.
        </p>
        <YouTube videoId={videoId} className="youtube" />
      </div>
      <div className="gestao-description">
        <h3>
          Torne a sua empresa mais competitiva com o{" "}
          <span>com o Software PHC CS</span>
        </h3>
        <div className="description-options">
          <div className="option">
            <div className="option-text">
              <Image src={Monitoring}></Image>
              <h4>Redução e agilização do trabalho administrativo</h4>
              <p>
                Livre-se da carga administrativa inerente à gestão do
                processamento salarial, com uma ferramenta que automatiza
                tarefas, simplifica processos, garante o máximo rigor em todas
                as etapas do processamento e o apoio no cumprimento fácil das
                obrigações sociais e fiscais da empresa.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Automation}></Image>
              <h4>Otimização dos processos de gestão de recursos humanos</h4>
              <p>
                Recrute de forma inovadora e eficaz e potencie o desenvolvimento
                e a produtividade dos colaboradores com ações de formação e
                avaliações de desempenho, sem esquecer a gestão eficaz de todas
                as áreas relacionadas com a segurança, higiene e saúde no
                trabalho.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Law}></Image>
              <h4>Colaboradores mais autónomos, envolvidos e motivados</h4>
              <p>
                Imagine a possibilidade de ter a gestão de faltas, férias,
                despesas e horas extraordinárias a cargo dos próprios
                colaboradores, com dados sempre atualizados e centralizados, e
                uma rede colaborativa que fomenta a integração, a colaboração e
                a redução da troca de e-mails.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="more-gestao">
        <h3>
          <span>O software que o ajuda a ir mais longe na gestão de </span>
          Recursos Humanos
        </h3>
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption("firstOption")}>Recrutamento</p>
          <p onClick={() => setSelectedOption("secondOption")}>
            Pessoal Operações Diárias
          </p>
          <p onClick={() => setSelectedOption("thirdOption")}>
            Listagens, Mapas Oficiais e ficheiros{" "}
          </p>
        </div>
        {renderOption()}
      </div>
      <div className="more-gestao">
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption2("firstOption")}>Careers</p>
          <p onClick={() => setSelectedOption2("secondOption")}>Happiness </p>
          <p onClick={() => setSelectedOption2("thirdOption")}>Colaborador </p>
        </div>
        {renderOption2()}
      </div>

      <PHCForm />
    </div>
  );
}

export default Humano;
