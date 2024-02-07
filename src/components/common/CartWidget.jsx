import { PiShoppingCartFill } from "react-icons/pi";
import Counter from "./Counter";

const CartWidget = () => {
  return (
    <div>
      <span>
        <Counter />
      </span>
      <PiShoppingCartFill color="green" />
    </div>
  );
};

export default CartWidget;
