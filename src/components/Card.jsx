import React, { useContext, useState } from "react";
import Details from "./Details";
import { btnMdl, divStyle, imgCrd, cardContainerStyle, cardButtonStyle } from "../css/productsCss";
import MyContext from "../context/context";
import { useNavigate } from "react-router-dom";

function Card({ flower, addToCart, deleteByManager }) {
  const [isModalOpen, setModalOpen] = useState(false); // ניהול מצב פתיחת הפופאפ
  const [modalType, setModalType] = useState(""); // סוג הפופאפ (details או cart)
  const { currentUser } = useContext(MyContext);
  const navigate = useNavigate();

  // פונקציה לפתיחת פופאפ
  const openModal = (type) => {
    setModalType(type); 
    setModalOpen(true);
  };

  // פונקציה שמבצעת שתי פעולות: פתיחת פופאפ והוספה לסל
  const twoFunc = (flower, details) => {
    openModal(details);
    addToCart(flower);
  };

  const closeModal = () => setModalOpen(false); // סגירת פופאפ

  // פונקציה למחיקת מוצר על ידי מנהל
  const deleteForever = (flower) => {
    deleteByManager(flower);
  };

  // ניווט לדף עדכון מוצר
  const updateItem = (flower) => {
    navigate("/updateItem", { state: { product: flower } });
  };

  return (
    <div style={cardContainerStyle}>
      <img src={`/images/${flower.img}`} alt={flower.name} style={imgCrd} />
      <h3 style={{ margin: "10px 0", fontSize: "18px", color: "#333" }}>{flower.name}</h3>
      <p style={{ color: "#555", fontSize: "16px", marginBottom: "15px" }}>{flower.price} ₪</p>

      {/* כפתור לפרטים נוספים */}
      {(currentUser?.role === "user" || currentUser == null) && (
        <button onClick={() => openModal("details")} style={cardButtonStyle}>
          לפרטים נוספים
        </button>
      )}

      {/* כפתור להוספה לסל */}
      {(currentUser?.role === "user" || currentUser == null) && (
        <button
          onClick={() => twoFunc(flower, "details")}
          style={cardButtonStyle}
        >
          הוסף לסל
        </button>
      )}

      {/* כפתור עריכת מוצר עבור מנהל */}
      {currentUser?.role === "manager" && (
        <button onClick={() => updateItem(flower)} style={cardButtonStyle}>
          ערוך מוצר
        </button>
      )}

      {/* כפתור מחיקת מוצר עבור מנהל */}
      {currentUser?.role === "manager" && (
        <button onClick={() => deleteForever(flower)} style={cardButtonStyle}>
          מחק מוצר
        </button>
      )}

      {/* פופאפ פרטי המוצר */}
      <Details
        flower={flower}
        isOpen={isModalOpen}
        onClose={closeModal}
        modalType={modalType}
        openModal={openModal}
      />
    </div>
  );
}

export default Card;
