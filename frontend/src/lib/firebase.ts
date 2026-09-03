import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: "ntspl-ntspl", // Set explicitly based on user provided ID
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "983761574114", // User provided project number
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-552679294", // User provided Analytics Property ID
};

// Initialize Firebase only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// Set specific client ID for Google Auth if required
googleProvider.setCustomParameters({
  client_id: "983761574114-6oorkncm53d50ioi6igjsdroit8meeg4.apps.googleusercontent.com"
});

// Initialize Analytics conditionally (only runs on client side)
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, auth, googleProvider, analytics };
