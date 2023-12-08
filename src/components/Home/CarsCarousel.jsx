import { Carousel } from "flowbite-react";

export const CarsCarousel = ({ image1, image2, image3, image4, image5 }) => {
  return (
    <div className="w-full h-96 m -mb-2 ">
      <Carousel indicators={false}>
        <img src={image1} alt={image1} />
        <img src={image2} alt={image2} />
        <img src={image3} alt={image3} />
        <img src={image4} alt={image4} />
        <img src={image5} alt={image5} />
      </Carousel>
    </div>
  );
};
