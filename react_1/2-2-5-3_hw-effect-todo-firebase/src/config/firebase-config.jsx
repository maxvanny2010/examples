import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDf_Y8wrDP0canT3jcrxAoYPeTTJjBmHkg',
	authDomain: 'todo-c0d0e.firebaseapp.com',
	projectId: 'todo-c0d0e',
	storageBucket: 'todo-c0d0e.appspot.com',
	messagingSenderId: '269369243159',
	appId: '1:269369243159:web:b2e8e62ad159170a34ce52',
	databaseURL: 'https://todo-c0d0e-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
