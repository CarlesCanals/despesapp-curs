import React from "react";
import estils from './DespesesLlista.module.css';


export default function DespesesLlista({ despeses, handleClick }) {
    return (
        <div>
            {
                despeses.map((despesa, index) => (
                    <div key={despesa.id} className={estils.targeta}>
                    <h2>{index + 1}. {despesa.concepte}</h2>
                    <button onClick={() => handleClick(despesa.id)}>Eliminar</button>
                    </div>
                ))
            }
        </div>
    )
}