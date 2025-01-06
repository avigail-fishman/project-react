import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Details from "./components/Details";
import About from "./components/About";
import Products from "./components/Products";
import MyCart from "./components/MyCart";
import { headerStyle, navStyle, logoStyle, linkStyle } from "./style";

function App() {
  return (
    <>

      <header style={headerStyle}>
        <nav style={navStyle}>
          {/* קישורים */}
          <Link to="signIn" style={linkStyle}>
            התחברות
          </Link>
          <Link to="myCart" style={linkStyle}>
            הסל שלי
          </Link>
          <Link to="profile" style={linkStyle}>
            איזור אישי
          </Link>
          <Link to="contactUs" style={linkStyle}>
            צור קשר
          </Link>
          <Link to="products" style={linkStyle}>
            מוצרים
          </Link>
          <Link to="about" style={linkStyle}>
            אודות
          </Link>
          <Link to="home" style={linkStyle}>
            דף הבית
          </Link>
          {/* לוגו */}
          <img src="/images/logo.png" alt="Logo" style={logoStyle} />
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          {/* <Route path="/details/:name/:discraption" element={<Details />} /> */}
          <Route path="/myCart/:name/:price" element={<MyCart />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
