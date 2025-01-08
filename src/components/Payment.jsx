import { useParams } from "react-router-dom";
import { paymentContainerStyle, paymentHeaderStyle, totalStyle, buttonStyle } from '../css/paymentCss'; // מייבא את הסגנונות מקובץ ה-CSS

function Payment() {
  const { sum } = useParams();

  return (
    <div style={paymentContainerStyle}>
      <h1 style={paymentHeaderStyle}>דף תשלום</h1>
      <h2 style={totalStyle}>המחיר לתשלום הוא: {sum}₪</h2>
      <button 
        style={buttonStyle} 
        onClick={() => alert("קבלה נשלחה למייל")}
      >
        אישור לתשלום
      </button>
    </div>
  );
}

export default Payment;
