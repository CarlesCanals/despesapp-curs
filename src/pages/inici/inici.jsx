import { useState } from 'react';

import DespesesLlista from '../../components/despesesllista/DespesesLlista';
import Modal from '../../components/modal/Modal';
import DespesaForm from '../../components/despesaForm/DespesaForm';

import { deleteDespesa, saveDespesa } from '../../firebase/firebase';
import { useCollection } from '../../components/hooks/useCollection';


export default function Inici() {
    const [mostraModal, setMostraModal] = useState(false);

    // useCollection retorna null fins que carrega, així que assegura't de gestionar-ho
    const { documents: despeses } = useCollection('despeses');

    const afegirDespesa = async (despesa) => {
        try {
            // Assegura que el camp sigui 'quantia'
            const despesaFirebase = {
                ...despesa,
                quantia: despesa.quantitat,
            };
            delete despesaFirebase.quantitat; // Opcional: elimina la propietat antiga

            await saveDespesa(despesaFirebase);
            setMostraModal(false); // Tanca el modal després de guardar
        } catch (error) {
            console.error('Error afegint la despesa:', error); // Mostra un error si falla
        }
    };

    const eliminarDespesa = async (id) => {
        await deleteDespesa(id);
    };

    const handleTancar = () => {
        setMostraModal(false);
    };

    return (
        <div>
            <h1>Inici</h1>
            {/* Mostra loader mentre no hi ha dades */}
            {!despeses && <p>Carregant despeses...</p>}
            {despeses && <DespesesLlista despeses={despeses} eliminarDespesa={eliminarDespesa} />}
            {mostraModal && (
                <Modal handleTancar={handleTancar}>
                    <DespesaForm afegirDespesa={afegirDespesa} handleTancar={handleTancar} />
                </Modal>
            )}
            <div>
                <button onClick={() => setMostraModal(true)}>Afegir Despesa</button>
            </div>
        </div>
    );
}