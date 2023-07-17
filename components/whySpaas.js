import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Stock from "@/assets/images/aluguer/Spare-parts-in-stock.png";
import Worldwide from "@/assets/images/aluguer/Global-network-of-multi-vendor-local-field-engineers.png";
import Help from "@/assets/images/aluguer/Help-centers-worldwide-available-around-the-clock.png";
import Customer from "@/assets/images/aluguer/customer-retention-rate.png"
import Offices from "@/assets/images/aluguer/Offices-worldwide.png"
import Locations from "@/assets/images/aluguer/Dedicated-stocking-locations-worldwide.png"



function WhySpaas() {
  return (
    <BENEFITS>
      <div className="container">
        <h3>Porque utilizar o SPaaS da Dziva</h3>
        <div className="motives-container">
          <div className="motive">
            <Image src={Stock}></Image>
            <h4>8,50,000+</h4>
            <p>Peças de reposição em estoque</p>
          </div>
          <div className="motive">
            <Image src={Worldwide}></Image>
            <h4>500+</h4>
            <p>
              Rede global de engenheiros de campo multivendors atuando
              localmente
            </p>
          </div>
          <div className="motive">
            <Image src={Help}></Image>
            <h4>10+</h4>
            <p>
              centrais de ajuda em todo o mundo, disponíveis 24 horas por dia
            </p>
          </div>
          <div className="motive">
            <Image src={Customer}></Image>
            <h4>98%</h4>
            <p>Taxa de retenção de clientes</p>
          </div>
          <div className="motive">
            <Image src={Offices}></Image>
            <h4>45+</h4>
            <p>escritórios em todo o mundo</p>
          </div>
          <div className="motive">
            <Image src={Locations}></Image>
            <h4>330+</h4>
            <p>locais de armazenamento em todo o mundo</p>
          </div>
        </div>
      </div>
    </BENEFITS>
  );
}

const BENEFITS = styled.div`
height: 100vh;
width: 100%;
margin-bottom: 8rem;

.container{
    display: flex;
    flex-direction: column;

    align-items: center;
padding-top: 4rem;
gap: 2rem;

h3{
  font-size:28px;
  color:red;
}

.motives-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap:4rem;
    
    .motive{
        width: 20rem;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        gap:1rem;
        border-radius: 5px;
        box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  transition: opacity 0.3s, transform 0.3s;
    }
    .motive:hover{
  transform: scale(1.1);

    }
}

}
`;

export default WhySpaas;
