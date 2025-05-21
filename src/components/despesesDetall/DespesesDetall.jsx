import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDespeses } from '../../firebase/firebase';

export default function DespesesDetall() {
  const { id } = useParams();
  const [despesa, setDespesa] = useState(null);

  useEffect(() => {
    getDespeses().then((despeses) => {
      const trobat = despeses.find((d) => d.id === id);
      setDespesa(trobat);
    });
  }, [id]);

  if (!despesa) {
    return <div>Carregant despesa...</div>;
  }

  return (
    <div>
        <h1>Detall de la despesa</h1>
        <hr></hr>
      <h2>ID: {despesa.id}</h2>
      <hr></hr>
      <h2>{despesa.concepte}</h2>
      <p>Quantitat: {despesa.quantia} €</p>
      <p><b>Pagat per: </b>{despesa.pagatPer}</p>
    </div>
  );
}
