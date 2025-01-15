import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { paymentContainerStyle, paymentHeaderStyle, totalStyle, buttonStyle } from '../css/paymentCss'; // מייבא את הסגנונות מקובץ ה-CSS

function Payment({resetCartArr}) {
  const location = useLocation(); // שליפת ה-state של הניווט
  const { total: initialTotal } = location.state || { total: 0 }; // ברירת מחדל ל-0 אם אין state
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false); // סטייט למעקב אחרי אישור התשלום

  const handlePayment = () => {
    setIsPaymentConfirmed(true); // עדכון סטייט לאישור תשלום
    resetCartArr();
  };

  return (
    <div style={paymentContainerStyle}>
      <h1 style={paymentHeaderStyle}>דף תשלום</h1>
      {!isPaymentConfirmed ? ( // אם התשלום לא אושר
        <>
          <h2 style={totalStyle}>המחיר לתשלום הוא: {initialTotal}₪</h2>
          <button 
            style={buttonStyle} 
            onClick={handlePayment}>
            אישור לתשלום
          </button>
        </>
      ) : ( // אם התשלום אושר
        <>
          <h2 style={totalStyle}>הזמנתך נקלטה בהצלחה</h2>
          <Link to="/Products" style={buttonStyle}>חזרה לדף הקניות</Link>
        </>
      )}
    </div>
  );
}

export default Payment;