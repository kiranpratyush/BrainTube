import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDXNvBEEgUCmt0cXyhBuO6hlu5l82_YJW4',
  authDomain: 'qtube-78dc5.firebaseapp.com',
  projectId: 'qtube-78dc5',
  storageBucket: 'qtube-78dc5.appspot.com',
  messagingSenderId: '343959710524',
  appId: '1:343959710524:web:8502cbd6e07f9617818c39',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
