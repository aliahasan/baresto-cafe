import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loogedUser = { email: userEmail };
      setUser(currentUser);
      setIsLoading(false);
      console.log("user is ", currentUser);
      if (currentUser) {
        axios
          .post("http://localhost:5000/api/v1/auth/access-token", loogedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data)
          });
      } else {
        axios
          .post("http://localhost:5000/api/v1/logout", loogedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      return subscribe();
    };
  }, [user?.email]);

  const authInfo = { user, createUser, login, isLoading, logout, googleLogin };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
