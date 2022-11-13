const firebase = require('firebase/app');
const { signInWithEmailAndPassword } = require('firebase/auth');
require('firebase/auth');

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTHDOMAIN ,
    projectId: process.env.PROJECT_ID ,
    storageBucket: process.env.STORAGE_BUCKET ,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
};

firebase.initializeApp(firebaseConfig);

module.exports = {
    async createNewUser(email, senha) {
        const result = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, senha);

        return result.user.uid;
    },

    async login(email, senha) {
        const result = await firebase
            .auth()
            .signInWithEmailAndPassword(email, senha);

        return result.user.uid;
    },
};