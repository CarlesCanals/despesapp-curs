import './DespesaForm.css';

export default function DespesaForm() {  
    return (
        <form className="despesa-form">
            <label htmlFor="concepte">Concepte</label>
            <input type="text" id="concepte" name="concepte" required />
            <label htmlFor="quantitat">Quantitat</label>
            <input type="number" id="quantitat" name="quantitat" required min="0" />
            <button type="submit">Afegir</button>
        </form>
    );
}   