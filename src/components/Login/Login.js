import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/sign-up");
  };

  const handleForgetPassword = () => {
    navigate("/forget-password");
  };

  return (
    <div className="w-50 mx-auto mt-5">
      <Form className="form-container">
        <h1 className="text-center text-primary">Sign In</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <p className="text-primary forget-pass" onClick={handleForgetPassword}>
          Forget Password?
        </p>

        <h6>
          New to Derma Care?{" "}
          <span
            onClick={handleLogin}
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
