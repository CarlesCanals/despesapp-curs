// src/components/despesaForm/DespesaForm.jsx

import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getApp } from 'firebase/app';
import './DespesaForm.css';

export default function DespesaForm({ afegirDespesa, handleTancar }) {
  const [concepte, setConcepte] = useState('');
  const [quantitat, setQuantitat] = useState('');
  const [pagatPer, setPagatPer] = useState('');

  const resetForm = () => {
    setConcepte('');
    setQuantitat('');
    setPagatPer('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const despesa = {
      concepte,
      quantitat,
      pagatPer,
      id: Math.floor(Math.random() * 1000),
    };
    afegirDespesa(despesa);
    resetForm();
    handleTancar();
  };

  return (
    <form className="despesa-form" onSubmit={handleSubmit}>
      <label htmlFor="concepte">Concepte</label>
      <input
        type="text"
        id="concepte"
        name="concepte"
        required
        onChange={e => setConcepte(e.target.value)}
        value={concepte}
      />

      <label htmlFor="quantitat">Quantitat</label>
      <input
        type="number"
        id="quantitat"
        name="quantitat"
        required
        min="0"
        onChange={e => setQuantitat(e.target.value)}
        value={quantitat}
      />

      <label htmlFor="pagatPer">Pagat per</label>
      <select
        id="pagatPer"
        name="pagatPer"
        required
        value={pagatPer}
        onChange={e => setPagatPer(e.target.value)}
      >
        <option value="" disabled>-- Selecciona un nom --</option>
        <option value="Maria">Maria</option>
        <option value="Joan">Joan</option>
        <option value="Pere">Pere</option>
        <option value="Anna">Anna</option>
        <option value="Laia">Laia</option>
      </select>

      <button type="submit">Afegir</button>
    </form>
  );
}
