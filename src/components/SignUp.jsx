import { useContext, useState } from "react";
import { buttonStyle, contactContainerStyle, contactHeaderStyle, inputStyle } from "../css/contactUsCss";
import MyConext from "../context/context";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const [nameValue, setNameValue] = useState("");
    const [mailValue, setMailValue] = useState("");
    const [passValue, setPassValue] = useState("");
    const [isPassValue, setIsPassValue] = useState("");
    const signUpFunc = useContext(MyConext).signUp;
    const navigate = useNavigate(); // שימוש ב-useNavigate


    // פונקציה שיוצרת משתמש חדש ושמה אותו במערך המשתמשים
    const onSignUp = () => {
        if (passValue !== isPassValue) {
            alert("הסיסמאות אינן זהות")
            return;
        }

        const newUser = { username: nameValue, email: mailValue, password: passValue };

        // ניקוי השדות
        setNameValue("");
        setMailValue("");
        setPassValue("");
        setIsPassValue("");

        signUpFunc(newUser, navigate);
    };

    return (
        <div style={contactContainerStyle}>
            <h1 style={contactHeaderStyle}>הרשמה</h1>
            <form>
                <input
                    type="text"
                    value={nameValue}
                    placeholder="הכנס שם מלא"
                    onChange={(e) => setNameValue(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="email"
                    value={mailValue}
                    placeholder="הכנס כתובת מייל"
                    onChange={(e) => setMailValue(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="password"
                    value={passValue}
                    placeholder="הכנס סיסמה"
                    onChange={(e) => setPassValue(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="password"
                    value={isPassValue}
                    placeholder="אמת את הסיסמה"
                    onChange={(e) => setIsPassValue(e.target.value)}
                    style={inputStyle}
                />
                <br></br>
                <button
                    type="button"
                    onClick={() => { onSignUp() }}
                    style={buttonStyle}>
                    להרשמה
                </button>
            </form>
        </div>
    );

}
export default SignUp;