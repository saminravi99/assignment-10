import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  console.log(email, password);

   const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] = useSignInWithEmailAndPassword(auth);

   console.log(signInUser, signInLoading, signInError);




  const navigate = useNavigate();

  const handleCreateAccount= () => {
    navigate("/signup");
  }





  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
     navigate('/');
   }

   useEffect(() => {
     if(signInError){
        setError("User Does Not Exist. Please Sign Up");
      }
   }
    , [signInError]);

  const handleForgetPassword = () => {
    navigate("/forget-password");
  };

  return (
    <div className="w-50 mx-auto mt-5">
      <Form onSubmit={handleLogin} className="form-container">
        <h1 className="text-center text-primary">Sign In</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <p className="text-danger">{error}</p>

        <p className="text-primary forget-pass" onClick={handleForgetPassword}>
          Forget Password?
        </p>

        <h6>
          New to Derma Care?{" "}
          <span
            onClick={handleCreateAccount}
            className="text-primary create-new-account"
          >
            Create a new account
          </span>
        </h6>

        <div className="d-flex justify-content-center mt-3 ">
          <Button className="px-5" variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
