import { useState } from "react";
import { contactContainerStyle, contactHeaderStyle, inputStyle, buttonStyle } from '../css/contactUsCss'; // מייבא את הסגנונות מקובץ ה-CSS

function ContactUs() {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [mailValue, setMailValue] = useState("");

  const toContact = () => {
    alert(`פרטיך נשלחו בהצלחה! ${nameValue}`);
  };

  return (
    <div style={contactContainerStyle}>
      <h1 style={contactHeaderStyle}>צור קשר</h1>
      <form>
        <input 
          type="text" 
          value={nameValue} 
          placeholder="הכנס שם מלא" 
          onChange={(e) => setNameValue(e.target.value)} 
          style={inputStyle} 
        />
        <input 
          type="number" 
          value={phoneValue} 
          placeholder="הכנס טלפון" 
          onChange={(e) => setPhoneValue(e.target.value)} 
          style={inputStyle} 
        />
        <input 
          type="email" 
          value={mailValue} 
          placeholder="הכנס כתובת מייל" 
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
