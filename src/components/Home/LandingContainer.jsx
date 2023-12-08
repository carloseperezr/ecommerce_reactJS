import React from "react";
import { LandingPage } from "./LandingPage";
import { CarsPreviewCars } from "./CarsPreviewCars";
import { CarsCarousel } from "./CarsCarousel";

export const LandingContainer = () => {
  return (
    <div>
      <LandingPage />
      <CarsPreviewCars />
      <CarsCarousel
        image1="https://www.elcarrocolombiano.com/wp-content/uploads/2023/04/20240425-MERCEDES-BENZ-CLASE-E-2024-PORTADA-1100x580.jpg"
        image2="https://www.elcarrocolombiano.com/wp-content/uploads/2023/09/20230914-VOLVO-EX30-ELECTRICO-PREVENTA-COLOMBIA-PRECIOS-VERSIONES-01-1.jpg"
        image3="https://hips.hearstapps.com/hmg-prod/images/toyota-tacoma-trd-pro-1622745476.jpg"
        image4="https://s3-prod.autonews.com/s3fs-public/styles/1152x647/public/Aston%20Martin%20DB12.jpg"
        image5="https://mclaren.scene7.com/is/image/mclaren/03_P28_MSO%20Spectrum_Rear_Left_Orange-1:crop-16x9?wid=1786&hei=1005"
      />
    </div>
  );
};
