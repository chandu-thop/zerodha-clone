import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, type }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow, closeSellWindow } = useContext(GeneralContext);

  const handleActionClick = async () => {
    await axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: type, // BUY or SELL
    });

    type === "BUY" ? closeBuyWindow() : closeSellWindow();
  };

  const handleCancelClick = () => {
    type === "BUY" ? closeBuyWindow() : closeSellWindow();
  };

  return (
    <div
      className="container"
      id={type === "BUY" ? "buy-window" : "sell-window"}
      draggable="true"
    >
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button
            className={`btn ${type === "BUY" ? "btn-blue" : "btn-red"}`}
            onClick={handleActionClick}
          >
            {type}
          </button>

          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
