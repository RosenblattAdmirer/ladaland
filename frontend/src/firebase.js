import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace the below config with your Identity Platform (Firebase) config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  // ... any other config values
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
