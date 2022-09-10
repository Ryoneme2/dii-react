import { useState } from "react";
import pt from "prop-types";

const type = {
  addProduct: pt.func,
};

export const AddForm = ({ addProduct }) => {
  const [product, setProduct] = useState({ name: "", imageURL: "", type: "" });

  const handleTypeEvent = (event) => {
    setProduct({
      ...product,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    addProduct(product);
    setProduct({ name: "", imageURL: "", type: "" });
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form id="create-form" onSubmit={onSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            id="name"
            value={product.name}
            onChange={handleTypeEvent}
          />
        </div>

        <div className=" input-group">
          <label htmlFor="imageURL">Image URL</label>
          <input
            name="imageURL"
            type="text"
            id="imageURL"
            value={product.imageURL}
            onChange={handleTypeEvent}
          />
        </div>

        <div className=" input-group">
          <label htmlFor="type">Type</label>
          <input
            name="type"
            type="text"
            id="type"
            value={product.type}
            onChange={handleTypeEvent}
          />
        </div>

        <button type="submit">Add product</button>
      </form>
    </div>
  );
};

AddForm.pt = type;
