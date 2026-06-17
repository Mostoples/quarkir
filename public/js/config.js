// ============================================================
// Firebase Web SDK config (AMAN untuk publik — bukan service account).
// Ganti nilai placeholder dengan config dari:
//   Firebase Console > Project settings > Your apps > SDK setup and config
// Selama masih placeholder, app berjalan dalam MODE DEMO (localStorage).
// ============================================================
export const firebaseConfig = {
  apiKey: "GANTI_API_KEY",
  authDomain: "quparkir.firebaseapp.com",
  projectId: "quparkir",
  storageBucket: "quparkir.appspot.com",
  messagingSenderId: "336373443238",
  appId: "GANTI_APP_ID"
};

// App otomatis pakai Firebase asli kalau config sudah diisi (tidak ada "GANTI_").
export const USE_FIREBASE = !Object.values(firebaseConfig).some(v => String(v).startsWith("GANTI_"));
