import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import { cartsData } from "../atom/carts";
import { useRecoilValue } from "recoil";

const Nav = () => {
  let carts = useRecoilValue(cartsData);
  return (
    <div id="Nav">
      <nav>
        <ol>
          <li>
            <h3>GreenGear</h3>
          </li>

          <li className="center">
            <Link to="/">Home</Link>
            <Link to="Categories">Categories</Link>
            <Link to="HowItWorks">How it works</Link>
            <Link to="Contact">Contact</Link>
            <Link to="FAQ">FAQ</Link>
          </li>

          <Link to="/Signin">
            <button>Signin</button>
          </Link>

          <li className="socials">
            <Link to="/Cart">
              <div className="cart">
                <img
                  src="https://res.cloudinary.com/drqaon7o8/image/upload/v1731491815/Frame_4_ufyvju.png"
                  alt="cart"
                />
                <span>{carts.length}</span>
              </div>
            </Link>

            <div>
              <img
                src="https://res.cloudinary.com/drqaon7o8/image/upload/v1731491815/Vector_tnmnjw.png"
                alt="notification"
              />
            </div>

            <div>
              <Link to="/Account">
                <img
                  src="https://res.cloudinary.com/drqaon7o8/image/upload/v1731491815/user-circle_ywwk2n.png"
                  alt="user"
                />
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Nav;
