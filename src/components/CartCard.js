import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartCard = ({ props }) => {
  const { name, price, defaultPrice } = props?.card?.info;
  let p;
  price ? (p = price) : (p = defaultPrice);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeItem());
  };

  return (
    <div className="cart-card">
      <div className="font flex-row space-between">
        <h3>{name}</h3>
        <h5 className="fcolor">₹ {p}</h5>
        <br />
        <button className="cursor" onClick={handleClick}>
          X
        </button>
      </div>
      {/* <div className="fcolor">
        Serves 1 | 1 Personal Veg Pizza, 2 Pc Garlic Bread & 1 Pepsi Pet Bottle!
      </div> */}
    </div>
  );
};
export default CartCard;
