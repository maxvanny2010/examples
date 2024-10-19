import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyCLEtfRJiDiprcSfeQPG3lzNtMElOssiSw',
	authDomain: 'products-66d03.firebaseapp.com',
	projectId: 'products-66d03',
	storageBucket: 'products-66d03.appspot.com',
	messagingSenderId: '497284901608',
	appId: '1:497284901608:web:ba1f2affcbca083dfaf75d',
	databaseURL: 'https://products-66d03-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
