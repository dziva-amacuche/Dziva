"use client";
import { React, useState } from "react";
import Image from "next/image";
import Banner from "@/assets/images/phc/construcao/construcao-banner.jpg";
import Monitoring from "@/assets/images/phc-software-crm-mz.jpg";
import Automation from "@/assets/images/software-crm-phc-mz.jpg";
import Law from "@/assets/images/crm-phc-software.jpg";
import PHCForm from "@/components/PHCForm";
import "@/styling/Phc.css";
import Background from "@/assets/images/phc/construcao-bg.jpg";

//Options
import First1 from "@/assets/images/phc/construcao/gerais.jpg";
import Second1 from "@/assets/images/phc/construcao/orcamentacao.jpg";
import Third1 from "@/assets/images/phc/construcao/planeamento.jpg";
import Fourth1 from "@/assets/images/phc/construcao/medicoes.jpg"

import First2 from "@/assets/images/phc/construcao/gestao.jpg";
import Second2 from "@/assets/images/phc/construcao/revisao.jpg";
import Third2 from "@/assets/images/phc/construcao/analises.jpg";
import Fourth2 from "@/assets/images/phc/construcao/ocupacao.jpg"

import First3 from "@/assets/images/phc/construcao/web.jpg";
import Second3 from "@/assets/images/phc/construcao/dashboard.jpg";

