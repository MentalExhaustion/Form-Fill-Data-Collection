  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBUE8FP5aWIYJ4glGmE_H9o17Qpn52Ubhg",
    authDomain: "form-fill-app-d2610.firebaseapp.com",
    projectId: "form-fill-app-d2610",
    storageBucket: "form-fill-app-d2610.firebasestorage.app",
    messagingSenderId: "982130236842",
    appId: "1:982130236842:web:6e5dd3b2d592349bba5fd3",
    measurementId: "G-6XH70HYR26"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
