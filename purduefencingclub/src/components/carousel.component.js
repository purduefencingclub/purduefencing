import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageId = [
    "1KjFHEK_7YJtDAU1kKM96DrIGZy5zLwcl",
    "19vY13L7R5LOHNrSxIrlkZ-p0ZVWMUjEC",
    "1dCyACeZWV8woRF1f2laLJ_GQfDnvEW6w"
];

const PATH = "https://drive.google.com/uc?export=view&id=";

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel>
                {imageId.map(src => (
                    <div>
                        <img src={`PATH${src}`} alt="image" />
                    </div>))
                }
                <div>
                </div>
            </Carousel>
        </div>
    );
}