import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [addedItems, setAddedItems] = useState([]);

  const plants = {
    Indoor: [
      {
        id: 1,
        name: "Snake Plant",
        price: 200,
        img: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Aloe Vera",
        price: 150,
        img: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        name: "Peace Lily",
        price: 250,
        img: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "Spider Plant",
        price: 180,
        img: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        name: "ZZ Plant",
        price: 300,
        img: "https://via.placeholder.com/150",
      },
      {
        id: 6,
        name: "Rubber Plant",
        price: 350,
        img: "https://via.placeholder.com/150",
      },
    ],
    Outdoor: [
      {
        id: 7,
        name: "Rose",
        price: 100,
        img: "https://via.placeholder.com/150",
      },
      {
        id: 8,
        name: "Tulsi",
        price: 80,
        img: "https://via.placeholder.com/150",
      },
      {
        id: 9,
        name: "Hibiscus",
        price: 120,
        img: "https://via.placeholder.com/150",
      },
      {
        id: 10,
        name: "Jasmine",
        price: 140,
        img: "https://via.placeholder.com/150",
      },
      {
        id: 11,
        name: "Marigold",
        price: 90,
        img: "https://via.placeholder.com/150",
      },
      {
        id: 12,
        name: "Bougainvillea",
        price: 200,
        img: "https://via.placeholder.com/150",
      },
    ],
    Succulents: [
      {
        id: 13,
        name: "Cactus",
        price: 120,
        img: "https://via.placeholder.com/150",
      },
      {
        id: 14,
        name: "Echeveria",
        price: 160,
        img: "https://via.placeholder.com/150",
      },
      {
        id: 15,
        name: "Haworthia",
        price: 180,
        img: "https://via.placeholder.com/150",
      },
      {
        id: 16,
        name: "Sedum",
        price: 140,
        img: "https://via.placeholder.com/150",
      },
      {
        id: 17,
        name: "Crassula",
        price: 170,
        img: "https://via.placeholder.com/150",
      },
      {
        id: 18,
        name: "Agave",
        price: 220,
        img: "https://via.placeholder.com/150",
      },
    ],
  };

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      {/* ✅ NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          background: "#ddd",
        }}
      >
        <h2>Paradise Nursery</h2>
        <div>
          <span>Home | Plants | Cart ({cart.length})</span>
        </div>
      </nav>

      {/* ✅ CATEGORIES */}
      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {plants[category].map((plant) => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  width: "150px",
                }}
              >
                {/* ✅ IMAGE */}
                <img src={plant.img} alt={plant.name} width="100%" />

                {/* ✅ NAME + PRICE */}
                <h4>{plant.name}</h4>
                <p>₹{plant.price}</p>

                {/* ✅ ADD TO CART BUTTON */}
                <button
                  onClick={() => handleAdd(plant)}
                  disabled={addedItems.includes(plant.id)}
                >
                  {addedItems.includes(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
