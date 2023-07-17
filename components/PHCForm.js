import React from 'react'
import "@/styling/Phc.css";


function PHCForm() {
  return (
    <div className="phc-more">
    <div className="more-text">
      <h3>
        Descubra como a Dziva pode adaptar-se às necessidades do seu
        negócio.
      </h3>
      {/* <p>Peça já uma demonstração e veja o software em ação.</p> */}
    </div>
    <div className="more-form">
      <div className="form-space">
        <input placeholder="Nome*"></input>
        <input placeholder="Email*" type="email"></input>
      </div>
      <div className="form-space">
        <input placeholder="Telefone*"></input>
        <input placeholder="Empresa*"></input>
      </div>
      <div className="checkbox-container">
        <input type="checkbox"></input> <p>Aceito a autorizacao dos <span>dados pessoais.</span></p>
        </div>
      <button>Pedir Uma Demonstracao</button>
    </div>
  </div>
)
}

export default PHCForm