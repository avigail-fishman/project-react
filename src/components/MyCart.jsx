import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  cartContainerStyle,
  cartHeaderStyle,
  cartItemStyle,
  deleteButtonStyle,
  totalStyle,
  paymentLinkStyle
} from '../css/myCartCss';

function MyCart({ cartArr = [], sum = 0, deleteFromCart }) {
  // הגדרת משתנים useState 
  // של הסכום ומערך העגלה בשביל שנוכל לשנות בהתאם לצורך
  const [myCartArr, setMyCartArr] = useState(cartArr);
  const [mySum, setMySum] = useState(sum);
  const navigate = useNavigate(); // שימוש ב-useNavigate

  // פונקציה שמוספיה לכמות בהתאם להוספה בעגלה
  const addItem = (productIndex) => {
    const newCart = [...myCartArr];
    // עדכון הכמות של המוצר
    newCart[productIndex].count += 1;
    setMyCartArr(newCart);

    // עדכון סכום לתשלום עם המחיר הבודד של המוצר
    setMySum((prevSum) => prevSum + parseFloat(newCart[productIndex].price));
  };

  // פונקציה שמפחיתה את הכמות בהתאם להורדה בעגלה
  const reduceCountItem = (productIndex) => {
    const newCart = [...myCartArr];
    if (newCart[productIndex].count > 1) {
      newCart[productIndex].count -= 1;
      setMyCartArr(newCart);

      // עדכון סכום לתשלום עם המחיר הבודד של המוצר
      setMySum((prevSum) => prevSum - parseFloat(newCart[productIndex].price));
    }
  };

  // פונקציה שמטפלת במחיקה של מוצר מהעגלה
  const handleDelete = (productIndex) => {
    const newCart = [...myCartArr];
    const productToDelete = newCart.splice(productIndex, 1)[0];
    setMyCartArr(newCart);

    // עדכון סכום לתשלום עם פונקציה שמבטיחה שימוש בערך הנוכחי
    setMySum((prevSum) => prevSum - productToDelete.price * productToDelete.count);

    // בדיקה אם העגלה ריקה לאחר המחיקה
    if (newCart.length == 0) {
      setMySum(0); // איפוס הסכום אם העגלה ריקה
    }

    deleteFromCart(productToDelete);
  };

  // פונקציה שמעבירה את הסכום הסופי לדף התשלום
  const handlePayment = () => {
    if (cartArr.length === 0) {
      alert("העגלה ריקה! לא ניתן לעבור לתשלום.");
      return;
    }
    navigate("/payment", { state: { total: mySum } }); // שימוש נכון ב-useNavigate
  };

  return (
    <div style={cartContainerStyle}>
      <h2 style={cartHeaderStyle}>עגלת קניות</h2>
      {myCartArr.length == 0 ? (
        <p>העגלה ריקה</p>
      ) : (
        <ol>
          {myCartArr.map((product, i) => (
            <li key={i} style={cartItemStyle}>
              {product.name} - {product.price * product.count}₪
              <button
                onClick={() => addItem(i)}
                style={deleteButtonStyle}
              >
                +
              </button>
              <h1>{product.count}</h1>
              <button
                onClick={() => reduceCountItem(i)}
                style={deleteButtonStyle}
              >
                -
              </button>
              <button
                onClick={() => handleDelete(i)}
                style={deleteButtonStyle}>
                מחיקה
              </button>
            </li>
          ))}
        </ol>
      )}
      <h1 style={totalStyle}>סכום לתשלום: {mySum}₪</h1>
      <button onClick={handlePayment} style={paymentLinkStyle}>
        לתשלום
      </button>
    </div>
  );
}

export default MyCart;