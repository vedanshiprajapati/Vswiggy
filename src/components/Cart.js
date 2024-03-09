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
      <div class="h-[90vh] w-full flex flex-col justify-center items-center font-['Quicksand',_sans-serif]">
        <div class="w-[271px] h-[256px] bg-[url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0)] bg-no-repeat bg-cover mx-auto my-0"></div>
        <h3 className="mt-6 text-[20px] font-semibold text-[#535665]">
          Your cart is empty
        </h3>
        <p className="mt-[8px] text-[#7e808c] mb-[30px]">
          You can go to home page to view more restaurants
        </p>
        <Link
          className="text-[white] font-bold px-[20px] py-[10px] border-[none] bg-[#FC8019] [transition:ease-in-out_0.01s] hover:[box-shadow:0px_0px_5px_3px_white,0px_0px_7px_3px_#fcb57b]"
          to="/"
        >
          See restaurants near you
        </Link>
      </div>
    );
  } else {
    return (
      <div className="w-full flex flex-col justify-center items-center p-[20px]">
        <div className="flex flex-row justify-between cart-title">
          <h1>Cart</h1>
          <button className="ml-[370px]" onClick={handleClearBtn}>
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
