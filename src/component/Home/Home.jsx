import React from 'react';
import Category from '../Category/Category';
import LeftNav from '../LeftNav/LeftNav';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Story from '../Page/Story';

const Home = () => {
    return (
        <Container>
            <NavBar></NavBar>

            <LeftNav></LeftNav>

            <Story></Story>
        </Container>
    );
};

export default Home;