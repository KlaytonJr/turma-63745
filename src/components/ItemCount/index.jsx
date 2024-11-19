import React, { useState } from "react";

const ItemCount = ({ stock, handleIncrease, handleDecrease, count }) => {
  return (
    <div className="item-count">
      <div className="counter-controls">
        <button onClick={handleDecrease} disabled={count <= 1}>
          -
        </button>

        <span className="counter-value">{count}</span>

        <button onClick={handleIncrease} disabled={count >= stock}>
          +
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
