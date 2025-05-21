import { useEffect, useState } from 'react';
import { onGetDespeses } from '../../firebase/firebase';

export const useCollection = (collection) => {
    const [documents, setDocuments] = useState(null);

    useEffect(() => {
        // Només funciona per la col·lecció 'despeses'
        const unsubscribe = onGetDespeses((querySnapshot) => {
            let resultats = [];
            querySnapshot.forEach((doc) => {
                resultats.push({ ...doc.data(), id: doc.id });
            });
            setDocuments(resultats);
        });
        return () => unsubscribe();
    }, [collection]);

    return { documents };
};