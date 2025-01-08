import { useState } from "react";
import Card from "./Card";
import { productsContainerStyle, cardContainerStyle, cardContainerHoverStyle } from "../css/productsCss";

function Products({ products, addToCart }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  if (!products || products.length === 0) {
    return <p>לא נמצאו מוצרים.</p>;
  }

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "32px", margin: "30px 0", color: "#77a077" }}>פרחים</h1>
      <div style={productsContainerStyle}>
        {products.map((f, index) => (
          <div
            style={{
              ...cardContainerStyle,
              ...(hoveredIndex === index ? cardContainerHoverStyle : {}),
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={f.id}
          >
            <Card flower={{ ...f }} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
