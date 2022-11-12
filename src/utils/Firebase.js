const firebase = require('firebase/app');
const { signInWithEmailAndPassword } = require('firebase/auth');
require('firebase/auth');

/* tentativa de resolver problema atualização função 'auth'

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/app';
import { getAuth } from 'firebase/app';

function initializeServices() {
    const firebaseApp = initializeApp(config.firebase);
    const firestore = getFirestore(firebaseApp);
    const getAuth = getAuth(firebaseApp);
    return { firebaseApp, firestore, auth };
}

export function getFirebase() {
    const services = initializeServices();
    return services;
} */

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTHDOMAIN ,
    projectId: process.env.PROJECT_ID ,
    storageBucket: process.env.STORAGE_BUCKET ,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
};

firebase.initializeApp(firebaseConfig);

module.exports = {
    async createNewUser(email, password) {
        const result = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);

        return result.user.uid;
    },

    async login(email, password) {
        const result = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);

        return result.user.uid;
    },
};