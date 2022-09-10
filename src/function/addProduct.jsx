let currentProductId = 9;

function addProduct([products, setProducts], product) {
  console.log({ product });

  const newProduct = { id: ++currentProductId, ...product };
  setProducts([...products, newProduct]);
}

export default addProduct;
