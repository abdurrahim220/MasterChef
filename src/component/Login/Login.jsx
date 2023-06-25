import React, { useContext } from 'react';
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase.config';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth(app)

    const location = useLocation()
    console.log(location);
    const navigate = useNavigate();
    const from = location.state?.from|| '/chefDetails';


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })

    };

    // social login
    const handleGoogle = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const login = result.user;
                console.log(login);
                navigate(from, { replace: true })       
                
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    const handleGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loginGit = result.user;
                console.log(loginGit);
                navigate(from, { replace: true })
              
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <Container className="w-50">
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>

            <hr />

            <h5>Or sign in with:</h5>
            <Button onClick={handleGoogle} variant="light" className="m-2">
                Google Sign-in
            </Button>
            <Button onClick={handleGithub} variant="light" className="m-2">
                GitHub Sign-in
            </Button>

            <hr />

            <p>
                Don't have an account yet? <a href="/register">Register here.</a>
            </p>
        </Container>
    );
}

export default Login;
