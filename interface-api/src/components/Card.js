// Card.js
import React from 'react';
import '../styles/Card.css';


const Card = ({ title, content, imagemSrc }) => {
  const mostrarPopup = () => {
    alert('Aproveite a promoção especial: passagem a partir de 499,00 imperdível para Salvador!')
  
  };

  return (
    <div className="card">
      <div className="card-body">
        <img src={imagemSrc} alt={title} className="card-image" />
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <button className="btn btn-primary" onClick={mostrarPopup}>
          Saiba Mais
        </button>
      </div>
    </div>
  );
};

export default Card; 