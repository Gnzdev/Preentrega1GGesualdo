const ProductCard = ({ nombre, pos, mod, nac }) => {
  const styles = {
    border: "1rem double black",
    textAlign: "center",
    padding: "1rem",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <img src="" alt="" />
      <h1>{nombre}</h1>
      <p>{pos}</p>
      <h3>{mod}</h3>
      <h5>{nac}</h5>
    </div>
  );
};

export default ProductCard;
