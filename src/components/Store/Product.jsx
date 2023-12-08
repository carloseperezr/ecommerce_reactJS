import React from "react";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

export const Product = ({ nombre, modelo, image, price, stock, id }) => {
  const buttonClasses = `bg-slate-300 text-2xl uppercase px-5 py-1 rounded ease-in-out duration-200 hover:bg-slate-800 hover:text-slate-300`;

  const navigate = useNavigate();
  const idValue = nombre;
  const idString = (idValue) => {
    return String(idValue).toLowerCase().split(" ").join("-");
  };

  const idNav = idString(idValue);
  const handleDetails = () => {
    navigate(`/store/${idNav}`, {
      state: {
        id,
        nombre,
        modelo,
        image,
        price,
        stock,
      },
    });
    console.log(handleDetails);
  };

  return (
    <div className="container px-5 py-0 mt-10 mx-auto">
      <div className="flex flex-col w-full mb-20">
        <div className="flex w-full justify-start items-center ">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">
            {nombre}
          </h1>
          <p className="leading-relaxed ml-5 text-lg font-bold">{modelo}</p>
        </div>
        <img
          alt={id}
          className="rounded-t-2xl inset-0 w-full h-full"
          src={image}
        />
      </div>
      <div className="flex justify-between items-center bg-red-500 p-10 -mt-20 last:mb-10">
        <div>
          <h4 className="text-3xl text-gray-300">Price: ${price}</h4>
          <small className="text-2xl text-gray-300"> Available: {stock}</small>
        </div>
        <div onClick={handleDetails}>
          <Button classes={buttonClasses} text="Details" />
        </div>
      </div>
    </div>
  );
};
