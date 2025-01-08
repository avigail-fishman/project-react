import React, { useState } from "react";
import Details from "./Details";
import { btnMdl, divStyle, imgCrd, cardContainerStyle, cardButtonStyle, cardButtonHoverStyle } from "../css/productsCss";

function Card({ flower, addToCart }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // סוג הפופאפ (details או cart)

  const openModal = (type) => {
    setModalType(type); // עדכון סוג המודאל
    setModalOpen(true);  // פתיחת הפופאפ
  };

  // פונקציה שמכילה בתוכה את פונקציית פופאפ ופונקציית הוספה לסל
  const twoFunc = (flower, details) => {
    openModal(details);
    addToCart(flower);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div style={cardContainerStyle}>
      <img
        src={`/images/${flower.img}`}
        alt={flower.name}
        style={imgCrd}
      />
      <h3 style={{ margin: "10px 0", fontSize: "18px", color: "#333" }}>{flower.name}</h3>
      <p style={{ color: "#555", fontSize: "16px", marginBottom: "15px" }}>{flower.price} ₪</p>

      {/* כפתור "פרטי המוצר" */}
      <button onClick={() => openModal("details")} style={cardButtonStyle}>
        לפרטים נוספים
      </button>

      <br /><br />

      {/* כפתור "הוסף לסל" בתוך כרטיס המוצר - פתיחת פופאפ של עגלת קניות */}
      <button
        onClick={() => twoFunc(flower, "details")}
        style={cardButtonStyle}
        onMouseEnter={e => e.target.style.backgroundColor = "#ff6384"}
        onMouseLeave={e => e.target.style.backgroundColor = "#ff91af"}
      >
        הוסף לסל
      </button>

      {/* פופאפ פרטי המוצר או פרטי העגלה */}
      <Details
        flower={flower}
        isOpen={isModalOpen}
        onClose={closeModal}
        modalType={modalType}  // שליחת המידע לפופאפ
        openModal={openModal}  // העברת openModal כפרופס
      />
    </div>
  );
}

export default Card;
