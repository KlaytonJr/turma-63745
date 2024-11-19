import "./style.css"
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

function CartWidget() {
    const { cartQuantity } = useCart();

    return (
      <div className="cart-widget">
        <FiShoppingCart size={30} color="gray" />
        <p>{cartQuantity()}</p>
      </div>
    );
}

export default CartWidget;