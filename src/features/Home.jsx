import { useState } from "react";

import productData from "../app/data";
import Product from "./Product";

const Home = () => {
  const [products, _] = useState(productData);
  return (
    <div>
      <h1>New Products</h1>
      <ul className="Home__products">
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
