import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }


    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand to="/">ChefPage</Navbar.Brand>
                    <Nav className="me-auto">

                        <Link to='/home'>Home</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/login'>Login</Link>
                        {/* <Link to='/register'></Link> */}
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                    <Nav>
                            {
                                user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }

                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;