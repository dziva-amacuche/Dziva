"use client";
import { React, useState } from "react";
import Image from "next/image";
import Banner from "@/assets/images/phc/industrias/banner.jpg";
import Monitoring from "@/assets/images/phc-software-crm-mz.jpg";
import Automation from "@/assets/images/software-crm-phc-mz.jpg";
import Law from "@/assets/images/crm-phc-software.jpg";
import PHCForm from "@/components/PHCForm";
import "@/styling/Phc.css";
import Background from "@/assets/images/phc/industrias-bg.jpg";

//Options
import First1 from "@/assets/images/phc/industrias/gerais-png.png";
import Second1 from "@/assets/images/phc/industrias/operacionais-png.png";
import Third1 from "@/assets/images/phc/industrias/recurso-png.png";
import Fourth1 from "@/assets/images/phc/industrias/tarefa-png.png";

import First2 from "@/assets/images/phc/industrias/touch.png";
import Second2 from "@/assets/images/phc/industrias/manuntenca.png";
import Third2 from "@/assets/images/phc/industrias/grelhas.png";
import Fourth2 from "@/assets/images/phc/industrias/lotes.png";

import First3 from "@/assets/images/phc/industrias/mrp.png";
import Second3 from "@/assets/images/phc/industrias/moldes.png";
import Third3 from "@/assets/images/phc/industrias/orcamentos.png";
import Fourth3 from "@/assets/images/phc/industrias/packing.png";

import First4 from "@/assets/images/phc/industrias/platform.png";
import Second4 from "@/assets/images/phc/industrias/qualidade.png";
import Third4 from "@/assets/images/phc/industrias/configurador.png";
import Fourth4 from "@/assets/images/phc/industrias/multilingua.png";


