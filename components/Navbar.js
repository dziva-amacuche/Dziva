"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useRef } from "react";
import Logo from "@/assets/images/dziva-logo.png";
import styled from "styled-components";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";

function Navbar() {
  // const [isActive, setIsActive] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("mobile");
  };
  const handleToggle = () => {
    setDropdownVisible((prevDropdownVisible) => !prevDropdownVisible);
  };

  //PHC

  const [phcSubDropDownVisible, setPHCSubDropdownVisible] = useState(false);
  const handlePHCToggle = () => {
    setPHCSubDropdownVisible(
      (prevPHCSubDropdownVisible) => !prevPHCSubDropdownVisible
    );
  };

  //Aluguer
  const [aluguerDropDownVisible, setAluguerDropDownVisible] = useState(false);
  const handleAluguerToggle = () => {
    setAluguerDropDownVisible(
      (prevAluguerDropDownVisible) => !prevAluguerDropDownVisible
    );
  };
  return (
    <NAV>
      <Image src={Logo} className="logo-img" alt="Logo"></Image>

      <ul className="menu-bar" ref={navRef}>
        <li>
          <p>
            <Link href="/">Home</Link>
          </p>
        </li>

        <li
          className="services"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
          onClick={handleToggle}
        >
          <div className="serv-cont">
            <p>Serviços</p>
            <div>
              <FaAngleDown className="down-arrow" />
            </div>
          </div>

          {dropdownVisible && (
            <div className="dropdown-menu">
              <ul>
                <h3>
                  <Link href="/consultoria">Consultoria de TI</Link>
                </h3>
                <li>
                  <Link href="/consultoria/#outsourcing">
                    <p>Outsourcing de TI</p>
                  </Link>
                </li>
                <li>
                  <Link href="/consultoria/#it-support">
                    <p>Suporte de TI</p>
                  </Link>
                </li>
                <li>
                  <p>Segurança da informacao</p>
                </li>
              </ul>
              <ul>
                <h3>
                  <Link href="/rede">Rede</Link>
                </h3>
                <li>
                  <p>Cabeamento Estruturado</p>
                </li>
                <li>
                  <p>Projetos de Redes</p>
                </li>
                <li>
                  <p>Instalação Wi-fi</p>
                </li>
                <li>
                  <p>Cabeamento de Rede</p>
                </li>
                <li>
                  <p>Certificação de rede</p>
                </li>
              </ul>
              <ul>
                <h3>
                  <Link href="/web">WEB</Link>
                </h3>
                <li>
                  <p>Domínios </p>
                </li>
                <li>
                  <p>Hospedagem</p>
                </li>
                <li>
                  <p>Design de Websites e Aplicações</p>
                </li>
              </ul>
              <ul>
                <h3>
                  <Link href="/cctv">CCTV</Link>
                </h3>
                <li>
                  <p>Projeto</p>
                </li>
                <li>
                  <p>Instalação</p>
                </li>
                <li>
                  <p>Manutenção</p>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          className="services phc"
          onMouseEnter={() => setPHCSubDropdownVisible(true)}
          onMouseLeave={() => setPHCSubDropdownVisible(false)}
          onClick={handlePHCToggle}
        >
          <div className="serv-cont">
            <p>Soluções PHC </p>
            <FaAngleDown className="down-arrow" />
          </div>
          {phcSubDropDownVisible && (
            <div className="dropdown-menu phc">
              <ul>
                <h3>Soluções Transversais</h3>
                <li>
                  <Link href="/gestao-e-erp">
                    <p>Gestão e ERP</p>
                  </Link>
                </li>
                <li>
                  <Link href="/gestao-financeira">
                    <p>Financeira</p>
                  </Link>
                </li>
                <li>
                  <Link href="/gestao-para-suporte-tecnico">
                    <p>Suporte Técnico</p>
                  </Link>
                </li>
                <li>
                  <Link href="/gestao-para-crm">
                    <p>CRM</p>
                  </Link>
                </li>
                <li>
                  <Link href="/vencimentos-seguranca-no-trabalho">
                    <p>Vencimentos e Segurança no Trabalho</p>
                  </Link>
                </li>
                <li>
                  <Link href="/gestao-de-capital-humano">
                    <p>Gestão de Capital Humano</p>
                  </Link>
                </li>
                <li>
                  <Link href="/gestao-para-equipas-e-projetos">
                    <p>Equipas e Projetos</p>
                  </Link>
                </li>
                <li>
                  <Link href="/gestao-para-frotas">
                    <p>Frota</p>
                  </Link>
                </li>
              </ul>
              <ul>
                <h3>Soluções Setoriais</h3>
                <li>
                  <Link href="/gestao-para-industria-e-producao">
                    <p>Indústria e Produção</p>
                  </Link>
                </li>
                <li>
                  <Link href="/gestao-para-logistica-e-distribuicao">
                    <p>Logística e Distribuição</p>
                  </Link>
                </li>
                <li>
                  <Link href="/gestao-para-restauracao">
                    <p>Restauração</p>
                  </Link>
                </li>
                <li>
                  <Link href="/gestao-para-retalho">
                    <p>Retalho</p>
                  </Link>
                </li>
                <li>
                  <Link href="/gestao-para-clinicas">
                    <p>Clínicas</p>
                  </Link>
                </li>
                <li>
                  <Link href="/gestao-para-construcao-civil">
                    <p>Construção Civil</p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="services aluguer"
          onMouseEnter={() => setAluguerDropDownVisible(true)}
          onMouseLeave={() => setAluguerDropDownVisible(false)}
          onClick={handleAluguerToggle}
        >
          <div className="serv-cont">
            <p>Aluguer de Equipamento</p> <FaAngleDown className="down-arrow" />
          </div>
          {aluguerDropDownVisible && (
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link href="/spare-as-a-service">
                    <p>Spare as a Service, SPaaS</p>
                  </Link>{" "}
                </li>
                <li>
                  <Link href="/locacao-de-equipamentos-de-ti">
                    <p>Locação de Equipamentos de TI</p>{" "}
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li>
          <p src="#">Sobre nós</p>
        </li>
        <li>
          <p src="#"> Casos de sucesso</p>
        </li>
        <button className="nav-btn hide-menu" onClick={showNavBar}>
          <FaTimes />
        </button>
      </ul>
      <button className="nav-btn show-menu" onClick={showNavBar}>
        <FaBars />
      </button>
    </NAV>
  );
}

const NAV = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 3.8rem;
  background-color: #ac9a9ad8;
  width: 100%;
  position: relative;
  top: 0rem;
  margin-bottom: -3.8rem;
  z-index: 2;
  align-items: center;
  padding: 0 0rem;
  border-bottom: none;
  transition: background-color 0.45s ease-in-out;

  //RESPONSIVENESS FOR MOBILE
  @media only screen and (max-width: 768px) {
    .logo-img {
      width: 4.8rem;
      margin-left: 18px;
    }
    .menu-bar {
      display: flex;
      position: fixed;
      flex-direction: column;
      margin-top: 90vh;
      padding-top: 10rem;
      height: 100vh;
      width: 100%;
      left: 0.75rem;
      overflow-y: scroll !important;
      overflow-x: hidden;
      background-color: hsla(0, 4%, 21%, 0.692);
      transition: 1s;
      transform: translateX(100vw);
      backdrop-filter: blur(6px) !important;
    }

    .dropdown-menu {
      z-index: 1 !important;
      flex-direction: column;
      overflow-y: scroll !important;
      left: -5rem !important;
      height: 100vh !important;
      position: absolute !important;
      background: none !important;
      width: 100% !important;
      border: none;
      box-shadow: none !important;
      background-color: grey !important;
    }

    .mobile {
      transform: none;
    }
    .nav-btn {
      visibility: visible !important;
      width: 4rem;
      height: 4rem;
      margin-right: 1rem;
      background: none !important;
      border: none !important;
    }

    .hide-menu {
      margin-top: -10rem;
      margin-left: 14rem;
    }
  }

  &.active {
    background-color: #38343496;
  }
  .logo-img {
    width: 104.16px;
    height: 62.5px;
    filter: contrast(980%);
    margin-left: 4rem;
  }

  .serv-cont {
    display: flex;
    .down-arrow {
      margin-top: 1px;
      filter: invert();
    }
  }

  .nav-btn {
    visibility: hidden;
  }

  ul {
    display: flex;
    flex-grow: 1;
    margin-left: 1rem;
    margin-top: 0.5rem;
    letter-spacing: 1.4px;
    li {
      margin: 0rem 1.5rem !important;
    }

    .services {
      position: relative;
      display: inline;
      .dropdown-menu {
        position: absolute;
        top: 1.3rem;
        left: -10rem;
        width: 70rem;
        height: 20rem;
        padding: 1rem;
        list-style: none;
        backdrop-filter: blur(2px);
        display: flex;
        /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
        z-index: -1;
        background-color: #38343493;
        box-shadow: 0px 1px 4px 4px rgba(0, 0, 0, 0.5);

        ul {
          display: flex;
          flex-direction: column;
        }

        li {
          margin: 1rem 0;
          font-size: 16px;
          list-style: none;
          :hover {
            color: #dc241f !important;
            border-bottom: 1px solid red;
          }
          transition: color 0.15s ease-in-out;
          p {
            color: white;
            display: block;
            padding: 0.5rem 1r;
          }
        }
      }
    }
    .phc {
      .dropdown-menu {
        left: -18rem;
        width: 50rem;
        height: 27rem;
      }
    }

    .aluguer {
      .dropdown-menu {
        left: -4rem;
        width: 22rem;
        height: 6rem;
      }
    }
  }
  ul li {
    margin: 0 2rem;
    font-size: 14px;

    p {
      color: white;
      transition: color 0.25s ease-in-out, font-weight 0.25s ease-in-out;

      :hover {
        color: #dc241f;
        font-weight: bolder;
      }
    }
  }
`;

export default Navbar;
