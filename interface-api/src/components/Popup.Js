// src/components/Popup.js
import React from 'react';

const Popup = ({ title, content, fecharPopup }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={fecharPopup}>&times;</span>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Popup;
