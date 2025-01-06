import React, { useState } from "react";
import Details from "./Details";
import { Link } from "react-router-dom";
import { btnMdl, divStyle, imgCrd } from "../style";

function Card({ flower }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // סוג הפופאפ (details או cart)

  const openModal = (type) => {
    setModalType(type); // עדכון סוג המודאל
    setModalOpen(true);  // פתיחת הפופאפ
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div style={divStyle}>
      <img
        src={`/images/${flower.img}`}
        alt={flower.name}
        style={imgCrd}
      />
      <p>{flower.name}</p>
      <p>{flower.price} ₪</p>

      {/* כפתור "פרטי המוצר" */}
      <button onClick={() => openModal("details")} style={btnMdl}>
        לפרטים נוספים
      </button>

      <br /><br />

      {/* כפתור "הוסף לסל" בתוך כרטיס המוצר - פתיחת פופאפ של עגלת קניות */}
      <button
        onClick={() => openModal("cart")}
        style={{ padding: "10px", cursor: "pointer" }}
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
