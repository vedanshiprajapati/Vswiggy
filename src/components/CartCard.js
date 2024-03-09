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
    <div className="w-2/5 m-[10px] px-[20px] py-[30px] border font-['Quicksand',_sans-serif]">
      <div className="flex flex-row justify-between">
        <h3>{name}</h3>
        <h5 className="text-[#7E808C]">₹ {p / 100}</h5>
        <br />
        <button className="cursor-pointer" onClick={handleClick}>
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
