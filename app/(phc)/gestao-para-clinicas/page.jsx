"use client";
import { React, useState } from "react";
import Image from "next/image";
import Banner from "@/assets/images/phc/clinicas/banner.jpg";
import Monitoring from "@/assets/images/phc-software-crm-mz.jpg";
import Automation from "@/assets/images/software-crm-phc-mz.jpg";
import Law from "@/assets/images/crm-phc-software.jpg";
import PHCForm from "@/components/PHCForm";
import "@/styling/Phc.css";
import Background from "@/assets/images/phc/clinica-bg.jpg";

//Options
import First1 from "@/assets/images/phc/clinicas/gerais.jpg";
import Second1 from "@/assets/images/phc/clinicas/especialistas.jpg";
import Third1 from "@/assets/images/phc/clinicas/pacientes.jpg";

function Clinica() {
  const [selectedOption, setSelectedOption] = useState("firstOption");
  const videoId = "qLWb1mcUPFQ";

  const renderOption = () => {
    switch (selectedOption) {
      case "firstOption":
        return (
          <div className="option">
            <ul>
              <li>
                Totalmente integrado com o módulo de gestão e respetivos
                clientes e referências
              </li>
              <li>Controlo de acessos por especialista/especialidade</li>
              <li>Gestão completa de pacientes e respectivos dados clínicos</li>
              <li>
                Gestão de marcações integrada com os períodos de ausências e
                horas extra dos especialistas
              </li>
              <li>Configuração e acesso a bibliotecas de objetos</li>
              <li>Controlo de comparticipações (com o Módulo Gestão)</li>
              <li>Gestão de locais de prestação do serviço da ação médica</li>
              <li>
                Análises avançadas, análises multidimensionais e dashboards para
                controle da sua clínica com informações atualizadas ao momento
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
                Gestão de especialistas com folha de cadastro totalmente
                detalhada
              </li>
              <li>Gestão da agenda de marcações por especialista</li>
              <li>
                Definição da disponibilidade do especialista, períodos de
                ausência e horas extra
              </li>
              <li>Controlo de acesso à informação da agenda de marcações</li>
            </ul>

            <Image src={Second1}></Image>
          </div>
        );
      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>Paciente genérico para marcações</li>
              <li>Dados clínicos específicos por paciente</li>
              <li>Historial do paciente</li>
              <li>
                Ficha do paciente detalhada com medidas e informação visual
              </li>
              <li>
                Integração direta entre a entidade paciente e cliente para uma
                gestão integrada
              </li>
            </ul>

            <Image src={Third1}></Image>
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
        <h1>Software de Gestão para Clínicas</h1>

        <p>
          A gestão completa e integrada da sua clínica ou consultório médico.{" "}
        </p>
        {/* <div className="buttons">
            <button className="more-info">Saber mais</button>
          </div> */}
      </div>
      <div className="gestao-content">
        <h3>
          <span>O controlo total da organização da sua clínica</span>
        </h3>
        <p>
          Desde a informação clínica completa dos seus pacientes, devidamente
          protegida, à gestão e controlo financeiro da sua clínica ou
          consultório. Processos administrativos automatizados, monitorização de
          clientes, fornecedores e rentabilidade, com toda a informação que
          precisa, em tempo real, para uma melhor gestão diária.
        </p>
        <div className="img-container">
          <Image className="img" src={Banner}></Image>
        </div>{" "}
      </div>
      <div className="gestao-description">
        <h3>
          <span>Assegure a máxima rentabilidade da sua clínica </span> com o
          Software PHC CS
        </h3>
        <div className="description-options">
          <div className="option">
            <div className="option-text">
              <Image src={Monitoring}></Image>
              <h4>
                Gestão de pacientes a partir de um único local e com total
                segurança 
              </h4>
              <p>
                Consulte de uma forma simples e prática toda a informação
                biográfica, médica e visual de cada paciente. Todas as
                anotações, exames ou documentos ficam centralizados para um
                acompanhamento eficaz da evolução dos seus pacientes. E para que
                possa controlar e personalizar essa evolução, tem a
                possibilidade de configurar uma série de medidas –
                tensão, pulsação, altura, peso, informação dentária, entre
                outros aspetos que pretender. 
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Automation}></Image>
              <h4>Controlo eficaz e intuitivo das agendas e marcações </h4>
              <p>
                Assegure que todos os recursos necessários se encontram
                acessíveis, aumentando a disponibilidade, reduzindo tempos de
                espera e aumentando o grau de satisfação dos seus clientes.
                Marque, cancele e pesquise de forma versátil – por especialista
                ou especialidade médica, disponibilidade horária, vagas ou
                características do paciente. Uma gestão eficaz das agendas
                permite-lhe saber de forma visualmente clara o estado das várias
                marcações e obter análises de apoio à gestão. 
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Law}></Image>
              <h4>Análises de gestão e financeiras prontas a consultar </h4>
              <p>
                Uma gestão integrada permite-lhe ter maior controlo de custos e
                avaliar índices de rentabilidade com mais
                confiança. Desde consultas efetuadas, valores faturados
                a pacientes e entidades até à gestão de compras e stocks. Tudo
                isto de uma forma simples e acessível, para que
                seja mais rápido a agir. Garanta que tem à sua
                disposição previsões fidedignas que lhe permitem tomar decisões
                fundamentadas. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="more-gestao">
        <h3>
          <span>O software que se adapta ao dia a dia da sua clínica</span>
        </h3>
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption("firstOption")}>
            Funcionalidades gerais
          </p>
          <p onClick={() => setSelectedOption("secondOption")}>
            Funcionalidades associadas aos especialistas
          </p>
          <p onClick={() => setSelectedOption("thirdOption")}>
            Funcionalidades associadas aos pacientes
          </p>
        </div>
        {renderOption()}
      </div>
      <PHCForm />
    </div>
  );
}

export default Clinica;
