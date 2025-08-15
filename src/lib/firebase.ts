import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyDUwQyBW0ZBXcp3WRlmaFDM_UgKPuhwHfg",
  authDomain: "portfolio-card-game.firebaseapp.com",
  databaseURL: "https://portfolio-card-game-default-rtdb.firebaseio.com",
  projectId: "portfolio-card-game",
  storageBucket: "portfolio-card-game.firebasestorage.app",
  messagingSenderId: "104354021629",
  appId: "1:104354021629:web:3f85903adef4d3ea487e94",
  measurementId: "G-J9NR70J87D"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);