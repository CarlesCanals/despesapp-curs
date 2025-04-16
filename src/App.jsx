import { useState } from 'react';
import './App.css';
import Titol from './components/titol/Titol';


function App() {

  const [mostrarDespeses, setMostrarDespeses] = useState(false);


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

  //console.log(mostrarDespeses);

  return (

        <div>
          <Titol titol="Benvinguts al curs!" subtitol="React & Firebase." />
          <button onClick={() => setMostrarDespeses(!mostrarDespeses)}>
            {mostrarDespeses ? 'Amagar despeses' : 'Mostrar despeses'}
          </button>
          
          {mostrarDespeses &&
            despeses.map((despesa, index) => (
              <div key={despesa.id}>
                <h2>{index + 1}. {despesa.concepte}</h2>
                <button onClick={() => handleClick(despesa.id)}>Eliminar</button>
              </div>
            ))
          }
        </div>

  )
}

export default App
