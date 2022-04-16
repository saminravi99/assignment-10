// import React from 'react';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useSignIn = () => {
  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);
  return [signInWithEmailAndPassword, signInUser, signInLoading, signInError];
};

export default useSignIn;
