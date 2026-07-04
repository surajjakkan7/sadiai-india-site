// ============================================================
// Firebase config — REPLACE with your own project's values.
// Get these from: Firebase Console > Project Settings > General
// > Your apps > Web app (or reuse the same project as your
// JJ Boutique / sadiaiindia Android app if you want shared users).
// ============================================================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

// Reminder: in Firebase Console > Authentication > Sign-in method,
// make sure "Email/Password" is enabled, or these forms will fail.
