// ============================================================
// Firebase Web SDK config (AMAN untuk publik — bukan service account).
// Ganti nilai placeholder dengan config dari:
//   Firebase Console > Project settings > Your apps > SDK setup and config
// Selama masih placeholder, app berjalan dalam MODE DEMO (localStorage).
// ============================================================
export const firebaseConfig = {
  apiKey: "AIzaSyCLwEYcjjfqllzOaTmoLj0X71e9rRw-5RA",
  authDomain: "quparkir.firebaseapp.com",
  projectId: "quparkir",
  storageBucket: "quparkir.firebasestorage.app",
  messagingSenderId: "336373443238",
  appId: "1:336373443238:web:3351774f271b3f5131e267"
};

// App otomatis pakai Firebase asli kalau config sudah diisi (tidak ada "GANTI_").
export const USE_FIREBASE = !Object.values(firebaseConfig).some(v => String(v).startsWith("GANTI_"));
