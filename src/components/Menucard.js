import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Menucard = ({ props }) => {
  const { name, description, price, defaultPrice, imageId } = props?.card?.info;
  let p;

  price === undefined ? (p = defaultPrice) : (p = price);
  const dispatch = useDispatch();

  const handleADDItem = () => {
    dispatch(addItem(props));
  };
  const imageSrc = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`;

  return (
    <div className="menu-card flex-row space-between">
      <div className="font menucard-leftpart">
        <h3>{name}</h3>
        <h5>₹ {p / 100}</h5>
        <br />
        <p className="fcolor">{description}</p>
      </div>
      <div>
        <img className="menucard-image" src={imageSrc} />
        <div className="add-btn border" onClick={handleADDItem}>
          ADD
        </div>
      </div>
    </div>
  );
};

export default Menucard;
