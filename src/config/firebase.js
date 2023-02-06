import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {MY_API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING, APP_FIREBASE_ID} from "@env"

const firebaseConfig = {
  apiKey: `${MY_API_KEY}`,
  authDomain: `${AUTH_DOMAIN}`,
  projectId: `${PROJECT_ID}`,
  storageBucket: `${STORAGE_BUCKET}`,
  messagingSenderId: `${MESSAGING}`,
  appId: `${APP_FIREBASE_ID}`
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);