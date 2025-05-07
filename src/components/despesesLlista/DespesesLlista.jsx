// src/components/despesesLlista/DespesesLlista.jsx

import React from 'react';
import estils from './DespesesLlista.module.css';

export default function DespesesLlista({ despeses, handleClick }) {
  return (
    <div className={estils.llista}>
      {despeses.map((despesa, index) => (
        <div key={despesa.id} className={estils.targeta}>
          <h2>{index + 1}. {despesa.concepte}</h2>
          <div className={estils.detalls}>
            <span><strong>Quantitat:</strong> {despesa.quantitat} €</span>
            <br></br><span><strong>Pagat per:</strong> {despesa.pagatPer}</span>
          </div>
          <button
            className={estils.eliminar}
            onClick={() => handleClick(despesa.id)}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}
