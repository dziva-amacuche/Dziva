"use client";
import { React, useState } from "react";
import Image from "next/image";
import Banner from "@/assets/images/phc/financeira/banner.jpg";
import Monitoring from "@/assets/images/monitoring.jpg";
import Automation from "@/assets/images/automation.jpg";
import Law from "@/assets/images/law.jpg";
import PHCForm from "@/components/PHCForm";
import "@/styling/Phc.css";
import Background from "@/assets/images/phc/financeira-bg.jpg";

//Options
import Gerais from "@/assets/images/phc/financeira/Gerais.jpg";
import Consolidacao from "@/assets/images/phc/financeira/Consolidacao.jpg";
import Imobilizado from "@/assets/images/phc/financeira/Imobilizado.jpg";
import Letras from "@/assets/images/phc/financeira/Letras.jpg";
import Mapas from "@/assets/images/phc/financeira/Mapas.jpg";
import Operacionais from "@/assets/images/phc/financeira/Operacionais.jpg";
import PessoalGerais from "@/assets/images/phc/financeira/Pessoal-Gerais.jpg";
import PessoalMapas from "@/assets/images/phc/financeira/Pessoal-mapas.jpg";
import PessoalOperacionais from "@/assets/images/phc/financeira/Pessoal-operacionais.jpg";
import Portal from "@/assets/images/phc/financeira/Portal.jpg";
import Processamento from "@/assets/images/phc/financeira/Processamento.jpg";

function page() {
  const [selectedOption, setSelectedOption] = useState("firstOption");

  const renderOption = () => {
    switch (selectedOption) {
      case "firstOption":
        return (
          <div className="option">
            <ul>
              <li>
                Contabilidade Geral, Orçamental, Ordem e Analítica (por centros
                de custo ou classe 9)
              </li>
              <li>Possibilidade de trabalhar com 17 meses</li>
              <li>
                Possibilidade de ter um plano de contas paralelo (gama
                Enterprise)
              </li>
            </ul>
            <Image src={Gerais} alt="funcionalidades gerais"></Image>
          </div>
        );
      case "secondOption":
        return (
          <div className="option">
            <ul>
              <li>Lançamentos com base em documentos pré-definidos</li>
              <li>Plano de contas com atribuição automática de taxonomias</li>
              <li>
                Integração automática na contabilidade de documentos de
                faturação, compras, recibos, pagamentos
              </li>
              <li>
                Contabilização de acordo com o Regime Especial de Exigência do
                IVA
              </li>
              <li>Contabilização segundo as regras do Sujeito Passivo</li>
              <li>
                Assistente de abertura, apuramento de resultados e encerramento
                do exercício
              </li>
              <li>Apuramento automático do IVA</li>
            </ul>
            <Image
              src={Operacionais}
              alt="funcionalidades operacionais"
            ></Image>
          </div>
        );
      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>Declaração Periódica de IVA</li>
              <li>Declaração Recapitulativa e Reembolso de IVA</li>
              <li>Produção Automática de Mapas Fiscais</li>
              <li>Balancetes por centro de custo</li>
              <li>Demonstrações financeiras anuais, mensais e comparativas</li>
              <li>
                Análise de resultados, movimentações de capital e o estado da
                empresa
              </li>
              <li>
                Mapas de gestão parametrizáveis pelo utilizador por ano da
                contabilidade (Balanço, DR por naturezas ou funções, Modelo 22)
              </li>
            </ul>
            <Image
              src={Mapas}
              alt="Contabilidade Mapas, impressoes e envios"
            ></Image>
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
              <li>Processamento de vencimentos</li>
              <li>Tabelas de IRPS atualizadas automaticamente via internet</li>
              <li>
                Multiempresa e multiestabelecimento com feriados por
                estabelecimento
              </li>
              <li>Códigos de vencimento totalmente configuráveis</li>
              <li>Integração com o módulo de Contabilidade</li>
              <li>Centralização da informação relativa a cada colaborador</li>
              <li>
                Registo intuitivo de férias, faltas, horas extra e despesas
              </li>
              <li>Gestão de despesas do pessoal</li>
              <li>Recibos verdes, comissionistas e rendas</li>
              <li>
                Análise e controlo de custos através da divisão por centros de
                custo
              </li>
            </ul>

            <Image src={PessoalGerais} alt="funcionalidades gerais"></Image>
          </div>
        );
      case "secondOption":
        return (
          <div className="option">
            <ul>
              <li>Gestão de penhoras</li>
              <li>Remunerações em espécie</li>
              <li>Importação de dados do relógio de ponto</li>
              <li>Cálculo de valores a pagar à saída</li>
              <li>
                Gestão de outros profissionais e respetiva emissão de recibos
              </li>
              <li>Transferências bancárias de vencimentos</li>
            </ul>

            <Image
              src={PessoalOperacionais}
              alt="funcionalidades operacionais"
            ></Image>
          </div>
        );
      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>Declaração mensal de rendimentos</li>
              <li>
                Produção e exportação do ficheiro da Segurança Social
                (possibilidade de enviar via portal do INSS)
              </li>
              <li>
                Emissão dos recibos de vencimento em lote e processamento de
                ordenados para os respetivos bancos
              </li>
              <li>
                Emissão de recibos de vencimento individualmente ou em lote e
                envio do PDF (protegido) por email
              </li>
              <li>
                Dashboard com indicadores e métricas dos funcionários e
                departamentos
              </li>
            </ul>

            <Image src={PessoalMapas}></Image>
          </div>
        );

      default:
        return null;
    }
  };

  const [selectedOption3, setSelectedOption3] = useState("firstOption");

  const renderOption3 = () => {
    switch (selectedOption3) {
      case "firstOption":
        return (
          <div className="option">
            <ul>
              <li>Criação de fichas de Ativos com cadastro e histórico</li>
              <li>
                Criação da ficha do Ativo a partir de uma compra lançada no
                módulo de gestão
              </li>
              <li>Divisão de 1 Ativo em vários</li>
              <li>Controlo de seguros e leasings</li>
              <li>
                Simulação e processamento de depreciações, revalorizações,
                reavaliações, imparidades, abates
              </li>
              <li>Controlo dos custos de amortizações</li>
              <li>Faturação do abate a partir do ecrã de ativos</li>
              <li>Mapas de mais e menos valias</li>
              <li>Impressão de etiquetas para identificação dos Ativos</li>
              <li>Elaboração do inventário físico dos Ativos</li>
            </ul>

            <Image src={Imobilizado} alt="funcionalidades gerais"></Image>
          </div>
        );
      case "secondOption":
        return (
          <div className="option">
            <ul>
              <li>Assistente para agendar tarefas rotina</li>
              <li>Processamento de vencimentos de várias empresas</li>
              <li>Integrações na contabilidade de múltiplas empresas</li>
              <li>Muito adequado para Gabinetes de Contabilidade</li>
              <li>Controlo de tempos despendidos em cada uma das empresas</li>
              <li>
                Definição de acessos do utilizador em cada uma das empresas
              </li>
              <li>
                Departamentos financeiros que façam a gestão de várias empresas
              </li>
              <li>
                Cópia de layout de documentos, utilizadores, etc., para várias
                empresas
              </li>
            </ul>

            <Image src={Processamento}></Image>
          </div>
        );
      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>Organograma da empresa</li>
              <li>Marcação de faltas e férias</li>
              <li>Troca de faltas por dias de férias</li>
              <li>Introdução e consulta de despesas</li>
              <li>Consulta e impressão de recibos de vencimento</li>
              <li>Rede colaborativa (reduz em cerca de 40% o email)</li>
              <li>
                Edição e manutenção da ficha de funcionário (dados pessoais)
              </li>
            </ul>

            <Image src={Portal}></Image>
          </div>
        );

      case "fourthOption":
        return (
          <div className="option">
            <ul>
              <li>Gestão de títulos de dividas a receber (clientes)</li>
              <li>Gestão de títulos de dividas a pagar (fornecedores)</li>
              <li>
                Geração de novos títulos de dívida com base na conta corrente,
                reforma ou outros
              </li>
              <li>Gestão das letras reformadas</li>
              <li>
                Gestão dos vários status dos títulos de dívida (em carteira,
                reforma, enviada ao banco, etc.)
              </li>
              <li>Integração total com o módulo de contabilidade</li>
              <li>Análise de vencimento dos títulos de dívida</li>
              <li>Mapa anual com datas de vencimento por mês</li>
              <li>Emissão de notas de débito de juros e encargos</li>
              <li>
                Painel de bordo com a situação resumida de todos os títulos
              </li>
              <li>Desenho dos títulos de dívida definido pelo utilizador</li>
            </ul>

            <Image src={Letras}></Image>
          </div>
        );

      case "fifthOption":
        return (
          <div className="option">
            <ul>
              <li>
                Definição das sociedades do grupo e respetivas participações
              </li>
              <li>Configuração do formato de consolidação base das contas</li>
              <li>
                Consolidação dos dados incluindo a gestão de centros de custo de
                cada sociedade
              </li>
              <li>
                Definição das instruções de consolidação orçamental e realização
                da respetiva integração dos saldos
              </li>
              <li>
                Cálculo e atualização automática das percentagens de
                participação do grupo nas respetivas sociedades
              </li>
              <li>Execução de ajustamentos e integrações de saldos</li>
              <li>Possibilidade de introdução de movimentos diretos</li>
              <li>
                Definição para cada sociedade quais os ajustamentos de
                consolidação
              </li>
              <li>
                Obtenção dos mapas legais para as contabilidades consolidadas
                (balanço e demonstração de resultados)
              </li>
              <li>
                Possibilidade de obter extratos de conta, balancetes, diários e
                outros mapas
              </li>
            </ul>

            <Image src={Consolidacao}></Image>
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
        <h1>Software de Gestão Financeira</h1>

        <p>
          O controlo financeiro otimizado e de forma integrada das areas vitais
          da sua empresa{" "}
        </p>
        {/* <div className="buttons">
              <button className="more-info">Saber mais</button>
            </div> */}
      </div>
      <div className="gestao-content">
        <h3>
          Processos <span>financeiros</span> mais ageis
        </h3>
        <p>
          Tenha total controlo sobre a contabilidade geral, analitica e
          orcamental da sua empresa, seja rapido a produzir mapas fiscais e a
          lancar documentos, garanta uma gestao eficaz dos seus ativos
          imobilizados e efetue reconciliacoes bancarias de forma automatica,
          com um software de gestao financeira que se adapta a realidade do seu
          negocio.
        </p>
        <div className="img-container">
          <Image className="img" src={Banner}></Image>
        </div>{" "}
      </div>
      <div className="gestao-description">
        <h3>
          Eleve a gestao <span>financeira da sua empresa</span>
        </h3>
        <div className="description-options">
          <div className="option">
            <div className="option-text">
              <Image src={Monitoring}></Image>
              <h4>
                Monitorize os seus ativos financeiros a partir de qualquer lugar
              </h4>
              <p>
                Controle toda a contabilidade geral ou analítica da sua empresa,
                de uma forma simples e prática, onde e quando quiser. Tudo em
                tempo real, e a partir de qualquer dispositivo.{" "}
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Automation}></Image>
              <h4>Automatize e agende tarefas poupando tempo e recursos</h4>
              <p>
                Concentre toda a informação num único local, de forma integrada,
                acessível e segura. Elimine o uso de papel, reduza custos e
                agilize a contabilidade com processos automáticos.{" "}
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Law}></Image>
              <h4>Cumpra com as obrigações legais sem esforço</h4>
              <p>
                O programa de gestão financeira PHC CS está sempre atualizado em
                conformidade com as exigências legais, para que possa gerir a
                sua empresa sem essa preocupação em mente.{" "}
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
            Contabilidade Funcionalidades Gerais
          </p>
          <p onClick={() => setSelectedOption("secondOption")}>
            Contabilidade Funcionalidades Operacionais
          </p>
          <p onClick={() => setSelectedOption("thirdOption")}>
            Contabilidade
            <br /> Mapas, impressoes e envios
          </p>
        </div>
        {renderOption()}
      </div>
      <div className="more-gestao">
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption2("firstOption")}>
            Pessoal Funcionalidades Gerais
          </p>
          <p onClick={() => setSelectedOption2("secondOption")}>
            Pessoal Funcionalidades Operacionais
          </p>
          <p onClick={() => setSelectedOption2("thirdOption")}>
            Contabilidade
            <br /> Mapas, impressoes e envios
          </p>
        </div>
        {renderOption2()}
      </div>

      <div className="more-gestao">
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption3("firstOption")}>Imobilizado</p>
          <p onClick={() => setSelectedOption3("secondOption")}>
            Processamento de tarefas em multiempresa
          </p>
          <p onClick={() => setSelectedOption3("thirdOption")}>
            Portal do Colaborador
          </p>
          <p onClick={() => setSelectedOption3("fourthOption")}>Letras</p>
          <p onClick={() => setSelectedOption3("fifthOption")}>Consolidação</p>
        </div>
        {renderOption3()}
      </div>

      <PHCForm />
    </div>
  );
}

export default page;
