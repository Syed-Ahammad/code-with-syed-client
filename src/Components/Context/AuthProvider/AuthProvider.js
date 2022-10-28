import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../FirebaseAuthentication/FirebaseAuthentication";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
};

const updateUserProfile = (profile)=>{
  return updateProfile(auth.currentUser, profile);
};

//   sign in with google
  const signInWithGoogle = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

//   sign in with github
  const signInWithGithub = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const signIn = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
};

//   function of user sign out
  const logOut = () => {
    return signOut(auth);
  };

//   useEffect for catching user by OnAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user inside state change", currentUser);
      if (currentUser == null || currentUser.emailVerified) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  });

  const authInfo = { user, createUser, loading, signIn, updateUserProfile, signInWithGoogle, signInWithGithub, logOut };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
