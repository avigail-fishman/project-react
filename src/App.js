import { Link, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Details from "./components/Details";
import About from "./components/About";
import Products from "./components/Products";
import { navStyle } from "./style";
import MyCart from './components/MyCart';

function App() {

  return <>
    <header>
      <nav style={navStyle}>
        <Link to="home" >דף הבית</Link>
        <Link to="about" > אודות</Link>
        <Link to="Products" >מוצרים </Link>
        <Link to="contactUs" >צור קשר </Link>
        <Link to="prfile" > איזור אישי </Link>
        <Link to="myCart" > הסל שלי </Link>
        <Link to="signIn" > התחברות </Link>
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

}

export default App;