import { useEffect, useState } from "react";
import { StoreContainer } from "../Store/StoreContainer";
import { collection, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const StoreListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = query(collection(db, "cars"));
    getDocs(getProducts)
      .then((res) => {
        const ProductList = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(ProductList);
      })
      .catch((error) => {
        console.log(
          "Se ha producido un error al traer la informacion de la base de datos"
        );
      });
  }, []);

  return (
    <div>
      <StoreContainer products={products} />
    </div>
  );
};
