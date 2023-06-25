import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;