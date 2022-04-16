// import React from 'react';
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useGithub = () => {
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  return [signInWithGithub, githubUser, githubLoading, githubError];
};

export default useGithub;
