import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
        signOut,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
} from "firebase/auth";


const firebaseConfig = { 
        apiKey: "AIzaSyDkMlVd3KEZ41RsnSGjUy2Pd21ehUBHKns",
        authDomain: "iftm-rn-aulas-2025-6b17f.firebaseapp.com",
        projectId: "iftm-rn-aulas-2025-6b17f",
        storageBucket: "iftm-rn-aulas-2025-6b17f.firebasestorage.app",
        messagingSenderId: "214043824781",
        appId: "1:214043824781:web:b5f9287d0481348613c8c4"
 };
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const registrar = async (email, senha) => {
        try {
                await createUserWithEmailAndPassword(
                        auth,
                        email,
                        senha
                );
                alert("Usuário registrado com sucesso!");
        } catch (error) {
                alert("Erro: " + error.message);
        }
};

export const login = async (email, senha) => {
        try {
                await signInWithEmailAndPassword(auth, email, senha);
                alert("Login realizado!");
        } catch (error) {
                alert("Erro: " + error.message);
        }
};

export const logout = async () => {
        await signOut(auth);
};