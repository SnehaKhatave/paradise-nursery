import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // ✅ Separate function for total calculation
  const calculateTotalAmount = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      {/* ✅ Total Amount */}
      <h3>Total: ₹{calculateTotalAmount()}</h3>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* ✅ IMAGE (REQUIRED FIX) */}
          <img src={item.img} alt={item.name} width="100" height="100" />

          <div>
            {/* ✅ NAME + PRICE */}
            <h4>{item.name}</h4>
            <p>Price: ₹{item.price}</p>

            {/* ✅ TOTAL PER ITEM */}
            <p>Total: ₹{item.price * item.quantity}</p>

            {/* ✅ QUANTITY CONTROLS */}
            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, amount: 1 }))
              }
            >
              +
            </button>

            <span style={{ margin: "0 10px" }}>{item.quantity}</span>

            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, amount: -1 }))
              }
              disabled={item.quantity <= 1}
            >
              -
            </button>

            {/* ✅ DELETE BUTTON */}
            <br />
            <button
              onClick={() => dispatch(removeItem(item.id))}
              style={{ marginTop: "5px" }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* ✅ BUTTONS */}
      <button onClick={() => alert("Coming Soon")}>Checkout</button>

      <button
        onClick={() => (window.location.href = "/")}
        style={{ marginLeft: "10px" }}
      >
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
