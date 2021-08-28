import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/index.css";

const imageId = [
  "1KjFHEK_7YJtDAU1kKM96DrIGZy5zLwcl",
  "19vY13L7R5LOHNrSxIrlkZ-p0ZVWMUjEC",
  "1dCyACeZWV8woRF1f2laLJ_GQfDnvEW6w",
];

const PATH = "https://drive.google.com/uc?export=view&id=";

const CarouselComponent = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        {imageId.map((src, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100 fencing-img-crop"
              src={`${PATH}${src}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
