// src/components/despesesLlista/DespesesLlista.jsx

import React from 'react';
import estils from './DespesesLlista.module.css';
import { Link } from 'react-router-dom';


export default function DespesesLlista({ despeses, handleClick }) {
  return (
    <div className={estils.llista}>
      {despeses.map((despesa, index) => (
        <div key={despesa.id} className={estils.targeta}>
         
          <Link to={`/despesa/${despesa.id}`} className={estils.enllaç}>
            <h2 className={estils.titol}>{despesa.concepte}</h2>
          </Link>
    
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