function Construcao() {
  const [selectedOption, setSelectedOption] = useState("firstOption");
  const videoId = "qLWb1mcUPFQ";

  const renderOption = () => {
    switch (selectedOption) {
      case "firstOption":
        return (
          <div className="option">
            <ul>
              <li>Plano de comissões</li>
              <li>Histórico de movimentos</li>
              <li>Integração com o Microsoft Project</li>
              <li>Integração dos vários departamentos numa única solução</li>
              <li>
                Exportação das análises para documentos de Microsoft Excel
              </li>
              <li>Controlo de orçamentação, planeamento e medição</li>
              <li>
                Controlo pormenorizado dos custos e rentabilidade de cada
                projeto
              </li>
              <li>Acesso centralizado à informação de cada processo</li>
              <li>
                Controlo das diversas fases de cada processo, de uma forma
                simples e direta
              </li>
              <li>
                Toda a informação de cada processo (obra) em curso,
                independentemente do departamento em que foi gerado
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
                Orçamentos com preços de custos definidos na base de artigos e
                cálculo do preço de venda
              </li>
              <li>Propostas que incluem os preços de venda</li>
              <li>
                Impressão de vários layouts, consoante o destinatário do
                orçamento
              </li>
              <li>
                Importação de todo o articulado a fim de facilitar a resposta a
                diversos orçamentos ou concursos
              </li>
              <li>
                Modos de pagamento por orçamento em autos de medição ou valores
                percentuais do total do orçamento
              </li>
              <li>
                Margens de lucro por orçamento com tabela de encargos definidos
                percentualmente ou por valor a utilizar (linha a linha ou por
                valor global)
              </li>
              <li>Encargos administrativos, financeiros ou de obra</li>
              <li>
                Fórmulas específicas de cálculo do preço de custo do
                artigo/equipamento/serviço, ajustado o mais possível à realidade
                laboral
              </li>
              <li>Coeficientes de atualização mensal do orçamento</li>
              <li>
                Agrupamento do articulado de itens que compõem o orçamento em
                capítulos, categorias e subcategorias
              </li>
              <li>
                Negociação com diversas alterações de preços ou trabalhos, por
                totalização do orçamento, descontos comerciais ou valores
                individuais
              </li>
              <li>
                Consulta de preços de materiais, a fim de dar preços mais
                corretos para fornecimento ou realização de trabalhos
              </li>
              <li>
                Elaboração de mapas comparativos entre subempreiteiros ou
                fornecedores solicitados
              </li>
            </ul>

            <Image src={Second1}></Image>
          </div>
        );
      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>
                Mapas de necessidades com análises das tarefas dos orçamentos
                para um intervalo de tempo
              </li>
              <li>
                Possibilidade de emitir de forma automática encomendas a
                fornecedores após o cálculo das necessidades
              </li>
              <li>Distribuição do pessoal e equipamento pelas obras</li>
              <li>
                Preparação de encomendas de material a entregar nas obras
                definidas com respetivos timings
              </li>
              <li>
                Mapas de planos de trabalho com discriminação do nível
                pretendido do orçamento, o que possibilita a organização do
                trabalho a executar por categorias principais ou por item do
                orçamento
              </li>
              <li>
                Planeamentos por processo (por ex.: planeamentos provisórios e
                planeamentos reais)
              </li>
              <li>Exportação e importação para o Microsoft Project</li>
              <li>
                Observação e planeamento das tarefas virtuais, ou seja, uma
                única tarefa por capítulo que engloba todas as outras e reflete
                as datas que o capítulo abrange
              </li>
              <li>
                Cronogramas intuitivos para planos de obra e distribuição de
                mão-de-obra e equipamentos
              </li>
              <li>Horários de trabalho pormenorizados</li>
              <li>
                Possibilidade de executar a distribuição da mão-de-obra pelas
                diversas obras e a percentagem de custos a fim de verificar o
                desvio de custos planeados ou orçamentados (módulo PHC CS
                Pessoal)
              </li>
              <li>
                Possibilidade de executar a distribuição dos recursos
                (mão-de-obra ou equipamentos) das diversas tarefas planeadas
                (módulo PHC CS Ocupação)
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
                Medição do trabalho efetivo realizado para débito aos clientes.
                O controlo de autos é imperativo para o modo de pagamento por
                autos mensais
              </li>
              <li>
                Utilização da modalidade de pagamento definida no orçamento
                adjudicado com a realização do cálculo respetivo
              </li>
              <li>
                Controlo de garantias e respetiva diluição nos autos mensais
              </li>
              <li>
                Controlo do trabalho realizado de auto para auto, a fim de
                elaborar autos futuros
              </li>
              <li>
                Possibilidade de emissão do documento de faturação com o
                respetivo valor discriminado e modalidade de pagamento após o
                auto de medição
              </li>
              <li>
                Possibilidade de averiguar acumulados de medições e de valores e
                verificar desvios orçamentais
              </li>
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
              <li>
                Exportação das análises referidas para documentos de Microsoft
                Excel
              </li>
              <li>
                Plano de recebimentos e vendas para determinar o lucro e
                cash-flow por obra
              </li>
              <li>
                Possibilidade de utilizar preços de custo, preços de venda,
                faturação, compras e previsão de recebimentos
              </li>
              <li>
                O cronograma percentual apresenta valores mensais, semanais e
                desvios diversos, e possibilita a introdução de fórmulas para o
                cálculo dos desvios
              </li>
              <li>
                Cronograma financeiro da obra, utilizando o plano de obras
                existente e acrescentando a previsão de entrada de dinheiro no
                decorrer da obra
              </li>
              <li>
                Consultas dos balanços de obra para visualizar o valor
                adjudicado, os trabalhos a mais ou a menos efetuados e as notas
                de créditos efetuadas
              </li>
              <li>
                Controlo sobre as compras e consequente lançamento nas diversas
                obras, com a distribuição por obra das diversas compras feitas,
                obtendo o custo de materiais e controlo de requisição dos mesmos
              </li>
              <li>
                Possibilidade de confrontar a previsão orçamental com a
                realidade da obra a fim de ajustar futuros orçamentos e
                verificar o lucro previsto
              </li>
              <li>
                Valores totalizados por subtotais de mão-de-obra, matéria prima,
                subempreiteiros, orçamentos e trabalhos extra, permitindo
                confrontar os subtotais de custo inicial, subtotal de custos
                administrativos, financeiros e de obra previstos
              </li>
            </ul>

            <Image src={First2}></Image>
          </div>
        );
      case "secondOption2":
        return (
          <div className="option">
            <ul>
              <li>Revisão dos valores nos orçamentos</li>
              <li>Diluição do orçamento</li>
              <li>
                Impressão da revisão de preços configurando as respetivas
                fórmulas
              </li>
              <li>
                Cronograma financeiro (plano de pagamentos) acordado com o
                cliente
              </li>
              <li>
                Tabelas de índices de custos de mão-de-obra e de custos de
                materiais
              </li>
              <li>Correções à revisão de preços devido a adiantamentos</li>
              <li>Coeficientes de atualização mensal do orçamento</li>
              <li>
                Faturação integrada com o módulo PHC CS Gestão nas revisões de
                preços
              </li>
            </ul>

            <Image src={Second2}></Image>
          </div>
        );
      case "thirdOption2":
        return (
          <div className="option">
            <ul>
              <li>
                Ferramentas de análise e planeamento para gerir a concretização
                de prazos
              </li>
              <li>
                Mapas de autos e de necessidades com análises das tarefas dos
                orçamentos para um intervalo de tempo
              </li>
              <li>Mapa de subempreitadas</li>
              <li>Análises de garantias bancárias</li>
              <li>Facilidade na elaboração de relatórios personalizados</li>
              <li>
                Controlo pormenorizado dos custos e rentabilidade de cada
                processo
              </li>
              <li>
                Relatórios específicos para a área de construção (mapas de
                subempreitadas, mapas de necessidades por capítulo, entre
                outros)
              </li>
              <li>Cronograma financeiro</li>
            </ul>

            <Image src={Third2}></Image>
          </div>
        );
      case "fourthOption2":
        return (
          <div className="option">
            <ul>
              <li>Agenda de ocupação</li>
              <li>
                Integração total com o módulo Gestão Desktop e Projeto Desktop
              </li>
              <li>Planeamento dos recursos e equipamentos</li>
              <li>Plano de trabalhos</li>
              <li>
                Gestão de unidades de ocupação (recursos, equipamentos,
                viaturas, gestão de espaços, etc.)
              </li>
              <li>
                Controlo de reservas e distribuição de espaços, objetos,
                equipamentos, etc.
              </li>
              <li>
                Visualização rápida da carga de ocupação, reservas e
                disponibilidades
              </li>
              <li>Análises estatísticas</li>
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
              <li>
                Definição da sequência de ações a serem executadas para
                determinado processo de workflow
              </li>
              <li>
                Predefinição de quem executa as ações e quanto tempo tem para o
                fazer
              </li>
              <li>
                Possibilidade de configurar para quem deve escalar uma ação que
                não foi cumprida num determinado prazo
              </li>
              <li>
                Definição de informação específica para cada processo –
                possibilidade de criar variáveis com informação relativa a cada
                obra
              </li>
              <li>
                Ecrã de monitor onde cada pessoa pode saber todas as ações que
                tem para executar
              </li>
              <li>
                Possibilidade de agregar documentos digitais a cada processo
              </li>
              <li>
                Integrado com a gestão de correspondência da PHC para permitir
                iniciar workflows relativos a entrada e saída de correspondência
              </li>
              <li>
                Histórico de ações de cada processo (quem fez o quê e quando,
                quanto tempo demorou, etc.)
              </li>
              <li>Ações multiutilizador</li>
            </ul>

            <Image src={First3}></Image>
          </div>
        );
      case "secondOption3":
        return (
          <div className="option">
            <ul>
              <li>Representação gráfica da informação do sistema</li>
              <li>Análises Multidimensionais</li>
              <li>Consulta da informação sempre atualizada num único painel</li>
              <li>
                Análise de resultados anuais e mensais em comparação com o ano
                anterior
              </li>
              <li>
                Controlo da situação atual do negócio em áreas fundamentais da
                empresa
              </li>
              <li>
                Observação da evolução dos indicadores e medidas do negócio
              </li>
              <li>
                Monitorização do top de variações das áreas vitais da
                organização com visualização dos eixos mais críticos
              </li>
              <li>
                Totalmente desenvolvido para integração com o sistema PHC (não
                requer a utilização de outro software externo)
              </li>
              <li>
                Possibilidade de construir novos dashboards personalizados às
                necessidades do negócio e dos utilizadores
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
        <h1>Software de Gestão para Construção Civil</h1>

        <p>
          Integre todas as suas tarefas e processos, desde o planeamento de
          obras à tesouraria.{" "}
        </p>
        {/* <div className="buttons">
            <button className="more-info">Saber mais</button>
          </div> */}
      </div>
      <div className="gestao-content">
        <h3>
          <span>
            Obras entregues no tempo previsto, ao custo estimado e com a
            qualidade máxima
          </span>
        </h3>
        <p>
          Simplifique o planeamento e a gestão das suas obras, acelere a
          execução de orçamentos, reduza os erros e controle os custos de forma
          eficaz. Tudo isto com o apoio de um conjunto de análises de negócio
          que pode criar, adaptar e personalizar à medida do seu negócio. 
        </p>
        <div className="img-container">
        <Image className="img" src={Banner}></Image>
        </div>
      </div>
      <div className="gestao-description">
        <h3>
          <span>Simplifique a gestão das suas obras e orçamentos </span> com o
          Software PHC CS
        </h3>
        <div className="description-options">
          <div className="option">
            <div className="option-text">
              <Image src={Monitoring}></Image>
              <h4>Visão 360º de todas as obras, projectos e orçamentos</h4>
              <p>
                Garanta um controlo total dos custos e rentabilidade de cada
                obra com um sistema de informação totalmente integrado, que
                permite gerir desde a execução de orçamentos à execução de
                obras.  Simplifique e reúna num só local as
                etapas de orçamentação, planificação de obra, faturação, autos
                de medição, cronograma de trabalhos, gestão de equipamentos e
                ocupações e controlo de custos. 
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Automation}></Image>
              <h4>Orçamentação com o máximo rigor </h4>
              <p>
                Alterações num orçamento não são problema, dado que todas as
                versões e mudanças ficam imediatamente integradas em todo o
                processo. Simplifique a produção de orçamentos com preços de
                custo definidos na base de artigos e cálculo do preço de
                venda. Vá ainda mais longe e apresente métodos de pagamento por
                orçamento em auto de medição ou valores percentuais do total de
                orçamento.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Law}></Image>
              <h4>Controlo total de custos com cronogramas financeiros </h4>
              <p>
                Tenha sempre à mão análises de desvios entre o previsto e o
                realizado, tanto em quantidades como em custos. Consulte
                rapidamente o saldo de cada obra, o lucro e cash-flow, notas
                de crédito, e confronte a previsão orçamental com a realidade da
                obra, a fim de ajustar futuros orçamentos e verificar o lucro
                previsto. Análises e indicadores detalhados são essenciais para
                tomar decisões fundamentadas e evitar derrapagens. F
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="more-gestao">
        <h3>
          <span>O software que se adapta ao dia a dia das suas obras</span>
        </h3>
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption("firstOption")}>
            Funcionalidades gerais
          </p>
          <p onClick={() => setSelectedOption("secondOption")}>Orçamentação</p>
          <p onClick={() => setSelectedOption("thirdOption")}>Planeamento </p>
          <p onClick={() => setSelectedOption("fourthOption")}>Medições </p>
        </div>
        {renderOption()}
      </div>
      <div className="more-gestao">
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption2("firstOption2")}>
            Controlo e gestão
          </p>
          <p onClick={() => setSelectedOption2("secondOption2")}>
            Revisão de preços
          </p>
          <p onClick={() => setSelectedOption2("thirdOption2")}>
            Mapas e análises
          </p>
          <p onClick={() => setSelectedOption2("fourthOption2")}>
            Gestão da ocupação{" "}
          </p>
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

export default Construcao;
