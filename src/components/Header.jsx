import { Link, useNavigate } from "react-router-dom"; // ייבוא useNavigate
import {
  headerStyle,
  linkStyle,
  navStyle,
  logoStyle,
  linkHoverStyle,
} from "../css/heaerCss";
import { useState } from "react";
import MyConext from "../context/context";
import React, { useContext } from "react";

function Header() {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate(); // שימוש ב-useNavigate
  const { currentUser, logOut } = useContext(MyConext);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const handleLogOut = () => {
    logOut(); // קריאה לפונקציית התנתקות
    navigate("/home"); // ניווט לדף הבית לאחר התנתקות
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <Link
          to="/myCart"
          style={{ ...linkStyle, ...(hovered ? linkHoverStyle : {}) }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          הסל שלי
        </Link>

        {currentUser?.role === "manager" && (
          <>
            <Link
              to={"/usersManager"}
              style={{ ...linkStyle, ...(hovered ? linkHoverStyle : {}) }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              לניהול משתמשים
            </Link>
          </>
        )}

        {currentUser && (
          <>
            <span>שלום, {currentUser.username}</span>
            <button
              onClick={handleLogOut} // קריאה לפונקציה המעדכנת
              style={{ ...linkStyle, ...(hovered ? linkHoverStyle : {}) }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              התנתקות
            </button>
          </>
        )}

        {!currentUser && (
          <Link
            to="/logIn"
            style={{ ...linkStyle, ...(hovered ? linkHoverStyle : {}) }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            התחברות
          </Link>
        )}

        <Link
          to="/profile"
          style={{ ...linkStyle, ...(hovered ? linkHoverStyle : {}) }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          איזור אישי
        </Link>

        <Link
          to="/contactUs"
          style={{ ...linkStyle, ...(hovered ? linkHoverStyle : {}) }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          צור קשר
        </Link>

        <Link
          to="/products"
          style={{ ...linkStyle, ...(hovered ? linkHoverStyle : {}) }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          מוצרים
        </Link>

        <Link
          to="/about"
          style={{ ...linkStyle, ...(hovered ? linkHoverStyle : {}) }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          אודות
        </Link>

        <Link
          to="/home"
          style={{ ...linkStyle, ...(hovered ? linkHoverStyle : {}) }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          דף הבית
        </Link>

        <Link to="/home">
          <img src="/images/logo.png" alt="Logo" style={logoStyle} />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
