const Menucard = (props) => {
  //   console.log(props, "props");
  const { name, description, price, defaultPrice } = props.props?.card?.info;
  let p;
  price === undefined ? (p = defaultPrice) : (p = price);
  return (
    <div className="menu-card flex-row space-between">
      <div className="font">
        <h4>{name}</h4>
        <h5>₹ {p / 100}</h5>
        <p className="fcolor">{description}</p>
      </div>
      <div>
        {/* <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/860fe1dcbd0fe5f4650003253a46f280" /> */}
      </div>
    </div>
  );
};
export default Menucard;
