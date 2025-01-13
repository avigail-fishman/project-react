import { useState } from "react";
import { contactContainerStyle, contactHeaderStyle, inputStyle, buttonStyle } from '../css/contactUsCss'; // מייבא את הסגנונות מקובץ ה-CSS

function ContactUs() {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [mailValue, setMailValue] = useState("");

  const toContact = () => {

    alert(`פרטיך נשלחו בהצלחה! ${nameValue}`);

    if(require){
    // ניקוי השדות
    setNameValue("");
    setPhoneValue("");
    setMailValue("");
    }
  };

  return (
    <div style={contactContainerStyle}>
      <h1 style={contactHeaderStyle}>צור קשר</h1>
      <form>
        <input 
          type="text" 
          value={nameValue} 
          placeholder="הכנס שם מלא" 
          required
          onChange={(e) => setNameValue(e.target.value)} 
          style={inputStyle} 
        />
        <input 
          type="number" 
          value={phoneValue} 
          placeholder="הכנס טלפון" 
          required
          onChange={(e) => setPhoneValue(e.target.value)} 
          style={inputStyle} 
        />
        <input 
          type="email" 
          value={mailValue} 
          placeholder="הכנס כתובת מייל" 
          required
          onChange={(e) => setMailValue(e.target.value)} 
          style={inputStyle} 
        />
        <button 
          type="button" 
          onClick={toContact} 
          style={buttonStyle}
        >
          ליצירת קשר
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
