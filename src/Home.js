import React from 'react';
import { HomeCarousel }  from './HomeCarousel';
import { Container } from 'react-bootstrap';

export const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <Container>
                <div>Hjem</div>
            </Container>
        </div>
    );
}

