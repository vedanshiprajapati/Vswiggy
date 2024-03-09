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
    <div className="w-1/2 m-auto pt-[30px] pr-[0] pb-[20px] border-b  border-b-[#D3D3D3] gap-[30px] flex flex-row justify-between">
      <div className="font-['Quicksand',_sans-serif] text-[14px] w-2/3 mr-auto h-auto">
        <h3 className="text-lg">{name}</h3>
        <h5 className="mt-[5px]">₹ {p / 100}</h5>
        <br />
        <p className="text-[#7E808C] break-words">{description}</p>
      </div>
      <div>
        <img className="h-[96px] !w-[118px] rounded-[5px]" src={imageSrc} />
        <div
          className="absolute h-[36px] w-[96px] -mt-[30px] ml-[11px] text-[#60b246] border-[1px] border-[solid] border-[#d4d5d9] bg-[#fff] text-[.8rem] font-normal leading-[30px] text-center rounded-[4px] [box-shadow:0_3px_8px_#e9e9eb] cursor-pointer font-['Montserrat',_sans-serif] hover:[box-shadow:0_3px_8px_#c5c5c6]"
          onClick={handleADDItem}
        >
          ADD
        </div>
      </div>
    </div>
  );
};

export default Menucard;
