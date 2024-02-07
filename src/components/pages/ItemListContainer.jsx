import ProductCard from "../common/ProductCard";

export const ItemListContainer = ({ greeting }) => {
  const styles = {
    border: "1rem double black",
    textAlign: "center",
    color: "red",
    padding: "1rem",
    alignItems: "center",
  };
  return (
    <div>
      <h1 style={styles}>{greeting}</h1>
      <ProductCard
        nombre={"Romi"}
        pos={"Directora"}
        mod={"Modelo 1980"}
        nac={"Chilena"}
      />

      <ProductCard
        nombre={"Cris"}
        pos={"Segundo"}
        mod={"Modelo 1986"}
        nac={"Uruguayo"}
      />

      <ProductCard
        nombre={"Facu"}
        pos={"Batería"}
        mod={"Modelo 1989"}
        nac={"Argentino"}
      />
    </div>
  );
};
