import React from "react";
import Image from 'next/image';
import styled from "styled-components";
import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import linkedin from "@/assets/icons/linkedin.svg";

function Footer() {
  return (
    <RODAPE>
      <div className="rodape-container">
        <div className="rodape endereco">
          <h3>ENDEREÇO</h3>
          <p>Av. Romão Fernandes Farinha, N° 376- Maputo= - Moçambique</p>
        </div>

        <div className="rodape contactos">
          <h3>CONTACTOS</h3>
          <p>Email: <a href="mailto:info@dziva.co.mz">info@dziva.co.mz</a></p>
          <p>Telefone: +258 873080400</p>
        </div>

        <div className="rodape socials">
          <h3>SEGUE-NOS</h3>
          <div className="box-image">
            <a href="https://instagram.com/dziva.ti?igshid=MzRlODBiNWFlZA==" target="_blank"><Image  className="img" src={instagram}></Image></a>
            <a href="https://www.facebook.com/dziva.ti?mibextid=LQQJ4d" target="_blank"><Image  className="img" src={facebook}></Image></a>
            <a href="https://www.linkedin.com/company/dziva/" target="_blank"><Image className="img"  src={linkedin}></Image></a>
          </div>
        </div>

        <div className="newsletter-container">
          <h3>NEWSLETTER</h3>
          <form action="mailto:andersonmacuche@gmail.com">
            <input placeholder="Endereco de email" type="email"></input>
            <input
              type="submit"
              placeholder="Subscrever"
              className="button"
            ></input>
          </form>
        </div>
      </div>
    </RODAPE>
  );
}

const RODAPE = styled.div`
  background-color: #383434;
  max-height: 30vh;
  overflow: hidden;
  width: 100%;
  position: relative;
  padding-bottom: 2rem;

  p {
    color: white;
    font-size: 16px;
    margin: 0.3rem 0;
    a {
    color: white !important;
  text-decoration:underline !important;}
  }
  h3 {
    color: white;
    margin: 1rem 0;
  }

  //RESPONSIVENESS FOR MOBILE
  @media only screen and (max-width: 768px) {
    height: fit-content;
    max-width: 100%;
    
    .rodape-container {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      margin: 2rem 2rem !important;
      .rodape {
        margin: 0 !important;;
        width: 80% !important;
      } 
    }

    .newsletter-container {
      form {
        
        input {
          width: 75vw !important;
          height: 1.5rem !important;
          border: none;
          margin: 0.15rem 0;
          border-radius: 2px;
          padding: 0.5rem;
        }
        .button {
          background-color: #a7a3a3;
          color: white;
          width: 79vw !important;
          height: 2.5rem !important;
        }
        .button:hover{
          background-color: #757373;
        }
      }
    }
  }

  .rodape-container {
    margin: 2rem 2rem;
    margin-left: 7rem;
    display: flex;
    width: 100%;

    .rodape {
      width: 20%;
      margin: 0 2rem;
      
    }
    .socials {
      .box-image {
        display: flex;
        margin-left: -2px;
        margin-top: -24rem;
        .img {
          width: 2rem;
          cursor: pointer;
          filter: invert(70%);
        }
      }
    }

    .newsletter-container{
      width: 50%;
      form {
        display: flex;
        flex-direction: column !important;
        input {
          width: 40%;
          height: 0.4rem;
          border: none;
          margin: 0.15rem 0;
          border-radius: 2px;
          padding: 0.5rem;
        }
        .button {
          background-color: #a7a3a3;
          color: white;
          width: 43%;
          height: 1.75rem;
        }
        .button:hover{
          background-color: #757373;
        }
      }
    }
  }
`;

export default Footer;
