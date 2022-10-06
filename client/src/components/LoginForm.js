import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const LoginForm = () => {
    const [validated, setValidated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [userFormData, setUserFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
        console.log(userFormData);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        console.log("submit clicked");

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setShowAlert(true);
            event.preventDefault();
            event.stopPropagation();
        } else {
            window.location.assign("/dashboard");
            setValidated(true);
            setShowAlert(false);
        }
    };

    const handleSignupBtn = (event) => {
        window.location.assign("/signup")
    }



    return (
        <>
        <br></br>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Alert
                    dismissible
                    onClose={() => setShowAlert(false)}
                    show={showAlert}
                    variant="danger"
                >
                    Wrong login credentials!
                </Alert>
                <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Your email"
                        name="email"
                        onChange={handleInputChange}
                        value={userFormData.email}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Email is required
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Your password"
                        name="password"
                        onChange={handleInputChange}
                        value={userFormData.password}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Password is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <br></br>

                <Button
                    disabled={!(userFormData.email && userFormData.password)}
                    type="submit"
                    variant="dark"
                >
                    Submit
                </Button>
            </Form>
            <br></br>
            <h4>
                Not a member?
            </h4>
            <Button 
            onClick={handleSignupBtn}
            variant="dark">
               Sign up
            </Button>
        </>
    );
};

export default LoginForm;
