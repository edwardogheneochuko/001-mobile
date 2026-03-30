import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID",
}

// Initialize app
const app = initializeApp(firebaseConfig)

// ✅ EXPORT AUTH (THIS IS WHAT YOU MISSED)
export const auth = getAuth(app)