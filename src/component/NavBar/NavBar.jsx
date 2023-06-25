import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../../assets/men-1.png'

const NavBar = () => {
    return (
        <div className='p-5 mt-5 mb-5 px-4 container'>
           
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={img}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-black'>First Food Services</h3>
                            <p className='text-black'>Our food product is the best in our country</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={img}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className='text-black'>Second We offer best Quality Food</h3>
                            <p className='text-black'>We provider the chepest food in our resturent where you can eat as mutch as you want</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={img}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className='text-black'>Third resturent is clean and safe to eat and sound prove</h3>
                            <p className='text-black'>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
      
    );
};

export default NavBar;