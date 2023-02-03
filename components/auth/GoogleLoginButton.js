import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const GoogleLoginButton = () => {
   const [error, setError] = useState(null);

   const handleLogin = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
         await firebase.auth().signInWithPopup(provider);
      } catch (e) {
         setError(e.message);
      }
   };

   return (
      <div>
         <button onClick={handleLogin}>Login with Google</button>
         {error && <p>{error}</p>}
      </div>
   );
};

export default GoogleLoginButton;
