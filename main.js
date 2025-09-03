// Firebase App Configuration and Utilities
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore, collection, addDoc, serverTimestamp, getDocs, doc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";

// Firebase Configuration
// TODO: For production, consider using environment variables or Firebase hosting
const firebaseConfig = {
  apiKey: "AIzaSyBUE8FP5aWIYJ4glGmE_H9o17Qpn52Ubhg",
  authDomain: "form-fill-app-d2610.firebaseapp.com",
  projectId: "form-fill-app-d2610",
  storageBucket: "form-fill-app-d2610.firebasestorage.app",
  messagingSenderId: "982130236842",
  appId: "1:982130236842:web:6e5dd3b2d592349bba5fd3",
  measurementId: "G-6XH70HYR26"
};

try {
  console.log('Initializing Firebase...');
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const analytics = getAnalytics(app);

  console.log('Firebase services initialized successfully');

  // Export for use in other modules
  window.firebaseApp = {
    auth,
    db,
    analytics,
    addDoc,
    collection,
    serverTimestamp,
    onAuthStateChanged,
    signOut,
    getDocs,
    doc,
    getDoc,
    deleteDoc
  };

  console.log('Firebase app exported to window.firebaseApp');

  // Dispatch event when Firebase is ready
  window.dispatchEvent(new CustomEvent('firebaseReady'));
  console.log('firebaseReady event dispatched');
  
} catch (error) {
  console.error('Error initializing Firebase:', error);
  
  // Still create a basic object to prevent errors
  window.firebaseApp = {
    error: error.message,
    initialized: false
  };
}
