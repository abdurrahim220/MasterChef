import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <footer className="bg-light py-3">
                <Container>
                    <Row>
                        <Col md={6}>
                            <p className="text-muted">Your company name © {new Date().getFullYear()}</p>
                        </Col>
                        <Col md={6}>
                            <ul className="list-inline mb-0 float-md-end">
                                <li className="list-inline-item"><a href="#">Terms of Use</a></li>
                                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                                <li className="list-inline-item"><a href="#">Contact Us</a></li>
                                <li className="list-inline-item"><a href="#">Facebook</a></li>
                                <li className="list-inline-item"><a href="#">Instagram</a></li>
                                <li className="list-inline-item"><a href="#">Twitter</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;