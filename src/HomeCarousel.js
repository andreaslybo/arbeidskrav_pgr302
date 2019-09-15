import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Photo_1 from './Assets/img/Carousel-1.jpg';
import Photo_2 from './Assets/img/Carousel-2.jpg';
import Photo_3 from './Assets/img/Carousel-3.jpg';

export const HomeCarousel = () => {

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    }

    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Photo_1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Analytics panel</h3>
                <p>Made specifically for agriculture.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Photo_2}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Award winning services</h3>
                <p>Monitor your farm with our cloud services.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Photo_3}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>BYOD</h3>
                <p>Bring your own device. Use our services anywhere with a connection.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    ); 
}