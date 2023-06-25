import React from 'react';
import { Accordion, Container } from 'react-bootstrap';



const Blog = () => {
    return (
        <Container className='mt-5 mb-5'>
            <Accordion defaultActiveKey="0">

                <Accordion.Item eventKey="0">
                    <Accordion.Header>Question #1</Accordion.Header>
                    <Accordion.Body>
                        <h3 className='text-danger'>The differences between uncontrolled and controlled components.</h3>
                        <p>
                            In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question #2</Accordion.Header>
                    <Accordion.Body>
                        <h3 className="text-danger">
                            How to validate React props using PropTypes?
                        </h3>
                        <p>
                            With React props, you can send data to a component when you call on that component, including numbers, strings, functions, objects, and arrays. If you have multiple components, you can pass data from one component to another.
                            To pass props between components, you can add them when the component is called, just like you would pass arguments when calling on a regular JavaScript function.
                            <br />
                            When developing a React application, you will need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Question #3</Accordion.Header>
                    <Accordion.Body>
                        <h3 className='text-danger'>Tell us the difference between nodejs and express js.</h3>
                        <p>
                            Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.
                            <br />
                            Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.
                            <br />
                            Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node.js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".
                        </p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Question #4</Accordion.Header>
                    <Accordion.Body>
                        <h3 className="text-danger">What is a custom hook, and why will you create a custom hook?</h3>
                        <p>
                            When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.Custom Hooks start with "use". Example: useFetch.
                            <small>
                                In the following code, we are fetching data in our Home component and displaying it.

                                We will use the JSONPlaceholder service to fetch fake data. This service is great for testing applications when there is no existing data.

                                To learn more, check out the JavaScript Fetch API section.
                            </small>
                        </p>

                    </Accordion.Body>
                </Accordion.Item>


            </Accordion>

           
        </Container>
    );
};

export default Blog;