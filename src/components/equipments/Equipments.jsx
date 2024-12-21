import React, { useState } from "react";
import "./equipment.scss";
import { Image } from "cloudinary-react";
import { equipments } from "./equipment.json";
import vector from "../../assets/vector.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartsData } from "../atom/carts";
import { Link } from "react-router-dom";

const Equipments = () => {
  let [carts, setCarts] = useRecoilState(cartsData);

  function addToCart(data) {
    if (carts.find((x) => x.id === data.id)) {
      console.log("already added to cart");
    } else {
      console.log("added to cart");

      setCarts([...carts, data]);
    }
  }

  return (
    <div id="Equipments">
      <div className="section">
        <ul>
          {equipments.map((equipments) => (
            <div className="relative " key={equipments.id}>
              <Link to={"/Description"}>
                <Image
                  cloudName={equipments.cloudName}
                  publicId={equipments.publicId}
                  loading="lazy"
                  className="relative same"
                />
              </Link>

              <div className="cart-available">
                <div>
                  {equipments.cart && (
                    <div className="carts">
                      <img
                        src="https://res.cloudinary.com/drqaon7o8/image/upload/v1733171574/Cart_nuobda.png"
                        alt="cart"
                        onClick={() => addToCart(equipments)}
                      />
                    </div>
                  )}
                </div>

                <div>
                  {equipments.status && (
                    <div
                      className={`status ${equipments.status.toLowerCase()}`}
                    >
                      <h5>{equipments.status}</h5>
                    </div>

                    // <div
                    //   className={`availability ${equipments.availability.toLowerCase()}`}
                    // >
                    //   <h5>{equipments.availability}</h5>
                    // </div>
                  )}
                </div>
              </div>

              <div className="parts same">
                <h3>{equipments.name}</h3>
                <p> {equipments.description}</p>
                <div className="flex">
                  <div>
                    <img src={vector} alt="vector" />
                  </div>

                  <div>
                    <p> {equipments.tags}</p>
                    <p> {equipments.id}</p>
                  </div>
                </div>

                <div className="flex2">
                  <div>
                    <h6>{equipments.price}</h6>
                  </div>

                  <Link to={"/Checkout"}>
                    <div>
                      <button>{equipments.button}</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Equipments;
