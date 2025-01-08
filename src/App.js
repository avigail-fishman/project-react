import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routing } from "./components/Routing";
import { appContainer, mainContent } from "../src/css/appCss"; // ייבוא הסגנונות

function App() {
  // מערך המוצרים
  const [products, setProducts] = useState([
    { id: 1, name: "זר עשיר", price: "120.0", img: "1.jpg", discraption: "בלה בלה" },
    { id: 2, name: "זר שבתי", price: "70.0", img: "2.jpg", discraption: "בלה בלה" },
    { id: 3, name: "זר ססגוני", price: "100.0", img: "3.jpg", discraption: "בלה בלה" },
    { id: 4, name: "זר מפואר", price: "270.0", img: "4.jpg", discraption: "בלה בלה" },
    { id: 5, name: "זר מעוצב", price: "90.0", img: "5.jpg", discraption: "בלה בלה" },
    { id: 6, name: "זר ורדרד", price: "120.0", img: "6.jpg", discraption: "בלה בלה" },
    { id: 7, name: "זר", price: "70.0", img: "7.jpg", discraption: "בלה בלה" },
    { id: 8, name: "racheli", price: "70.0", img: "8.jpg", discraption: "בלה בלה" },
    { id: 9, name: "racheli", time: "20:06", sum: 100, img: "9.jpg", discraption: "בלה בלה" },
  ]);

  const [cartArr, setCartArr] = useState([]);
  const [sum, setSum] = useState(0);

  // פונקציה להוספת מוצר לעגלה וחישוב הסכום הכולל
  const addToCart = (flower) => {
    setCartArr([...cartArr, flower]); // הוסף את המוצר לעגלה
    setSum(sum + parseFloat(flower.price)); // עדכן את הסכום הכולל
  };

  // פונקציה למחיקת מוצר מהעגלה
  const deleteFromCart = (flower) => {
    const updatedCart = cartArr.filter((product) => product.id !== flower.id);
    setCartArr(updatedCart);
    setSum(sum - parseFloat(flower.price));
  };

  return (
    <div style={appContainer}>
      <header>
        <Header />
      </header>

      <main style={mainContent}>
        <Routing
          products={products}
          addToCart={addToCart}
          cartArr={cartArr}
          deleteFromCart={deleteFromCart}
          sum={sum}
        />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
