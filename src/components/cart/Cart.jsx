import React, { useState, item, useEffect } from "react";
import "./cart.scss";
import light from "../../assets/light.svg";
import Recently from "../recently/Recently";
import { equipments } from "../equipments/equipment.json";
import { cartsData } from "../atom/carts";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { subtotalState } from "../atoms/subtotal";

const Cart = () => {
  let [cart, setCart] = useRecoilState(cartsData);
  const setSubtotal = useSetRecoilState(subtotalState);

  // Function to handle increasing quantity
  function handleIncrease(id) {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  }

  // Function to handle decreasing quantity
  function handleDecrease(id) {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  }

  // Function to handle delete
  function handleRemove(id) {
    // Filter out the item with the specified ID
    const updatedCart = cart.filter((item) => item.id !== id);

    // Update the Recoil state
    setCart(updatedCart);
  }

  const subtotal = cart.reduce((total, item) => {
    const price = parseFloat(item.price) || 0; // Convert price to number, default to 0
    const quantity = parseInt(item.quantity, 10) || 0; // Convert quantity to number, default to 0
    console.log(`Item: ${item.name}, Price: ${price}, Quantity: ${quantity}`); // Debug each item
    return total + price * quantity;
  }, 0);

  console.log("Subtotal:", subtotal); // Debug subtotal

  console.log("Link State:", { subtotal });

  useEffect(() => {
    setSubtotal(subtotal); // Update global state
  }, [subtotal, setSubtotal]);

  return (
    <div id="Cart">
      <div className="first-section">
        <div className="section">
          {cart.map((item) => (
            <div className="group" key={item.id}>
              <div className="image">
                <div className="delete">
                  <img
                    src="https://res.cloudinary.com/drqaon7o8/image/upload/v1731492290/delete-02_enm4vo.png"
                    alt="delete-icon"
                    onClick={() => handleRemove(item.id)}
                  />
                </div>
                <div className="tractor">
                  <img src={item.publicId} alt={item.name} loading="lazy" />
                </div>
                <div className="img">
                  <h5>{item.name}</h5>
                  <h6>₦{item.price}/day</h6>

                  <div className="quantity">
                    <p>Quantity</p>

                    <div className="increase">
                      <div className="span">
                        <span>
                          <button
                            onClick={() => handleDecrease(item.id)}
                            className="but1"
                          >
                            -
                          </button>
                        </span>
                        <span>{item.quantity}</span>
                        <span>
                          <button
                            className="but2"
                            onClick={() => handleIncrease(item.id)}
                          >
                            +
                          </button>
                        </span>
                      </div>

                      <div>
                        <p>{item.price}</p>
                      </div>
                    </div>
                  </div>

                  <div className="duration">
                    <p>Duration </p>

                    <div className="light">
                      <div className="cal">
                        <div>
                          <img src={light} alt="calender" />
                        </div>
                        <div>From</div>
                      </div>
                      <div>-</div>
                      <div className="cal">
                        <div>To</div>
                        <div>
                          <img src={light} alt="calender" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="summary">
          <h5>Cart Summary</h5>

          <div className="sub">
            <div>
              <p>Sub-Total</p>
            </div>
            ₦{subtotal.toFixed(2)}
          </div>
          <p>Delivery fees not included yet</p>

          <Link to="/Checkout">
            <div>
              <button>Checkout</button>
            </div>
          </Link>
        </div>
      </div>

      <Recently />
    </div>
  );
};

export default Cart;
