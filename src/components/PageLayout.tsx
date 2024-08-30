import {Col, Container} from 'react-bootstrap';
import NavBar from './NavBar';
import NavbarButtons from './NavbarButtons';
import React from 'react'

type PageLayoutProps = {
    children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <Container>
            <Col>
            <NavBar />
            </Col>
            <h1>My App</h1>
            {children}
            <footer>
                <NavbarButtons />
            </footer>
        </Container>
    );
};

export default PageLayout