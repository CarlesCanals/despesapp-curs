// 1) Imports
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// 2) Configuració
const firebaseConfig = {
  apiKey: "AIzaSyAg9LHfYIL9pxotY-p9NAKDlPV6h7jgqTw",
  authDomain: "crud-despeses.firebaseapp.com",
  projectId: "crud-despeses",
  storageBucket: "crud-despeses.firebasestorage.app",
  messagingSenderId: "233865265625",
  appId: "1:233865265625:web:a69897f498b288c16459c8",
  measurementId: "G-JGECV13XLC"
};

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
