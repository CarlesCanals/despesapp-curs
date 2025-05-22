import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import '../registerform/RegisterForm.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [contrasenya, setContrasenya] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const db = getFirestore();
        const auth = getAuth();

        try {
            // Cerca l'usuari pel camp email
            const usersRef = collection(db, 'usuaris');
            const q = query(usersRef, where('email', '==', email));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                setError('L\'usuari no existeix a la base de dades.');
                return;
            }

            // Intenta iniciar sessió
            await signInWithEmailAndPassword(auth, email, contrasenya);
            setError('');
            alert('Login correcte!');
        } catch (err) {
            if (err.code === 'auth/user-not-found') {
                setError('L\'usuari no existeix a la base de dades.');
            } else if (err.code === 'auth/wrong-password') {
                setError('Contrasenya incorrecta.');
            } else {
                setError('Hi ha hagut un error. Torna-ho a intentar.');
            }
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <form onSubmit={handleLogin} className="register-form">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contrasenya" className="form-label">Contrasenya:</label>
                        <input
                            type="password"
                            id="contrasenya"
                            value={contrasenya}
                            onChange={(e) => setContrasenya(e.target.value)}
                            required
                            className="form-input"
                        />
                    </div>
                    <button type="submit" className="register-button">
                        Inicia sessió
                    </button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default Login;