import React, { useEffect, useState } from "react";
import RestoCard, { RestoCardOpen } from "./Restocard";
import Shimmer from "./Shimmer";
import PurplePoster from "./PurplePoster";
import { Link } from "react-router-dom";

const Body = () => {
  const [ResList, setResList] = useState(null);
  const [Title, setTitle] = useState("restaurants");
  const ClosedRestaurants = RestoCardOpen(RestoCard);

  useEffect(() => {
    fetchDATA();
  }, []);

  async function fetchDATA() {
    const p = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D23.022505%26lng%3D72.5713621%26page_type%3DDESKTOP_WEB_LISTING"
    );

    const jsonData = await p.json();

    console.log(jsonData);
    let d = null;

    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      if (jsonData.data.cards[i].card.card.id === "restaurant_grid_listing") {
        d =
          jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
      }
      if (
        jsonData.data.cards[i].card.card["@type"] ===
        "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent"
      ) {
        setTitle(jsonData?.data?.cards[i]?.card?.card?.title);
      }
    }

    setResList(d);
    setTitle(jsonData?.data?.cards[1]?.card?.card?.title);
  }
  if (ResList === null) {
    return (
      <div>
        <PurplePoster />
        <div className="mx-[150px] my-[20px]">
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="text-3xl font-semibold">
                Restaurants with online food delivery in Ahmedabad
              </h1>
              <br />
            </div>
            <div>
              <button className="bg-[white] border-black border px-[15px] py-[7px] rounded-[20px] [transition:ease-in-out] mr-[50px] focus:[box-shadow:0px_0px_7px_3px_rgb(234,_232,_232)] hover:[box-shadow:0px_0px_7px_3px_rgb(234,_232,_232)]">
                Filter
              </button>
            </div>
          </div>
          <div className="flex flex-row flex-wrap">
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </div>
        </div>
      </div>
    );
  } else if (ResList != null) {
    return (
      <div>
        <PurplePoster />
        <div className="mx-[150px] my-[20px]">
          <div className="flex flex-row justify-between">
            <div className="text-3xl font-semibold">
              <h1>Restaurants with online food delivery in Ahmedabad</h1>
            </div>
            <div>
              <button
                onClick={() => {
                  let filtered = ResList.filter(
                    (res) => res.info.avgRating > 4
                  );

                  filtered.sort(function (a, b) {
                    return a.info.avgRating - b.info.avgRating;
                  });
                  //  console.log(filtered)
                  setResList(filtered);
                }}
                className="bg-[white] border-black border px-[15px] py-[7px] rounded-[20px] [transition:ease-in-out] mr-[50px] focus:[box-shadow:0px_0px_7px_3px_rgb(234,_232,_232)] hover:[box-shadow:0px_0px_7px_3px_rgb(234,_232,_232)]"
              >
                Filter
              </button>
            </div>
          </div>
          <div className="flex flex-row flex-wrap">
            {ResList.map((resdata) => (
              <Link
                key={resdata?.info?.id}
                to={`/restaurants/${resdata?.info?.id}`}
              >
                {resdata?.info.isOpen ? (
                  <RestoCard resData={resdata} />
                ) : (
                  <ClosedRestaurants resData={resdata} />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Body;
