
import React, { useContext, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { AuthContext } from '../component/Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebase.config';

const Register = () => {



    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle registration logic here

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, photo, email, password);

       



        createUser(email, password)
            .then(result => {
                const createUser = result.user;
                console.log(createUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    };




    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name='name' required />
                </Form.Group>

                <Form.Group controlId="formPhotoUrl">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter photo URL" name='photo' />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>


                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter password" required />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p>If already register : <Link to='/login'>Please Login</Link></p>
                <p className='text-danger'>{Error}</p>
            </Form>
        </Container>)
};

export default Register;