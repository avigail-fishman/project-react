import { Link } from "react-router-dom";
import { closeButtonStyle, modalStyle, overlayStyle } from "../style";

function Details({ flower, isOpen, onClose, modalType, openModal }) {
  if (!isOpen) return null; // אם הפופאפ סגור, לא להציג כלום

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button onClick={onClose} style={closeButtonStyle}>X</button>

        {/* הצגת שם המוצר */}
        <h2>{flower.name}</h2>
        <p>{flower.price} ₪</p>

        {/* אם המודאל הוא עבור "פרטי המוצר" */}
        {modalType === "details" && (
          <>
            <p>{flower.discraption}</p>
            {/* שינוי לכפתור שמפעיל את openModal */}
            <button onClick={() => openModal("cart")}>הוסף לסל</button>
          </>
        )}

        {/* אם המודאל הוא עבור "הוסף לסל" */}
        {modalType === " " && (
          <>
            <p>המוצר נוסף לעגלת הקניות!</p>
            <Link to="/myCart">ראה את עגלת הקניות</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Details;
