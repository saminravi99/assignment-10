import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  console.log(name, email, password, confirmPassword);

  const [
    createUserWithEmailAndPassword,
    emailSignUpUser,
    emailSignUpLoading,
    emailSignUpError,
  ] = useCreateUserWithEmailAndPassword(auth, {
    sendEmailVerification: true,
  });

  console.log(emailSignUpUser, emailSignUpLoading, emailSignUpError);

  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    
    // if (password.length < 8) {
    //   setError("Password must be at least 8 characters");
    //   return;
    // }

    // if (
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    //     password
    //   ) === false
    // ) {
    //   setError(
    //     "Password must contain at least one lowercase letter, one uppercase letter, one number and one special character"
    //   );
    //   return;
    // }
    if (password !== confirmPassword) {
      setError("Password and Confirm Password does not match");
      return;
    } 

    createUserWithEmailAndPassword(email, password);
      navigate('/');
    
  };
  return (
    <div className="w-50 mx-auto my-5">
      <Form onSubmit={handleSignUp} className="form-container">
        <h1 className="text-center text-primary">Register</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            name="name"
            type="text"
            placeholder="Enter Your Name"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            name="email"
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
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept Terms and Conditions" />
        </Form.Group>
        <h6 className="my-3">
          Already have an account?
          <span
            onClick={handleSignUp}
            className="text-primary create-new-account ms-2"
          >
            Login
          </span>
        </h6>
        <div className=" d-flex justify-content-center align-items-center">
          <Button className="px-5" variant="primary" type="submit">
            Sign Up
          </Button>
        </div>
      </Form>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
