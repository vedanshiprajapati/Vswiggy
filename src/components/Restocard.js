const RestoCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, locality } =
    resData?.info;
  const divStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 50%), url('https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="resto-card">
      <div className="resto-image" style={divStyle}></div>
      <div className="resto-card-details">
        <h2>{name}</h2>
        <h3>
          <span>★</span>
          {avgRating} • {sla?.slaString}
        </h3>
        <p>{cuisines.join(", ")}</p>
        <p>{locality}</p>
      </div>
    </div>
  );
};

export const RestoCardOpen = (RestoCard) => {
  return (props) => {
    return (
      <div>
        <label className="closed-label">Closed</label>
        <RestoCard {...props} />
      </div>
    );
  };
};
export default RestoCard;
