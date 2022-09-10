import { useState } from "react";

import productData from "../app/data";
import Product from "./Product";
import { AddForm } from "./Product/AddForm";
import addProduct from "../function/addProduct";

const Home = () => {
  const [products, setProducts] = useState(productData);

  return (
    <div>
      <h1>New Products</h1>
      <ul className="Home__products">
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </ul>
      <AddForm addProduct={addProduct.bind(null, [products, setProducts])} />
    </div>
  );
};

export default Home;
