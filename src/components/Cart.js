import { useDispatch, useSelector } from "react-redux";
import Menucard from "./Menucard";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearBtn = () => {
    dispatch(clearCart());
  };
  if (cartItems.length === 0) {
    return (
      <div class="empty-cart">
        <div class="pan-cooking-image"></div>
        <h3>Your cart is empty</h3>
        <p>You can go to home page to view more restaurants</p>
        <Link className="go-back-btn" to="/">
          See restaurants near you
        </Link>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <div className="flex-row space-between cart-title">
          <h1>Cart</h1>
          <button className="filter clear-btn" onClick={handleClearBtn}>
            Clear
          </button>
        </div>
        {cartItems.map((item) => (
          <CartCard key={item?.card?.info?.id} props={item} />
        ))}
      </div>
    );
  }
};
export default Cart;
