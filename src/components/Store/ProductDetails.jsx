import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../Button/Button";
import { db } from "../../config/firebase";
import { doc, updateDoc } from "firebase/firestore";

export const ProductDetails = () => {
  const [details, setDetails] = useState([]);
  const [changes, setChanges] = useState(true);
  const location = useLocation();

  const addCart = (e) => {
    e.preventDefault();
    console.log("added");
  };

  useEffect(() => {
    const carDetails = {
      id: location.state.id,
      nombre: location.state.nombre,
      price: location.state.price,
      image: location.state.image,
      stock: location.state.stock,
      modelo: location.state.modelo,
    };
    setDetails(carDetails);
  }, [changes]);

  return (
    <article className=" flex flex-col justify-end -my-10 px-8 pb-8 pt-40 w-full h-screen">
      <img
        src={details.image}
        alt="University of Southern California"
        className="absolute inset-0 h-screen w-screen object-cover"
      />
      <div className="absolute h-screen inset-0 bg-gradient-to-b from-gray-900 via-gray-900/20"></div>
      <h3 className="z-10 text-9xl font-bold text-white">{details.nombre}</h3>
      <h4 className="z-10 mt-3 text-3xl text-white"></h4>
      <div className="z-10 mb-20 flex items-center justify-between ">
        <div className="z-10 gap-y-1 overflow-hidden text-3xl leading-6 text-gray-300">
          <h5 className="z-10 mt-3 text-3xl font-bold text-white">
            <strong>Model</strong>: {details.modelo}
          </h5>
          <h5 className="z-10 mt-3 text-3xl font-bold text-white">
            <strong>Price</strong>: ${details.price}
          </h5>
          <small>Avaliable: {details.stock}</small>
        </div>
        <div className="flex flex-col z-10 gap-y-1 overflow-hidden text-3xl leading-6 text-gray-300">
          <Button
            classes="mx-10 px-2 py-2 rounded-md bg-amber-500"
            text="Add"
          ></Button>
          <Button
            classes="mx-10 px-2 py-2 rounded-md bg-red-500"
            text="Remove"
          ></Button>
        </div>
      </div>
    </article>
  );
};
