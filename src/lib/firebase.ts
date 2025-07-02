// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDHiaAC_d8uZZSopAxuUmNXU1EkeHbgURc",
  authDomain: "get-location-9ebd6.firebaseapp.com",
  projectId: "get-location-9ebd6",
  storageBucket: "get-location-9ebd6.firebasestorage.app",
  messagingSenderId: "1000912041516",
  appId: "1:1000912041516:web:5358d5a38b6d7e5b784389",
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app)
