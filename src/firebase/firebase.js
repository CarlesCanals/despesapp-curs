// 1) Imports
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from './config.js';

// 3) Inicialitza
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const db = getFirestore(app);

// 4) Funció per desar despesa
export const saveDespesa = async (despesa) => {
  console.log('Desant despesa:', despesa);
  const docRef = await addDoc(collection(db, "despeses"), {
    concepte: despesa.concepte,
    quantia: despesa.quantia,
    pagatPer: despesa.pagatPer
  });
  console.log('Despesa desada amb ID:', docRef.id);
  return docRef.id;
};

export const getDespeses = async () => {
  const querySnapshot = await getDocs(collection(db, "despeses"));
  const despeses = [];
  querySnapshot.forEach((doc) => {
    despeses.push({ id: doc.id, ...doc.data() });
  });
  return despeses;
};

export const deleteDespesa = async (id) => {
  await deleteDoc(doc(db, "despeses", id));
  console.log('Despesa esborrada:', id);
};

export const onGetDespeses = (callback) => {
  return onSnapshot(collection(db, "despeses"), callback);
};