function Producao() {
  const [selectedOption, setSelectedOption] = useState("firstOption");
  const videoId = "qLWb1mcUPFQ";

  const renderOption = () => {
    switch (selectedOption) {
      case "firstOption":
        return (
          <div className="option">
            <ul>
              <li>Gestão integrada da produção</li>
              <li>Gestão de produção contínua e descontínua</li>
              <li>Interfaces totalmente adaptáveis aos operadores</li>
              <li>
                Soluções adequadas aos diversos tipos de indústria (ex.: têxtil,
                moldes)
              </li>
              <li>Registo (manual ou touch-screen) de dados de produção</li>
              <li>
                Gestão de inspeções para controlo de qualidade de
                matérias-primas adquiridas e/ou produtos fabricados internamente
              </li>
              <li>
                Inclusão de ferramentas gráficas para análise e gestão da
                ocupação dos centros de trabalho
              </li>
              <li>
                Adaptação a diferentes cenários de gestão de produção,
                combinando os diferentes módulos
              </li>
              <li>
                Possibilidade de configurar diferentes soluções para diversas
                necessidades de produção
              </li>
              <li>
                Controlo de custos de produção (integrado com a Contabilidade
                Analítica)
              </li>
            </ul>

            <Image src={First1}></Image>
          </div>
        );
      case "secondOption":
        return (
          <div className="option">
            <ul>
              <li>Cálculo de necessidades de stock</li>
              <li>
                Atribuição de prioridades a produtos e/ou ordens de fabrico
              </li>
              <li>
                Gestão e calendarização finita das ordens de fabrico sob
                diversos critérios
              </li>
              <li>
                Análises avançadas e acessíveis via browser em contexto de
                mobilidade
              </li>
              <li>
                Análise de stock à data para uma melhor avaliação das
                necessidades de fabrico e/ou compra.
              </li>
              <li>
                Cálculo de necessidades de stock envolvendo disponibilidade de
                recursos (MRP II)
              </li>
              <li>
                Configurador de produto para empresas que trabalham
                exclusivamente por encomenda
              </li>
            </ul>

            <Image src={Second1}></Image>
          </div>
        );
      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>Visualização no gráfico de Gantt</li>
              <li>Associação do recurso ao centro de trabalho</li>
              <li>Definição das variáveis de planeamento (recursos)</li>
              <li>Definição do tipo de amortização (quantidade ou tempo)</li>
              <li>
                Planeamento valida a sua utilização (entre centros de trabalho)
              </li>
              <li>
                Ferramenta fundamental à tomada de decisão dos prazos de
                encomendas de clientes
              </li>
            </ul>
            <Image src={Third1}></Image>
          </div>
        );
      case "fourthOption":
        return (
          <div className="option">
            <ul>
              <li>Atribuição de utilizador responsável</li>
              <li>Gestão de tarefas associadas a registos</li>
              <li>Possibilidade de definição de alertas (“lembretes”)</li>
              <li>Definição de percentagem de execução</li>
              <li>Integração com Microsoft Outlook</li>
            </ul>

            <Image src={Fourth1}></Image>
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
              <li>Registo de Derivados em ecrã táctil</li>
              <li>Visualização de imagens do artigo</li>
              <li>Vários filtros de pesquisa</li>
              <li>Leitura de código de barras</li>
              <li>Registo de tempos e de paragens em ecrã táctil</li>
              <li>
                Registo de quantidades fabricadas e rejeitadas em ecrã táctil
              </li>
              <li>Registo de estado da operação em ecrã táctil</li>
              <li>
                Integração com o módulo Platform (criação diário de trabalho)
              </li>
              <li>Integração com módulo de Gestão de Manutenção</li>
            </ul>

            <Image src={First2}></Image>
          </div>
        );
      case "secondOption2":
        return (
          <div className="option">
            <ul>
              <li>Indicadores de manutenção</li>
              <li>Ordens de fabrico de manutenção</li>
              <li>Integração no planeamento de produção</li>
              <li>Definição de procedimentos de manutenção</li>
              <li>
                Definição de avarias ou trabalhos preventivos e seus
                procedimentos
              </li>
              <li>
                Associação de componentes (e suas avarias e trabalhos
                preventivos) a centros trabalho
              </li>
              <li>
                Gestão de pedidos de manutenção (possível integração com o
                módulo Touch)
              </li>
            </ul>

            <Image src={Second2}></Image>
          </div>
        );
      case "thirdOption2":
        return (
          <div className="option">
            <ul>
              <li>Gestão de stocks a 2 dimensões (ex.: cor e tamanho)</li>
              <li>Definição por componente do rácio de consumo</li>
              <li>
                Ordens de fabrico com ecrã de Grelhas (para preenchimento de
                quantidades)
              </li>
              <li>
                Relatório standard de ordens de fabrico com apresentação da
                matriz/grelha
              </li>
            </ul>

            <Image src={Third2}></Image>
          </div>
        );
      case "fourthOption2":
        return (
          <div className="option">
            <ul>
              <li>Gestão de stocks por lotes</li>
              <li>Consumos de matérias-primas por FIFO ou LIFO</li>
              <li>Custeio por lote</li>
              <li>Análise de rastreabilidade a jusante e montante</li>
              <li>
                Integração com módulo de Qualidade (inspeção periódica de lotes)
              </li>
            </ul>

            <Image src={Fourth2}></Image>
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
              <li>Gestão de stocks</li>
              <li>Gestão de recursos</li>
              <li>Plano global</li>
              <li>Análise de custos</li>
              <li>Cálculo de necessidades de fabrico</li>
              <li>
                Cálculo de necessidades de compra (quantidades mínimas por
                fornecedor)
              </li>
              <li>Vários critérios de satisfação de stocks</li>
              <li>Filtragem de armazéns a incluir no cálculo</li>
              <li>Cálculo de MRP inclui capacidades finitas ou infinitas</li>
              <li>
                Possibilidades de agrupamento de necessidades por vários
                critérios (dia, semana, mês)
              </li>
              <li>Reserva de espaços de planeamento</li>
              <li>
                Análises multidimensionais para análise dos resultados obtidos
              </li>
              <li>Análise de custos do cálculo MRP efetuado</li>
              <li>Interface para análise de stock à data (ATP)</li>
            </ul>

            <Image src={First3}></Image>
          </div>
        );
      case "secondOption3":
        return (
          <div className="option">
            <ul>
              <li>Gestão de moldes</li>
              <li>Estados de molde</li>
              <li>Fórmula de tempos para moldes</li>
              <li>Controlo de amortização do molde</li>
              <li>Criação de operações gémeas para produção conjunta</li>
            </ul>

            <Image src={Second3}></Image>
          </div>
        );
      case "thirdOption3":
        return (
          <div className="option">
            <ul>
              <li>Gestão orçamental</li>
              <li>Flexibilidade na criação</li>
              <li>Controlo apurado de custos</li>
              <li>Descontos por quantidades</li>
              <li>Rápida integração nas fichas técnicas</li>
              <li>Criação de estruturas com dados fictícios</li>
              <li>Criação automática de estrutura de artigos</li>
              <li>Criação automática de ordens de fabrico</li>
              <li>Envio por e-mail</li>
            </ul>

            <Image src={Third3}></Image>
          </div>
        );
      case "fourthOption3":
        return (
          <div className="option">
            <ul>
              <li>Gestão de expedição</li>
              <li>Controlo de embalamentos</li>
              <li>Controlo das quantidades embaladas</li>
              <li>Sugestão de embalamento</li>
              <li>
                Seleção dos movimentos de stock a incluir (por cliente, etc.)
              </li>
              <li>Gestão de caixas (com indicação dos artigos a embalar)</li>
              <li>
                Emissão de documentos de packing-list e rótulos para caixas
              </li>
              <li>
                Possibilidade de integração com Dossiers Internos (para
                faturação)
              </li>
            </ul>

            <Image src={Fourth3}></Image>
          </div>
        );
      default:
        return null;
    }
  };

  const [selectedOption4, setSelectedOption4] = useState("firstOption4");

  const renderOption4 = () => {
    switch (selectedOption4) {
      case "firstOption4":
        return (
          <div className="option">
            <ul>
              <li>Alternativas de produção</li>
              <li>Gestão de ordens de fabrico</li>
              <li>Planeamento não-gráfico de produção</li>
              <li>Gestão de subcontratações</li>
              <li>Registo de dados reais de produção</li>
              <li>Controlo e custeio apurado de todas as fases de produção</li>
              <li>Produção para stock e encomenda</li>
              <li>Montagem por encomenda</li>
              <li>Mobilidade no acesso a dados</li>
              <li>
                Template com dashboard de análises, gráficos, snapshots e
                monotorização OEE
              </li>
              <li>
                Completa e ampla definição de centro de trabalho (máquina,
                conjunto de máquinas, etc.)
              </li>
              <li>Gestão de clientes e fornecedores</li>
              <li>
                Gestão de funcionários, turnos e horários de trabalho, períodos
                não-trabalháveis e extraordinários
              </li>
              <li>
                Gestão de fichas técnicas (gamas operatórias e lista de
                materiais)
              </li>
            </ul>

            <Image src={First4}></Image>
          </div>
        );
      case "secondOption4":
        return (
          <div className="option">
            <ul>
              <li>Gestão de moldes</li>
              <li>Estados de molde</li>
              <li>Fórmula de tempos para moldes</li>
              <li>Controlo de amortização do molde</li>
              <li>Criação de operações gémeas para produção conjunta</li>
            </ul>

            <Image src={Second4}></Image>
          </div>
        );
      case "thirdOption4":
        return (
          <div className="option">
            <ul>
              <li>Alta parametrização</li>
              <li>Definição de matrizes</li>
              <li>Definição de variantes</li>
              <li>Definição de caraterísticas</li>
              <li>Associação de uma matriz a um artigo</li>
              <li>Interface de perguntas ao utilizador</li>
              <li>Construção da estrutura na ordem de fabrico</li>
              <li>Redução de fichas técnicas</li>
            </ul>

            <Image src={Third4}></Image>
          </div>
        );
      case "fourthOption4":
        return (
          <div className="option">
            <ul>
              <li>Fácil implementação</li>
              <li>Redução formação utilizadores</li>
              <li>Possibilidade de tradução de interfaces</li>
              <li>Possibilidade de tradução de mensagens</li>
              <li>Possibilidade de tradução de menus</li>
              <li>Possibilidade de tradução específica por utilizador</li>
              <li>Vários idiomas na mesma base de dados</li>
            </ul>

            <Image src={Fourth4}></Image>
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
        <h1>Software de Gestão para Indústria e Produção</h1>

        <p>
          Integre e supervisione a sua produção industrial com total
          flexibilidade
        </p>
        {/* <div className="buttons">
            <button className="more-info">Saber mais</button>
          </div> */}
      </div>
      <div className="gestao-content">
        <h3>
          <span>A gestão integrada da sua produção em qualquer </span> área
          industrial
        </h3>
        <p>
          Planeie, programe, execute e monitorize todo o processo de fabrico –
          desde a aquisição das matérias-primas, à subcontratação de partes do
          processo de produção, passando pelo controlo total de custos, até à
          fabricação (por encomenda ou em modo contínuo) – de forma flexível e
          com rentabilidade máxima.{" "}
        </p>
        <div className="img-container">
        <Image className="img" src={Banner}></Image>
        </div>      </div>
      <div className="gestao-description">
        <h3>
          <span>Garanta a máxima agilidade do seu </span> processo produtivo
          <span> com o Software PHC CS</span>
        </h3>
        <div className="description-options">
          <div className="option">
            <div className="option-text">
              <Image src={Monitoring}></Image>
              <h4>Otimização de todas as fases do processo produtivo</h4>
              <p>
                De forma totalmente integrada e flexível, implementa ações
                coordenadas ao nível da definição e especificação do processo
                produtivo, planeamento da capacidade produtiva instalada,
                cálculo de necessidades, calendarização das operações, controlo
                de qualidade, rastreabilidade da produção, manutenção do parque
                produtivo, entre muitas outras.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Automation}></Image>
              <h4>
                Informação em tempo real para a tomada de decisões estratégicas
              </h4>
              <p>
                Graças ao suporte de várias funcionalidades analíticas, que lhe
                proporcionam uma visão intuitiva do seu negócio em números e
                gráficos, tem acesso imediato aos dados mais atualizados do
                processo de fabrico, podendo antecipar problemas e reagir a
                anomalias de forma rápida.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Law}></Image>
              <h4>
                Solução totalmente adaptável às necessidades do seu negócio
              </h4>
              <p>
                Qualquer que seja o seu tipo de indústria e o nível de
                complexidade do seu processo produtivo, esta é uma solução
                flexível, que lhe permite associar módulos relevantes –
                preparados para situações particulares de negócio –, ao módulo
                base da solução.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="more-gestao">
        <h3>
          <span>O software que torna a sua empresa </span>
          mais competitiva{" "}
        </h3>
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption("firstOption")}>
            Funcionalidades gerais
          </p>
          <p onClick={() => setSelectedOption("secondOption")}>
            Funcionalidades operacionais
          </p>
          <p onClick={() => setSelectedOption("thirdOption")}>Recursos</p>
          <p onClick={() => setSelectedOption("fourthOption")}>Tarefas</p>
        </div>
        {renderOption()}
      </div>

      <div className="more-gestao">
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption2("firstOption2")}>Touch</p>
          <p onClick={() => setSelectedOption2("secondOption2")}>
            Gestão da manutenção
          </p>
          <p onClick={() => setSelectedOption2("thirdOption2")}>Grelhas</p>
          <p onClick={() => setSelectedOption2("fourthOption2")}>Lotes</p>
        </div>
        {renderOption2()}
      </div>

      <div className="more-gestao">
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption3("firstOption3")}>Touch</p>
          <p onClick={() => setSelectedOption3("secondOption3")}>
            Gestão da manutenção
          </p>
          <p onClick={() => setSelectedOption3("thirdOption3")}>Grelhas</p>
          <p onClick={() => setSelectedOption3("fourthOption3")}>Lotes</p>
        </div>
        {renderOption3()}
      </div>

      <div className="more-gestao">
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption4("firstOption4")}>Platform</p>
          <p onClick={() => setSelectedOption4("secondOption4")}>Qualidade</p>
          <p onClick={() => setSelectedOption4("thirdOption4")}>
            Configurador do produto
          </p>
          <p onClick={() => setSelectedOption4("fourthOption4")}>Multilíngua</p>
        </div>
        {renderOption4()}
      </div>
      <PHCForm />
    </div>
  );
}

export default Producao;
