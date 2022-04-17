import React from "react";
import "./CheckOut.css";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
    const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    navigate("/thankyou");
  };

  return (
    <div className="w-50 mx-auto my-5 checkout-conatiner">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center">Please Fill Up The Form</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="checkout-labels">First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name"  required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="checkout-labels">Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name"  required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="checkout-labels">Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="checkout-labels">Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Your Phone Number"  required/>
        </Form.Group>

        <label htmlFor="select" className="my-2 checkout-labels">
          Choose Your Desired Treatment Package{" "}
        </label>
        <select className="select checkout-labels" {...register("services")}>
          <option className="checkout-labels" value="Laser Skin Rejuvenation">
            Laser Skin Rejuvenation
          </option>
          <option className="checkout-labels" value="Acne Blue Light Therapy">
            Acne Blue Light Therapy
          </option>
          <option className="checkout-labels" value="Microdermabrasion">
            Microdermabrasion
          </option>
        </select>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="checkout-labels">Your Address</Form.Label>
          <Form.Control as="textarea" rows={3} required />
        </Form.Group>
        <Button
          className="px-5 d-block mx-auto checkout-labels"
          variant="primary"
          type="submit"
        >
          Confirm Booking
        </Button>
      </Form>
      
    </div>
  );
};

export default CheckOut;
