// ============================================================
// Firebase config — REPLACE with your own project's values.
// Get these from: Firebase Console > Project Settings > General
// > Your apps > Web app (or reuse the same project as your
// JJ Boutique / sadiaiindia Android app if you want shared users).
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyD51WLCZecyG9u3PDqeUgzxeW3y4Nw9C_I",
  authDomain: "sareeweb-1.firebaseapp.com",
  projectId: "sareeweb-1",
  storageBucket: "sareeweb-1.firebasestorage.app",
  messagingSenderId: "229906922846",
  appId: "1:229906922846:web:5fecd7130920d33c0123cf"
};

firebase.initializeApp(firebaseConfig);

// Reminder: in Firebase Console > Authentication > Sign-in method,
// make sure "Email/Password" is enabled, or these forms will fail.
