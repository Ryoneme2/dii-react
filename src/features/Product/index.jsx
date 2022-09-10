import propTypes from "prop-types";

const types = {
  item: propTypes.string.isRequired,
};

const Product = ({ item }) => {
  const productImage = require(`../../assets/${item.imageURL}`);
  return (
    <li className="Products">
      <a href={`/update-product/${item.id}`}>
        <img className="Products__image" src={productImage} alt={item.name} />
        <div className="Products__name">{item.name}</div>
        <small className="Products__type">{item.type}</small>
      </a>
    </li>
  );
};

Product.propTypes = types;

export default Product;
