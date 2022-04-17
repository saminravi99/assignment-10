import React from "react";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import "./SocialLogin.css";

const SocialLogin = () => {
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

  console.log(facebookUser, facebookLoading, facebookError);
  console.log(googleUser, googleLoading, googleError);
  console.log(githubUser, githubLoading, githubError);

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handleFacebookSignIn = () => {
    signInWithFacebook();
  };

  const handleGithubSignIn = () => {
    signInWithGithub();
  };



  return (
    <div>
      <div className="d-flex  justify-content-center align-items-center my-3">
        <div className="line"></div>
        <p className="pb-0 mb-0 mx-3">or</p>
        <div className="line"></div>
      </div>

      <div className="social-btn">
        <div>
          <button
            onClick={handleGoogleSignIn}
            className="d-block mx-auto google-btn"
          >
            Continue with Google
          </button>
        </div>
        <div>
          <button
            onClick={handleFacebookSignIn}
            className="d-block mx-auto facebook-btn"
          >
            Continue with Facebook
          </button>
        </div>
        <div>
          <button
            onClick={handleGithubSignIn}
            className="d-block mx-auto github-btn"
          >
            Continue with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
