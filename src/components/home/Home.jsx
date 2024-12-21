import React from "react";
import "./home.scss";
import SearchBar from "../search/SearchBar";
import Equipments from "../equipments/Equipments";
import Footer1 from "../footer1/Footer1";

const Home = () => {
  return (
    <div id="Home">
      <div className="section">
        <div>
          <img
            src="https://res.cloudinary.com/drqaon7o8/image/upload/v1732901539/image_3_nfrrc8.png"
            alt="tractor"
          />
        </div>

        <div className="part2">
          <div className="rent">
            <h5>Rent Premium Agricultural Equipment</h5>
            <p>
              Get your hands on high-quality agricultural machinery whenever you
              require it, without the burden of owning it.
            </p>
          </div>
          <div>
            <button>Discover More</button>
          </div>
        </div>

        <SearchBar />

        <div className="part3">
          <span>
            <button>All Equipment</button>
          </span>
          <span>
            <button>Top Rentals</button>
          </span>
          <span>
            <button>New Arrivals</button>
          </span>
        </div>

        <Equipments />
      </div>
      <Footer1 />
    </div>
  );
};

export default Home;
