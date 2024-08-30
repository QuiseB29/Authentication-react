import { Col, Container } from 'react-bootstrap';
import Login from './Login.tsx';
import Logout from './Logout.tsx';
import React from 'react';


const Homepage: React.FC = () => {
    return (
        <Container>
            <Col>
            <h1>Hello Auth0 World</h1>
            <Login />
            <Logout />
            
            </Col>
        </Container>
    );
}; 


export default Homepage