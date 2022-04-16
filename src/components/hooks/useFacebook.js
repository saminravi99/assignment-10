// import React from 'react';
import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useFacebook = () => {
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);

  return [signInWithFacebook, facebookUser, facebookLoading, facebookError];
};

export default useFacebook;
