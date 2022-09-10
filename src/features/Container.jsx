import PropTypes from "prop-types";

const types = {
  children: PropTypes.node.isRequired,
};

const Container = ({ children }) => {
  return <main>{children}</main>;
};

Container.propTypes = types;

export default Container;
