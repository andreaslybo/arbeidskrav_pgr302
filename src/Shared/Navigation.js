import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>Arbeidskrav</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav pullRight color="light" className="mr-auto">
                        <Nav.Link href="Home">Home</Nav.Link>
                        <Nav.Link href="link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}