import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import { Container } from 'react-bootstrap';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://server-site-xi.vercel.app/chef_details/')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <Container className='mt-4 mb-3'>
            
            <div className='ps-4 container row row-cols-1 row-cols-md-3 g-4 row'>
                {
                    categories.map(data => <ChefCard
                        key={data._id} data={data}
                    >
                       
                    </ChefCard>)
                }
            </div>
        </Container>
        );
};

export default LeftNav;