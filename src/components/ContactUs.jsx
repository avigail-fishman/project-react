import { useState } from "react"

function ContactUs() {

  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [mailValue, setMailValue] = useState("");

  ///////////////////////////////////////////////
  // לבדוק איך מציגים את השם //
  const toContact = () =>{
    alert(`פרטיך נשלחו בהצלחה! ${nameValue}`);
  }

    return <>

   <h1>צור קשר</h1>
   <form>
    <input type="text" value={nameValue} placeholder='הכנס שם מלא' onChange={(e) => {setNameValue(e.target.value)}}/>
    <input type="number" value={phoneValue} placeholder='הכנס טלפון' onChange={(e) => {setPhoneValue(e.target.value)}}/>
    <input type="email" value={mailValue} placeholder='הכנס כתובת מייל' onChange={(e) => {setMailValue(e.target.value)}}/>
    <button onClick={() =>{ toContact()}}>ליצירת קשר</button>

   </form>
    </>
    
  }
  
  export default ContactUs;
  