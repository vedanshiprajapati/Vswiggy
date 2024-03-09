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
    <div className="w-[240px] ml-[0] mr-[40px] my-[20px] [transition:transform_ease-in_0.05s] hover:scale-[0.95]">
      <div
        className="h-[160px] w-[240px] rounded-[20px] mb-[5px]"
        style={divStyle}
      ></div>
      <div className="ml-[10px] font-[Arial,_Helvetica,_sans-serif]">
        <h2 className="text-ellipsis">{name}</h2>
        <h3>
          <span>★</span>
          {avgRating} • {sla?.slaString}
        </h3>
        <p className="text-ellipsis">{cuisines.join(", ")}</p>
        <p className="text-ellipsis">{locality}</p>
      </div>
    </div>
  );
};

export const RestoCardOpen = (RestoCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-[rgb(224,_60,_60)] text-[white] text-[12px] absolute px-[7px] py-[3px] font-['Montserrat',_sans-serif]">
          Closed
        </label>
        <RestoCard {...props} />
      </div>
    );
  };
};
export default RestoCard;
