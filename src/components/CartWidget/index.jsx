import "./style.css"
import { FiShoppingCart } from "react-icons/fi";

function CartWidget() {
    return (
        <div className="cart-widget">
            <FiShoppingCart 
                size={30} 
                color="gray" 
            />
            <p>2</p>
        </div>
    )
}

export default CartWidget;