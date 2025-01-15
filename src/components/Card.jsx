import React, { useContext, useState } from "react";
import { btnMdl, divStyle, imgCrd, cardContainerStyle, cardButtonStyle } from "../css/productsCss";
import MyContext from "../context/context";
import { useNavigate } from "react-router-dom";

function Card({ flower, addToCart, deleteByManager }) {
  const [showDescription, setShowDescription] = useState(false);
  const { currentUser } = useContext(MyContext);
  const navigate = useNavigate();

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const deleteForever = (flower) => {
    deleteByManager(flower);
  };

  const updateItem = (flower) => {
    navigate("/updateItem", { state: { product: flower } });
  };
  // שייך לקומפוננטת details 
  // const navigateToDetails = () => {
  //   // ניווט לעמוד פרטי המוצר עם פרמטרים
  //   navigate(`/details/${flower.name}/${flower.discraption}`);
  // };

  return (
    <div style={cardContainerStyle}>
      <img src={`/images/${flower.img}`} alt={flower.name} style={imgCrd} />
      <h3 style={{ margin: "10px 0", fontSize: "18px", color: "#333" }}>{flower.name}</h3>
      <p style={{ color: "#555", fontSize: "16px", marginBottom: "15px" }}>{flower.price} ₪</p>

      {/* הצגת התיאור במידת הצורך */}
      {showDescription && (
        <p style={{
          color: "#666", fontSize: "14px", marginBottom: "10px"
        }}>{flower.discraption}</p>
      )}
      {(currentUser?.role === "user" || currentUser == null) && (

        <button onClick={toggleDescription} style={cardButtonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#BC7D74")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#D8B0B1")}
        >
          {showDescription ? "הסתר פרטים" : "פרטים נוספים"}
        </button>
      )}
      {/* שייך לקומפוננטת details */}
      {/* {(currentUser?.role === "user" || currentUser == null) && (
      <button
        onClick={navigateToDetails} // לחצן ניווט לתצוגת פרטי המוצר
        style={cardButtonStyle}
      >
        צפה בפרטי המוצר
      </button>
      )} */}

      <br /><br />

      {(currentUser?.role === "user" || currentUser == null) && (
        <button
          onClick={() => addToCart(flower)}
          style={cardButtonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#BC7D74")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#D8B0B1")}>
          הוסף לסל
        </button>
      )}

      {currentUser?.role == "manager" && (
        <>
          <button
            onClick={() => updateItem(flower)}
            style={cardButtonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff6384")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff91af")}
          >
            ערוך מוצר
          </button>
          <button
            onClick={() => deleteForever(flower)}
            style={cardButtonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff6384")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff91af")}
          >
            מחק מוצר
          </button>
        </>
      )}
    </div>
  );
}

export default Card;