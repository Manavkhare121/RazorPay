import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products/get-item")
      .then((response) => {
        setProduct(response.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleBuy = () => {
    alert("Product purchased successfully!");
  };

  return (
    <div className="container">
      {product && (
        <div className="product-card">

          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />

          <div className="product-details">
            <h2>{product.title}</h2>
            <p className="description">
              {product.description}
            </p>
            <div className="price">
              {product.price.amount/100} {product.price.currency}
            </div>
            <button
              className="buy-btn"
              onClick={handleBuy}
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;