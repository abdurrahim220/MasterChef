import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../assets/men-1.png'
import img1 from '../../assets/image-1.png'



const Story = () => {
    return (
        <Container className='d-flex mb-5'>
            <div className='container w-50'>
                <h3>Our Story</h3>
                <h1>Traditional & Modern Service <span className='text-danger'>Since 1970</span></h1>
                <p>Ut neque turpis dolor sit amet consectetur adipiscing elit purus egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget at porttitor morbi blandit ac vitae, dolor. Gravida eu vel ac luctus. Hac a vel est malesuada tellus sed nunc, etiam maecenas.</p>
                <img src="" alt="" />
            </div>

            <div className='w-50'>
                <img src={img} alt="" />
            </div>

        </Container>
    );
};

export default Story;