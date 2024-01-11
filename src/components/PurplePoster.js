const PurplePoster = () => {
  return (
    <div className="purple-gradient home-header">
      <div className="title">
        <div>
          <h1>Order Food</h1>
          <h1>Online in</h1>
          <h1>Ahmedabad</h1>
        </div>
        <div className="arrow">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 78 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.25939C27 -0.240624 53.5 -0.2406 77 4.25939"
              stroke="#F15700"
              strokeWidth="1.5"
            ></path>
          </svg>
        </div>
      </div>
      <div>
        <img
          className="illustration1"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png"
          alt="illustration"
        />
      </div>
    </div>
  );
};

export default PurplePoster;
