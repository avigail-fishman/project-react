import { useContext, useState } from "react";
import Card from "./Card";
import { productsContainerStyle, cardContainerStyle, cardContainerHoverStyle } from "../css/productsCss";
import { Link } from "react-router-dom";
import MyConext from "../context/context";
import { buttonStyle } from "../css/paymentCss";

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
    <br></br>
      {currentUser?.role === "manager" && (
      <Link to="/addItem" style={buttonStyle}>להוספת מוצר</Link>
      )}
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
    
    </>
  );
}

export default Products;
