import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductListing.css"; // Assuming you renamed the CSS file to ProductStyles.css

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductsFromWasteIntake = async () => {
      try {
        const response = await axios.get("/api/waste-products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products derived from waste intake. Please try again.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchProductsFromWasteIntake();
  }, []);

  return (
    <div className="product-container">
      <div className="product-grid">
        <div className="product-listing-section">
          <h1 className="product-heading">Products Derived from Waste Intake</h1>

          {loading && <p className="loading-text">Loading products...</p>}
          {error && <p className="error-message">{error}</p>}

          <div className="product-cards">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="product-item">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-type">Type: {product.type}</p>
                  <p className="product-quantity">Quantity: {product.quantity}</p>
                  <p className="product-price">Price: ${product.price}</p>
                  <p className="product-waste-source">Derived From Waste: {product.wasteSource}</p>
                </div>
              ))
            ) : (
              !loading && <p className="no-products-message">No products derived from waste intake are available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
