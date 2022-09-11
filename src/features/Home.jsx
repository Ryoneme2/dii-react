import { useState, useEffect } from "react";
import axios from "axios";

import Product from "./Product";
import { AddForm } from "./Product/AddForm";
import addProduct from "../function/addProduct";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const products = await axios.get(
          "https://run.mocky.io/v3/a091c6f3-dd51-43c8-973a-c7b6fd07a84a"
        );
        setProducts(products.data);
      } catch (e) {
        throw new Error(e);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      <h1>New Products</h1>
      <ul className="Home__products">
        {products.length > 0 ? (
          products.map((product) => <Product key={product.id} item={product} />)
        ) : (
          <div>Loading product...</div>
        )}
      </ul>
      <AddForm addProduct={addProduct.bind(null, [products, setProducts])} />
    </>
  );
};

export default Home;
