import React from "react";
import { CardPreviewDetailsBig } from "./CardPreviewDetailsBig";
import { CardPreviewDetailsSmall } from "./CardPreviewDetailsSmall";

export const CarsPreviewCars = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center mt-10 bg-gray-200">
      <div className="w-9/12 flex bg-gray-200">
        <div className="w-auto col-span-1 align-middle justify-center ">
          <CardPreviewDetailsBig
            nombre="Audi RS6 Avant"
            price="126895"
            modelo="2022"
            fuel="Gas"
            image="https://www.motortrend.com/uploads/2023/06/001-2024-Audi-RS6-Avant-performance-front-three-quarters.jpg"
          />
        </div>
        <div className="flex flex-col justify-between">
          <CardPreviewDetailsSmall
            nombre="Chevrolet Traverse"
            price="36900"
            modelo="2024"
            fuel="Gas"
            image="https://www.elcarrocolombiano.com/wp-content/uploads/2022/02/20220207-CHEVROLET-TRAVERSE-2022-COLOMBIA-PRECIOS-VERSIONES-CARACTERISTICAS-01.jpg"
          />
          <CardPreviewDetailsSmall
            nombre="Toyota Land Cruiser"
            price="55000"
            modelo="2024"
            fuel="Gas"
            image="https://www.elcarrocolombiano.com/wp-content/uploads/2023/08/20230801-TOYOTA-LAND-CRUISER-PRADO-2024-250-ESTRENO-MUNDIAL-06.jpg"
          />
        </div>
      </div>
    </div>
  );
};
