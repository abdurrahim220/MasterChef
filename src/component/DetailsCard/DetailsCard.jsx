import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDetailsCard from '../Home/ChefDetailsCard/ChefDetailsCard';

const DetailsCard = () => {
    const {id} = useParams();

    const loader = useLoaderData();
    console.log(loader);
    return (
        <div>
{/* 
            {
                loader.map(data2 => <ChefDetailsCard key={data2._id} data2={data2}>

                </ChefDetailsCard>)
            }           */}
            
        </div>
    );
};

export default DetailsCard;