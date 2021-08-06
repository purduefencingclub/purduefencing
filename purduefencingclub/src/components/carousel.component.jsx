import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel>
                <div>
                    <img src="../logo192.png" />
                </div>
                <div>
                    <img src="../logo512.png" />
                </div>
            </Carousel>
        </div>
    );
}