import React, { useEffect, useState } from "react";
import RestoCard from "./Restocard";
import Shimmer from "./Shimmer";
import PurplePoster from "./PurplePoster";
import { Link } from "react-router-dom";
import ClassBasedComponent from "./ ClassBasedComponent";

const Body = () => {
  const [ResList, setResList] = useState(null);
  const [Title, setTitle] = useState("restaurants");

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
        <div className="main">
          <div className="flex-row space-between">
            <div>
              <h1>Restaurants with online food delivery in Ahmedabad</h1>
              <br />
            </div>
            <div>
              <button className="filter">Filter</button>
            </div>
          </div>
          <div className="flex-row wrap">
            <div className="shimmer-card"></div>
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
        <div className="main">
          <div className="flex-row space-between">
            <div>
              <h1>Restaurants with online food delivery in Ahmedabad</h1>
              <br />
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
                className="filter"
              >
                Filter
              </button>
            </div>
          </div>
          <div className="flex-row wrap">
            {ResList.map((resdata) => (
              <Link
                key={resdata?.info?.id}
                to={`/restaurants/${resdata?.info?.id}`}
              >
                <RestoCard resData={resdata} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Body;
