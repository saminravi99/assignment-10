import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import "./SocialLogin.css";

const SocialLogin = () => {
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  const handleFacebookSignIn = () => {
    signInWithFacebook().then(() => {
      navigate(from, { replace: true });
    });
  };

  const handleGithubSignIn = () => {
    signInWithGithub().then(() => {
      navigate(from, { replace: true });
    });
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
