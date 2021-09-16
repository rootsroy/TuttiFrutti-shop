import React from "react";

const CartItem = ({ itme }) => {
  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/$item.image`}
          alt=""
        />
      </div>
      <div>
        <div>{itme.name}, ${itme.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={itme.purchaseQuantity}
          />
          <span role="img"
            aria-label="trash"
          >            🗑️
          </span>
        </div>
      </div>
    </div>
  )
};

export default CartItem;