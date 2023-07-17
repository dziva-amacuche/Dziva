"use client";
import { React, useState } from "react";
import Image from "next/image";
import Banner from "@/assets/images/phc/erp/banner.jpg";
import Monitoring from "@/assets/images/monitoring.jpg";
import Automation from "@/assets/images/automation.jpg";
import Law from "@/assets/images/law.jpg";
import PHCForm from "@/components/PHCForm";
import "@/styling/Phc.css";
import Background from "@/assets/images/phc/erp-bg.jpg";

//Options
import Artigos from "@/assets/images/phc/erp/artigos.jpg";
import BPM from "@/assets/images/phc/erp/bpm.jpg";
import Dashboard from "@/assets/images/phc/erp/dashboard.jpg";
import Documental from "@/assets/images/phc/erp/documental.jpg";
import Electronicos from "@/assets/images/phc/erp/electronicos.jpg";
import Factoring from "@/assets/images/phc/erp/factoring.jpg";
import Gerais from "@/assets/images/phc/erp/gerais.jpg";
import Operacional from "@/assets/images/phc/erp/operacional.jpg";
import Qualidade from "@/assets/images/phc/erp/qualidade.jpg";
import Web from "@/assets/images/phc/erp/web.jpg";

function GestaoERP() {
  const [selectedOption, setSelectedOption] = useState("firstOption");

  const renderOption = () => {
    switch (selectedOption) {
      case "firstOption":
        return (
          <div className="option">
            <ul>
              <li>Certificação de documentos e comunicação à AT</li>
              <li>
                Suporte a moeda estrangeira para elaboração de documentos e
                consulta de extratos
              </li>
              <li>
                Integração automática na contabilidade da faturação, compras,
                adiantamentos, pagamentos e recebimentos, entre outros
              </li>
              <li>
                Emissão de documentos de faturação com referências multibanco
                para maior facilidade de pagamento por parte dos clientes
              </li>
              <li>
                Comunidade de utilizadores PHC, um sistema de troca de
                documentos entre Clientes e fornecedores, em formato XML
              </li>
              <li>
                Agenda de marcações com integração com calendários externos do
                Outlook
              </li>
              <li>Suporte para multi-idioma por utilizador</li>
            </ul>
            <Image src={Gerais}></Image>
          </div>
        );
      case "secondOption":
        return (
          <div className="option">
            <ul>
              <li>
                Gestão intuitiva de clientes, fornecedores, contas correntes,
                tesouraria e bancos
              </li>
              <li>
                Monitor de dívidas com envio por email e gestão e controlo de
                cobranças por débito direto
              </li>
              <li>Gestão de comissões de vendedores por vários critérios</li>
              <li>
                Assistente de pagamento a cliente e a fornecedores c/ encontro
                de contas
              </li>
              <li>Emissão automática de faturação</li>
              <li>
                Comunicação automática de faturas e guias de transporte à AT com
                SMS para o motorista
              </li>
              <li>
                Reconciliação bancária com assistente de importação do extrato
                do banco
              </li>
              <li>Rappel de clientes e fornecedores</li>
              <li>
                Documentos de Faturação (com retenção de IRPS, se necessário)
              </li>
              <li>Gestão de stocks cativos e pré-cativos</li>
              <li>
                Ligação com o módulo de terminais portáteis para registo de
                contagens e inventários
              </li>
              <li>
                Ligação com o módulo de ocupação para controlo e reserva de
                equipamentos ou outros recursos
              </li>
            </ul>
            <Image src={Operacional}></Image>
          </div>
        );
      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>Com lotes por FIFO, LIFO e FEFO</li>
              <li>Por números de série</li>
              <li>Com grelhas de cor e tamanho</li>
              <li>Com Ecovalor</li>
              <li>ICE – Imposto de Consumo Específico</li>
              <li>Metros cúbicos, quadrados e lineares</li>
              <li>Tabelas de preços com validades e múltiplos critérios</li>
              <li>
                Promoções, descontos e campanhas versáteis e personalizadas
              </li>
            </ul>
            <Image src={Artigos}></Image>
          </div>
        );
      case "fourthOption":
        return (
          <div className="option">
            <ul>
              <li>Representação gráfica da informação do sistema</li>
              <li>Análises multidimensionais</li>
              <li>
                Consulta da informação permanentemente atualizada num único
                painel
              </li>
              <li>
                Análise de resultados anuais e mensais em comparação com o ano
                anterior
              </li>
              <li>
                Controlo da situação atual do negócio, em áreas fundamentais da
                empresa
              </li>
              <li>
                Observação da evolução dos indicadores e medidas do negócio
              </li>
              <li>
                Monitorização do top de variações das áreas vitais da
                organização com imediata visualização dos eixos mais críticos
              </li>
              <li>
                Totalmente desenvolvido para integração com o sistema PHC, não
                requer a utilização de outro software externo
              </li>
              <li>
                Possibilidade de construir novos dashboards personalizados às
                necessidades do negócio, da empresa e dos utilizadores
              </li>
            </ul>

            <Image src={Dashboard}></Image>
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
                Digitalização, arquivo e anexação documental integrada em
                contexto com os dados do Software PHC
              </li>
              <li>
                Compatível com scanners para transformação rápida de documentos
                em papel para documentos digitais
              </li>
              <li>
                Nas gamas Advanced e Enterprise possui a funcionalidade do
                workflow organizacional
              </li>
              <li>
                Controlo total dos acessos, assim como acessos pré-definidos
                para consulta e manipulação dos documentos
              </li>
              <li>
                Controlo de quem introduziu, acedeu ou alterou cada documento
              </li>
              <li>
                Indexação e catalogação de documentos para facilitar pesquisa
              </li>
              <li>
                Anexação ao sistema de documentos em qualquer formato
                reconhecido (imagens, filmes, documentos Word, Excel, pdf, etc.)
              </li>
              <li>
                Anexação e arquivo automático de impressões de documentos
                produzidas pelo Software PHC
              </li>
              <li>
                Criação de subpastas para os anexos e definição da diretoria
                física onde são guardados
              </li>
            </ul>
            <Image src={Documental}></Image>
          </div>
        );
      case "secondOption":
        return (
          <div className="option">
            <ul>
              <li>Emissão de guias de remessa e faturação por Internet</li>
              <li>
                Receção automática de Dossiers Internos (por ex.: encomendas e
                avisos de receção)
              </li>
              <li>Troca de ficheiros em formato EDI e XML Padrão</li>
              <li>
                Garantia de receção das faturas eletrónicas por parte dos
                destinatários, sem enganos ou extravios
              </li>
              <li>
                Redução do volume de correspondência: menos papel, menos
                envelopes, menos despesas de envio e de tratamento
              </li>
              <li>Fácil armazenamento das faturas em formato eletrónico</li>
              <li>Faturação eletrónica com estado modelo CIUS-PT UBL 1.2</li>
            </ul>
            <Image src={Electronicos}></Image>
          </div>
        );

      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>Controlo total sobre todos os contratos de factoring</li>
              <li>Gestão completa das cessões de crédito</li>
              <li>Controlo das contas correntes dos devedores</li>
              <li>
                Controlo da conta corrente do aderente contrato a contrato
              </li>
              <li>Informação da situação dos créditos cedidos</li>
              <li>Gestão diária dos montantes disponíveis para adiantamento</li>
            </ul>
            <Image src={Factoring}></Image>
          </div>
        );

        break;

      default:
        break;
    }
  };

  const [selectedOption3, setSelectedOption3] = useState("firstOption");
  const renderOption3 = () => {
    switch (selectedOption3) {
      case "firstOption":
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
                Configuração para quem deve escalar uma ação que não foi
                cumprida num determinado prazo
              </li>
              <li>
                Definição da informação específica de cada processo, ou seja,
                criação de variáveis com informação relativa ao processo em
                particular
              </li>
              <li>
                Visualização em ecrã de monitor onde cada pessoa pode saber
                todas as ações que tem para executar, bem como a totalidade da
                informação agregada ao respetivo workflow
              </li>
              <li>
                Possibilidade de agregar documentos digitais a cada processo com
                o módulo Documentos Desktop
              </li>
              <li>
                Integração com a gestão de correspondência da PHC para permitir
                iniciar workflows relativos a entrada e saída de correspondência
              </li>
              <li>
                Consulta do histórico de ações de cada processo (quem fez o quê
                e quando, quanto tempo demorou, etc.)
              </li>
              <li>Ações multiutilizador</li>
            </ul>

            <Image src={BPM}></Image>
          </div>
        );
      case "secondOption":
        return (
          <div className="option">
            <ul>
              <li>Portal Institucional</li>
              <li>Páginas desenháveis em HTML</li>
              <li>Criação de menus e links</li>
              <li>Notícias e Inquéritos</li>
              <li>Banners e apresentações</li>
              <li>
                Possibilidade de interação com o visitante, através de
                inquéritos ou outros pedidos de informação
              </li>
              <li>Notícias relevantes sobre a empresa</li>
              <li>Catálogo de produtos</li>
              <li>Banners de publicidade</li>
              <li>Estatísticas de hits ou seja acessos ao site</li>
            </ul>

            <Image src={Web}></Image>
          </div>
        );

      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>
                Gestão integrada da documentação e dos inúmeros procedimentos da
                empresa
              </li>
              <li>
                Gestão e acompanhamento da criação e revisão de procedimentos e
                documentos
              </li>
              <li>Identificação em detalhe de não conformidades</li>
              <li>
                Planeamento da correção e ações corretivas associadas a uma não
                conformidade
              </li>
              <li>Programação e planeamento de auditorias</li>
              <li>
                Avaliação de fornecedores (através de critérios por defeito ou
                parametrizados pelo utilizador)
              </li>
              <li>Registo das entregas de todos os fornecedores</li>
              <li>Ações de melhoria</li>
              <li>Definição e acompanhamento de objetivos da empresa</li>
              <li>
                Análise da evolução global dos vários indicadores de gestão
              </li>
              <li>Definição de inquéritos aos clientes</li>
            </ul>

            <Image src={Qualidade}></Image>
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
        <h1>Software de Gestão</h1>

        <p>
          A gestão completa da sua empresa, com aumento de produtividade e
          redução de custos.
        </p>
        {/* <div className="buttons">
            <button className="more-info">Saber mais</button>
          </div> */}
      </div>
      <div className="gestao-content">
        <h3>
          Todas as áreas comunicam,{" "}
          <span>trocam informação e crescem com a empresa</span>
        </h3>
        <p>
          Da gestão da área financeira, passando por processos de faturação
          eficazes, até à qualidade do serviço prestado ao cliente, tenha todas
          as áreas vitais da sua empresa altamente integradas e controladas com
          ferramentas de análise e reporting on time, prontas a usar.{" "}
        </p>
        <div className="img-container">
          <Image className="img" src={Banner}></Image>
        </div>{" "}
      </div>
      <div className="gestao-description">
        <h3>
          <span>Tenha </span>total controlo
          <span> comercial e financeiro da sua empresa</span>
        </h3>
        <div className="description-options">
          <div className="option">
            <div className="option-text">
              <Image src={Monitoring}></Image>
              <h4>Otimize todos os processos de gestão </h4>
              <p>
                Desde clientes e fornecedores, contas correntes e stocks,
                encomendas e orçamentos, folhas de obra e guias de transporte,
                faturação e compras, recibos e pagamentos, cobranças e dossiers
                internos, tesouraria e bancos, emissão de documentos e
                comunicação com a AT – veja todas as suas necessidades em termos
                de gestão satisfeitas, com aumento de velocidade e
                produtividade.{" "}
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Automation}></Image>
              <h4>Esteja sempre a par do estado do seu negócio</h4>
              <p>
                Num único monitor, tem acesso a um conjunto de análises e
                indicadores, que possibilitam um olhar detalhado sobre os
                números da empresa e do negócio, essenciais para um melhor
                suporte à tomada de decisão.{" "}
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Law}></Image>
              <h4>Cumpra com as obrigações legais sem esforço</h4>
              <p>
                Minimize a burocracia. Simplifique, controle e aumente a
                rastreabilidade dos processos. O sistema integrado de gestão da
                PHC está sempre atualizado de acordo com as obrigações legais
                impostas, para que possa gerir a sua empresa sem preocupações.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="more-gestao">
        <h3>
          <span>O software de Gestao Financeira</span> que se adapta ao seu
          negocio
        </h3>
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption("firstOption")}>
            Funcionalidades Gerais
          </p>
          <p onClick={() => setSelectedOption("secondOption")}>
            Funcionalidades Operacionais
          </p>
          <p onClick={() => setSelectedOption("thirdOption")}>
            Gestao de artigos
          </p>
          <p onClick={() => setSelectedOption("fourthOption")}>
            Dashboard, Indicadores e artigos metricas de gestao.
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

      <div className="more-gestao">
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption3("firstOption")}>
            BPM - Gestão e controlo avançado das tarefas e processos{" "}
          </p>
          <p onClick={() => setSelectedOption3("secondOption")}>Portal Web </p>
          <p onClick={() => setSelectedOption3("thirdOption")}>
            Gestão da Qualidade{" "}
          </p>
        </div>
        {renderOption3()}
      </div>

      <PHCForm />
    </div>
  );
}

export default GestaoERP;
