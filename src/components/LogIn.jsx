import { useContext, useState } from "react";
import { buttonStyle, contactContainerStyle, contactHeaderStyle, inputStyle } from "../css/contactUsCss";
import MyConext from "../context/context";
import { Link, useNavigate } from "react-router-dom";

function LogIn() {

    const [mailValue, setMailValue] = useState("");
    const [passValue, setPassValue] = useState("");
    const loginFunc = useContext(MyConext).logIn;
    const navigate = useNavigate(); // שימוש ב-useNavigate


    // פונקציה שמחברת את המשתמש הנוכחי
    const onLogin = () => {

        loginFunc(mailValue, passValue , navigate);

          // ניקוי השדות
          setMailValue("");
          setPassValue("");

    };

    return <>
        <div style={contactContainerStyle}>
            <h1 style={contactHeaderStyle}>התחברות</h1>
            <form>
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
                <br></br>
                <button
                    type="button"
                    onClick={() => {onLogin()}}
                    style={buttonStyle} >
                    להתחברות
                </button>
            </form>

            <p>עדיין לא רשום? הרשם עכשו</p>
            <Link to="/signUp" style={buttonStyle} >להרשמה</Link>

        </div>
    </>
}

export default LogIn;
