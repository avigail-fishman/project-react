import { Link, useLocation } from "react-router-dom";
import { paymentContainerStyle, paymentHeaderStyle, totalStyle, buttonStyle } from '../css/paymentCss'; // מייבא את הסגנונות מקובץ ה-CSS

function Payment() {
  const location = useLocation(); // שליפת ה-state של הניווט
  const { total } = location.state || { total: 0 }; // ברירת מחדל ל-0 אם אין state

  return (
    <div style={paymentContainerStyle}>
      <h1 style={paymentHeaderStyle}>דף תשלום</h1>
      <h2 style={totalStyle}>המחיר לתשלום הוא: {total}₪</h2>
      <button 
        style={buttonStyle} 
        onClick={() => alert("קבלה נשלחה למייל")} >
        אישור לתשלום
      </button>
      <Link to ="/MyCart" style={buttonStyle}>חזרה לסל הקניות</Link>
    </div>
  );
}

export default Payment;