// ============================================================
// Firebase config — REPLACE with your own project's values.
// Get these from: Firebase Console > Project Settings > General
// > Your apps > Web app (or reuse the same project as your
// JJ Boutique / sadiaiindia Android app if you want shared users).
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyBBNEMUfRBm1PhE-BGa73eljKW3sWqNG8o",
  authDomain: "sareeweb-25006.firebaseapp.com",
  databaseURL: "https://sareeweb-25006-default-rtdb.firebaseio.com",
  projectId: "sareeweb-25006",
  storageBucket: "sareeweb-25006.firebasestorage.app",
  messagingSenderId: "391602121288",
  appId: "1:391602121288:web:539733a171b31dc456c67d"
};

firebase.initializeApp(firebaseConfig);

// Reminder: in Firebase Console > Authentication > Sign-in method,
// make sure "Email/Password" is enabled, or these forms will fail.
