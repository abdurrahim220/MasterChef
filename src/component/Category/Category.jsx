import React from 'react';
import { Outlet, useLoaderData, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ChefDetailsCard from '../Home/ChefDetailsCard/ChefDetailsCard';

const Category = () => {


    return (
        <div>
            <Header></Header>
             <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Category;