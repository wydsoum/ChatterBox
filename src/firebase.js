import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBBbaIfI6zg9vVXE6LYBFO_e3WGwDXQv5I",
  authDomain: "chat-app-yt-1646c.firebaseapp.com",
  projectId: "chat-app-yt-1646c",
  storageBucket: "chat-app-yt-1646c.appspot.com",
  messagingSenderId: "130844416819",
  appId: "1:130844416819:web:2452d1c7fbd1de2b343c46"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);