import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const Settings = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((usr) => {
      setUser(usr);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Settings</h2>
      {user ? (
        <div>
          <p>Username (Email): {user.email}</p>
          <p>Account created: {user.metadata.creationTime}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Settings;
