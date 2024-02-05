import { HEADER_ICONS, SWIGGY_ICON_PATH } from "../utils/mockdata";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [Signin, SetSignin] = useState("Sign in");
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="header">
      <svg
        className="svgimg"
        height="2500"
        viewBox="-7.3 3.6 2520.1 3702.8"
        width="1708"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Link to="/">
          {" "}
          <path d={SWIGGY_ICON_PATH} fill="#fc8019" />
        </Link>
      </svg>

      <input className="inpute" type="text" placeholder="Search Restaurants" />

      <div className="NavBar">
        <ul>
          <li className="cursor">
            <svg
              className="navbar-logos"
              viewBox="5 -1 12 25"
              height="17"
              width="17"
              fill="#686b78"
            >
              <path d={HEADER_ICONS[0]}></path>
            </svg>
            <Link to="/">Search</Link>
          </li>
          <li className="cursor">
            <svg
              className="navbar-logos"
              viewBox="0 0 32 32"
              height="19"
              width="19"
              fill="#686b78"
            >
              <path d={HEADER_ICONS[1]}></path>
            </svg>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <svg
              className="navbar-logos"
              viewBox="6 -1 12 25"
              height="19"
              width="19"
              fill="#686b78"
            >
              <path d={HEADER_ICONS[2]}></path>
            </svg>
            <Link to="/help">Help</Link>
          </li>
          <li className="cursor">
            <svg
              className="navbar-logos"
              viewBox="6 0 12 24"
              height="19"
              width="18"
              fill="#686b78"
            >
              <path d={HEADER_ICONS[3]}></path>
            </svg>
            <Link
              onClick={() => {
                Signin === "Sign in"
                  ? SetSignin("Sign out")
                  : SetSignin("Sign in");
              }}
            >
              {Signin}
            </Link>
          </li>
          <li className="cursor">
            <span className="flex-row center">
              <span className="cart-0">{cartItems.length}</span>
              <svg
                className="flex-row center"
                viewBox="-1 0 37 32"
                height="20"
                width="20"
                fill="#ffffff"
                stroke="black"
              >
                <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
              </svg>
            </span>
            <Link to="/cart"> Cart </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
