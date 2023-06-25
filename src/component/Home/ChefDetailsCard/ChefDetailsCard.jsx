import React, { useEffect } from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import { FaGratipay } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetailsCard = () => {

    const data2 = useLoaderData()

    const { _id, chef_name, years_of_experience, number_of_recipes, likes, photo_url, bio, recipes, recipe_name, ingredients, cooking_method, rating } = data2;

    console.log(recipes[0]);


    return (
        <div>
            <Container className='mt-5 mb-5'>

                <div class="card mb-3" style={{ width: '18rem' }}>
                    <div class="row g-0">
                        <div class="col-md-4">

                            <img className='img-fluid rounded-start' src={photo_url} alt="" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{chef_name}</h5>
                                <p class="card-text">Description: {bio}</p>
                                <p>Year Of Experience: {years_of_experience}</p>
                                <p>Number of Recipes:{number_of_recipes}</p>
                                <p> <FaGratipay></FaGratipay> {likes}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className='mt-5 mb-5'>



                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <img src="" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Name: {recipes[0].recipe_name}</h5>
                                <p>Ingredient: </p>
                                <p class="card-text">1:{recipes[0].ingredients[0]}</p>
                                <p class="card-text">2:{recipes[0].ingredients[1]}</p>
                                <p class="card-text">3:{recipes[0].ingredients[2]}</p>
                                <p class="card-text">4:{recipes[0].ingredients[3]}</p>

                                <small class="text-body-secondary">
                                    Method:{recipes[0].cooking_method}
                                </small>
                                <p>Rating: {recipes[0].rating}</p>                                 
                            </div>

                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Name: {recipes[0].recipe_name}</h5>
                                <p>Ingredient: </p>
                                <p class="card-text">1:{recipes[1].ingredients[0]}</p>
                                <p class="card-text">2:{recipes[1].ingredients[1]}</p>
                                <p class="card-text">3:{recipes[1].ingredients[2]}</p>
                                <p class="card-text">4:{recipes[1].ingredients[3]}</p>

                                <small class="text-body-secondary">
                                    Method:{recipes[0].cooking_method}
                                </small>
                                <p>Rating: {recipes[0].rating}</p>                                 
                            </div>

                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Name: {recipes[0].recipe_name}</h5>
                                <p>Ingredient: </p>
                                <p class="card-text">1:{recipes[2].ingredients[0]}</p>
                                <p class="card-text">2:{recipes[2].ingredients[1]}</p>
                                <p class="card-text">3:{recipes[2].ingredients[2]}</p>
                                <p class="card-text">4:{recipes[2].ingredients[3]}</p>

                                <small class="text-body-secondary">
                                    Method:{recipes[0].cooking_method}
                                </small>
                                <p>Rating: {recipes[0].rating}</p>                                 
                            </div>

                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default ChefDetailsCard;