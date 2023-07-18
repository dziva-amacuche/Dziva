"use client";
import { React, useState } from "react";
import Image from "next/image";
import YouTube from 'react-youtube';
import Monitoring from "@/assets/images/ao-mz-suporte-beneficio.jpg";
import Automation from "@/assets/images/ao-mz-suporte-beneficios.jpg";
import Law from "@/assets/images/ao-mz-suporte-beneficios-outro.jpg";
import PHCForm from "@/components/PHCForm";
import "@/styling/Phc.css";
import Background from "@/assets/images/phc/support-bg.jpg";

//Options
import Analises from "@/assets/images/phc/suporte/Analises.png";
import Assistencia from "@/assets/images/phc/suporte/Assistencia.png";
import Internet from "@/assets/images/phc/suporte/Internet.png";
import Pedidos from "@/assets/images/phc/suporte/Pedidos.png";

function SuporteTecnico() {
  const [selectedOption, setSelectedOption] = useState("firstOption");
  const videoId = 'X2IqhD2O4Jk';

  const renderOption = () => {
    switch (selectedOption) {
      case "firstOption":
        return (
          <div className="option">
            <ul>
              <li>Gestão da assistência pós-venda</li>
              <li>
                Integração com o módulo de Faturação e Compras (módulo Gestão
                desktop)
              </li>
              <li>Controlo do parque de equipamentos instalado</li>
              <li>Gestão das garantias dos equipamentos</li>
              <li>
                Gestão dos contratos de assistência e respetiva faturação
                automática de contratos de assistência (módulo Gestão Desktop)
              </li>
              <li>Registo e controlo dos números de série</li>
              <li>Geração e gestão de números de série provisórios</li>
              <li>
                Campos configuráveis para adaptação a cada tipo de equipamento
              </li>
              <li>Gestão de cortes na assistência (por falta de pagamento)</li>
              <li>
                Anexação de documentos como manuais, cópias de contratos aos
                registos do software (modulo Documentos)
              </li>
              <li>Elaboração de inquéritos de satisfação ou reclamação</li>
              <li>
                Impressões desenhadas pelo utilizador, desenho da folha de obra,
                relatório técnico
              </li>
            </ul>
            <Image src={Assistencia}></Image>
          </div>
        );
      case "secondOption":
        return (
          <div className="option">
            <ul>
              <li>Registo completo dos pedidos de assistência técnica</li>
              <li>Recolha e acompanhamento dos tempos dos técnicos</li>
              <li>Monitorização total das intervenções técnicas efetuadas</li>
              <li>
                Monitor de atribuição rápida de pedidos de assistência com base
                em critérios
              </li>
              <li>
                Controlo e registos de tempos de mão de obra e peças na folha de
                obra para posterior faturação
              </li>
              <li>Agenda de marcações para técnicos</li>
              <li>
                Acesso à base de dados técnica e respetiva documentação em anexo
                (módulo Documentos)
              </li>
              <li>
                Know-how técnico (conteúdos multimédia, artigos da base de dados
                e fórum de discussão interno)
              </li>
            </ul>

            <Image src={Pedidos}></Image>
          </div>
        );
      case "thirdOption":
        return (
          <div className="option">
            <ul>
              <li>
                Possibilidade de o cliente abrir os seus pedidos de assistência
              </li>
              <li>
                Gestão de diálogos digital entre a área de suporte e o cliente
              </li>
              <li>
                Apoio técnico aos clientes via internet, site do cliente (módulo
                Suporte Extranet Web)
              </li>
              <li>
                Apoio às equipas técnicas ou delegações no exterior via
                internet, site do técnico (módulo Suporte Intranet Web)
              </li>
              <li>
                Assinatura digital pelo cliente relativamente à assistência
                prestada
              </li>
              <li>Fórum de discussão</li>
              <li>Chats</li>
              <li>
                Partilha de documentos técnicos disponibilizados via Internet
                (modulo Documentos)
              </li>
            </ul>

            <Image src={Internet} className="phone"></Image>
          </div>
        );
      case "fourthOption":
        return (
          <div className="option">
            <ul>
              <li>Análises estatísticas sobre o historial dos equipamentos</li>
              <li>Histórico dos técnicos e respetivos trabalhos efetuados</li>
              <li>
                Historial de intervenção por equipamento, por técnico, por tipo
                de intervenção
              </li>
              <li>Análise da ocupação dos técnicos</li>
              <li>
                Relatórios completos por cliente, equipamento, contrato, etc.
              </li>
              <li>
                Monitor do conhecimento com pesquisas por múltiplos critérios
              </li>
              <li>Dashboard do Suporte com inúmeros indicadores e análises</li>
            </ul>
            <Image src={Analises}></Image>
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
        <h1>Software de Gestão para Suporte Técnico</h1>

        <p>
          Ganhe tempo, qualidade e eficácia no serviço prestado ao cliente.{" "}
        </p>
        {/* <div className="buttons">
            <button className="more-info">Saber mais</button>
          </div> */}
      </div>
      <div className="gestao-content">
        <h3>
          <span>Controlo completo da assistência técnica com </span>otimização
          da rentabilidade
        </h3>
        <p>
          Ganhe tempo e aumente a eficácia do seu serviço pós-venda, agilizando
          as suas operações de suporte, monitorizando a gestão do tempo e
          analisando continuamente o nível de serviço que presta aos seus
          clientes.{" "}
        </p>
        <YouTube videoId={videoId} className="youtube" />


      </div>
      <div className="gestao-description">
        <h3>
          <span>Melhore a qualidade do seu serviço pós-venda com o </span>
          Software PHC CS
        </h3>
        <div className="description-options">
          <div className="option">
            <div className="option-text">
              <Image src={Monitoring}></Image>
              <h4>Visão completa do estado dos equipamentos </h4>
              <p>
                Tenha acesso permanente ao histórico de compras e vendas, com
                todos os dados referentes aos equipamentos e respetivos
                utilizadores, sempre acessíveis a partir da ficha de
                equipamento.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Automation}></Image>
              <h4>Aumento da produtividade das equipas</h4>
              <p>
                Controle ao detalhe os pedidos de assistência, com acesso à
                disponibilidade de cada técnico, tarefas em mãos, tempo médio de
                resposta, número de intervenções, registo de ausências, entre
                outros dados essenciais para garantir a máxima produtividade das
                suas equipas de suporte no terreno.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="option-text">
              <Image src={Law}></Image>
              <h4>Monitorização da informação em tempo real</h4>
              <p>
                Aceda a análises estatísticas com informação acerca do seu
                parque instalado por modelo, tipo, e zona, visualize todo o
                historial de assistência técnica a clientes, acompanhe a par e
                passo o desempenho dos seus técnicos e obtenha relatórios
                pormenorizados com toda a informação necessária para a tomada de
                decisão estratégica.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="more-gestao">
        <h3>
          <span>O software que garante a </span> máxima rentabilidade da sua
          assistência técnica
        </h3>
        <div className="more-gestao-options">
          <p onClick={() => setSelectedOption("firstOption")}>
            Funcionalidades Gerais
          </p>
          <p onClick={() => setSelectedOption("secondOption")}>
            Funcionalidades Operacionais
          </p>
          <p onClick={() => setSelectedOption("thirdOption")}>
            Suporte via internet{" "}
          </p>
          <p onClick={() => setSelectedOption("fourthOption")}>
            Mapas e análises
          </p>
        </div>
        {renderOption()}
      </div>
      <PHCForm />
    </div>
  );
}

export default SuporteTecnico;
