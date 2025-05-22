// src/App.jsx

import './App.css';
import Titol from './components/titol/Titol';
import Modal from './components/modal/Modal';
import DespesesLlista from './components/despesesllista/DespesesLlista';
import DespesaForm from './components/despesaForm/DespesaForm';
import { saveDespesa } from './firebase/firebase';
import { getDespeses } from './firebase/firebase';
import { deleteDespesa } from './firebase/firebase';
import {Routes, Route, Navigate} from 'react-router-dom';
import Inici from './pages/inici/inici';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Navbar from './components/navbar/Navbar';
import DespesesDetall from './components/despesesDetall/DespesesDetall';

function App() {

  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Inici />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Navigate to="/" replace/>} />
          <Route path='/despesa/:id' element={<DespesesDetall />} />
        </Routes>
    </div>
  )
}

export default App
