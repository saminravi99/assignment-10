import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import "./SignUp.css"

const SignUp = () => {
    const navigate = useNavigate();
    const handleSignUp = () => {
        navigate('/login');
    }

    

    return (
      <div className="w-50 mx-auto my-5">
        <Form className="form-container">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
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
          <div className= " d-flex justify-content-center align-items-center">
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