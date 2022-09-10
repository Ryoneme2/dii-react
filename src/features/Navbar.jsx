const Navbar = () => {
  return (
    <header
      style={{
        width: "100vw",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <a href="/" className="brand">
        Trendie
      </a>
      <a href="/create-product">Create product</a>
    </header>
  );
};

export default Navbar;
