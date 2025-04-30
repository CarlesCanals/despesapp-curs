import React, { useState } from 'react';
import './App.css';
import Titol from './components/titol/Titol';
import Modal from './components/modal/Modal';
import DespesesLlista from './components/despesesLlista/DespesesLlista';
import DespesesForm from './components/despesaForm/DespesaForm';


function App() {

  const [mostrarDespeses, setMostrarDespeses] = useState(false);
  const [mostraModal, setMostraModal] = useState(false);
  console.log(mostraModal);

  const [despeses, setDespeses] = useState([
    {concepte: 'Lloguer', quantia: 500, pagatPer: 'Joan', id: 1},
    {concepte: 'Internet', quantia: 50, pagatPer: 'Toni', id: 2},
    {concepte: 'Telèfon', quantia: 30, pagatPer: 'Maria', id: 3},
    {concepte: 'Gas', quantia: 50, pagatPer: 'Pere', id: 4}
  ]);

  const handleClick = (id) => {
    //setDespeses(despeses.filter((despesa) => despesa.id !== id))
    setDespeses((despesesPrevies) => {
      return despesesPrevies.filter((despesa) => despesa.id !== id)
    })
  };

  const handleTancar = () =>{
    setMostraModal(false);
  }  
  
  //console.log(mostrarDespeses);

  return (

        <div>
          <Titol titol="Benvinguts al curs!" subtitol="React & Firebase." />
          <button onClick={() => setMostrarDespeses(!mostrarDespeses)}>
            {mostrarDespeses ? 'Amagar despeses' : 'Mostrar despeses'}
          </button>
          
          {mostrarDespeses && <DespesesLlista despeses={despeses} handleClick={handleClick} />}

          {mostraModal && <Modal handleTancar={handleTancar}>
              <DespesesForm />
          </Modal>}
          <hr />
          <div>
            <button onClick={() => setMostraModal(true)}>Afegir despesa</button>
          </div>
        </div>

  )
}

export default App
