import './Modal.css';

export default function Modal({ children, handleTancar }) {
    return (
        <div className="modal-fons">
            <div className="modal">
                {children}
                <button onClick={handleTancar}>Tancar</button>
            </div>
        </div>
    )
}
