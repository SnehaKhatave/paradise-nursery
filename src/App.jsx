import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <>
      {!showProducts ? (
        <div className="background-image">
          <div className="overlay-content">
            {/* ✅ EXACT TEXT REQUIRED */}
            <h1>Welcome to Paradise Nursery</h1>

            {/* ✅ BUTTON WITH onClick */}
            <button onClick={handleGetStarted}>Get Started</button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </>
  );
}

export default App;
