import { useContext, useState } from "react";
import Card from "./Card";
import { productsContainerStyle, cardContainerStyle, cardContainerHoverStyle } from "../css/productsCss";
import { Link } from "react-router-dom";
import MyConext from "../context/context";

function Products({ products, addToCart, deleteByManager,updateItemByManager}) {
  
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { currentUser } = useContext(MyConext);
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
            <Card flower={{ ...f }} addToCart={addToCart}
             deleteByManager={deleteByManager}
             updateItemByManager ={updateItemByManager} />
          </div>
        ))}
      </div>
      {currentUser?.role === "manager" && (
      <Link to="/addItem">להוספת מוצר</Link>
      )}
    </>
  );
}

export default Products;
