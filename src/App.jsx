// src/App.jsx

import React, { useState, useEffect } from 'react';
import './App.css';
import Titol from './components/titol/Titol';
import Modal from './components/modal/Modal';
import DespesesLlista from './components/despesesllista/DespesesLlista';
import DespesaForm from './components/despesaForm/DespesaForm';
import { saveDespesa } from './firebase/firebase';
import { getDespeses } from './firebase/firebase';
import { deleteDespesa } from './firebase/firebase';


function App() {
  // 1) Despeses inicials
  const despesesInicials = [];

  useEffect(() => {
    const getDespesesFromFirebase = async () => {
      const despeses = await getDespeses();
      setDespeses(despeses);
    };

    getDespesesFromFirebase();
  }
  , []);

  // 2) Estats
  const [mostrarDespeses, setMostrarDespeses] = useState(false);
  const [mostraModal, setMostraModal]       = useState(false);
  const [despeses, setDespeses]             = useState(despesesInicials);
  const [filtroPagatPer, setFiltroPagatPer] = useState('');
  const [filtroQuantitat, setFiltroQuantitat] = useState('');
  const [despesesFiltrades, setDespesesFiltrades] = useState(despesesInicials);

  // 3) Afegeix una nova despesa
  const afegirDespesa = (despesa) => {
    setDespeses((prev) => [...prev, despesa]);
  };

  // 4) Elimina una despesa per id
  const handleClick = (id) => {
    setDespeses((prev) => prev.filter((d) => d.id !== id));
  };

  // 5) Tanca el modal
  const handleTancar = () => {
    setMostraModal(false);
  };

  // 6) Filtra cada vegada que canviïn despeses o filtres
  useEffect(() => {
    let result = despeses;

    if (filtroPagatPer) {
      result = result.filter((d) => d.pagatPer === filtroPagatPer);
    }

    if (filtroQuantitat) {
      result = result.filter((d) => d.quantitat > Number(filtroQuantitat));
    }

    setDespesesFiltrades(result);
  }, [despeses, filtroPagatPer, filtroQuantitat]);

  return (
    <div>
      <Titol titol="Benvinguts al curs!" subtitol="React & Firebase." />

      <button onClick={() => setMostrarDespeses((prev) => !prev)}>
        {mostrarDespeses ? 'Amagar despeses' : 'Mostrar despeses'}
      </button>

      {/* Filtre per Pagat per */}
      <label htmlFor="filterPagatPer" style={{ marginLeft: '1rem' }}>
        Filtrar per Pagat per:
      </label>
      <select
        id="filterPagatPer"
        value={filtroPagatPer}
        onChange={(e) => setFiltroPagatPer(e.target.value)}
        style={{ marginLeft: '0.5rem' }}
      >
        <option value="">-- Tots --</option>
        <option value="Joan">Joan</option>
        <option value="Maria">Maria</option>
        <option value="Miquel">Miquel</option>
        <option value="Pere">Pere</option>
        <option value="Anna">Anna</option>
        <option value="Laia">Laia</option>
      </select>

      {/* Filtre per Quantitat */}
      <label htmlFor="filterQuantitat" style={{ marginLeft: '1rem' }}>
        Quantitat &gt;:
      </label>
      <input
        type="number"
        id="filterQuantitat"
        value={filtroQuantitat}
        onChange={(e) => setFiltroQuantitat(e.target.value)}
        style={{ marginLeft: '0.5rem', width: '5rem' }}
      />

      {mostrarDespeses && (
        <DespesesLlista
          despeses={despesesFiltrades}
          handleClick={handleClick}
        />
      )}

      {mostraModal && (
        <Modal handleTancar={handleTancar}>
          <DespesaForm
            afegirDespesa={afegirDespesa}
            handleTancar={handleTancar}
          />
        </Modal>
      )}

      <hr />

      <button onClick={() => setMostraModal(true)}>
        Afegir despesa
      </button>
    </div>
  );
}

export default App;
