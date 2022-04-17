import React from "react";
import "./SocialLogin.css";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex  justify-content-center align-items-center my-3">
        <div className="line"></div>
        <p className="pb-0 mb-0 mx-3">or</p>
        <div className="line"></div>
      </div>

      <div className="social-btn">
        <div>
          <button className="d-block mx-auto google-btn">Continue with Google</button>
        </div>
        <div>
          <button className="d-block mx-auto facebook-btn">Continue with Facebook</button>
        </div>
        <div>
          <button className="d-block mx-auto github-btn">Continue with Github</button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
