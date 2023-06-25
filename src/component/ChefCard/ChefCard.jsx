import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefCard = ({ data }) => {
    const {_id,chef_name,years_of_experience,number_of_recipes,likes,photo_url} = data;
    console.log(data);

    return (
        <div className='col-4'>
            <Card  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={photo_url} />
                <Card.Body>
                    <Card.Title>Chef Name:{chef_name}</Card.Title>
                    <h4>Year Of Experience: {years_of_experience}</h4>
                    <h4>Number of Recipes: {number_of_recipes}</h4>
                    <p>{likes}</p>
                   <Link to={`/chefDetails/${_id}`}> <Button variant="primary">View Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefCard;