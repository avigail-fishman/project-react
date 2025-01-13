import { useState } from "react";
import { buttonStyle, contactContainerStyle, inputStyle } from "../css/contactUsCss";
import { useLocation } from "react-router-dom";

function UpdateItem({ updateItemByManager }) {
  const location = useLocation(); // שליפת state של המוצר לעדכון
  const { product } = location.state;

  // State לניהול השדות של המוצר
  const [nameValue, setNameValue] = useState(product.name);
  const [priceValue, setPriceValue] = useState(product.price);
  const [imageValue, setImageValue] = useState(product.img);
  const [discraptionValue, setDiscraptionValue] = useState(product.discraption);

  // פונקציה לעדכון פרטי המוצר
  const updateItemForever = () => {
    const newItem = { id: product.id, name: nameValue, price: priceValue, img: imageValue, discraption: discraptionValue };
    alert("המוצר עודכן בהצלחה");
    updateItemByManager(newItem);
    setDiscraptionValue("");
    setImageValue("");
    setNameValue("");
    setPriceValue("");
  };

  return (
    <>
      <h1>טופס עידכון מוצר</h1>
      <div style={contactContainerStyle}>
        <form>
          <input
            type="text"
            value={nameValue}
            placeholder="הכנס שם מוצר"
            onChange={(e) => setNameValue(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="text"
            value={priceValue}
            placeholder="הכנס מחיר"
            onChange={(e) => setPriceValue(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="text"
            value={imageValue}
            placeholder="הכנס כתובת תמונה"
            onChange={(e) => setImageValue(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="text"
            value={discraptionValue}
            placeholder=" הכנס תיאור מוצר"
            onChange={(e) => setDiscraptionValue(e.target.value)}
            style={inputStyle}
            required
          />
          <button
            type="button"
            onClick={() => updateItemForever()}
            style={buttonStyle}
          >
            עדכן מוצר
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateItem;
