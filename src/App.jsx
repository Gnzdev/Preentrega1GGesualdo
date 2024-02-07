import ResponsiveAppBar from "./components/layout/Navbar";
import { ItemListContainer } from "./components/pages/ItemListContainer";

const App = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <ItemListContainer greeting="Bienvenidos" />
    </div>
  );
};

export default App;
