import { useParams } from "react-router-dom";
import { Product } from "./Product";
import { ProductDetails } from "./ProductDetails";
import { useEffect, useState } from "react";

export const StoreContainer = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};
