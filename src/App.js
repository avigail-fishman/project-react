import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routing } from "./components/Routing";
import { appContainer, mainContent } from "../src/css/appCss"; // ייבוא הסגנונות

function App() {
  // מערך המוצרים
  const [products, setProducts] = useState([
    { id: 1, name: "זר עשיר", price: "120.0", img: "1.jpg", discraption: "בלה בלה" , count: 0},
    { id: 2, name: "זר שבתי", price: "70.0", img: "2.jpg", discraption: "בלה בלה" , count: 0},
    { id: 3, name: "זר ססגוני", price: "100.0", img: "3.jpg", discraption: "בלה בלה" , count: 0},
    { id: 4, name: "זר מפואר", price: "270.0", img: "4.jpg", discraption: "בלה בלה" , count: 0},
    { id: 5, name: "זר מעוצב", price: "90.0", img: "5.jpg", discraption: "בלה בלה" , count: 0},
    { id: 6, name: "זר ורדרד", price: "120.0", img: "6.jpg", discraption: "בלה בלה" , count: 0},
    { id: 7, name: "זר", price: "70.0", img: "7.jpg", discraption: "בלה בלה" , count: 0},
    { id: 8, name: "racheli", price: "70.0", img: "8.jpg", discraption: "בלה בלה" , count: 0},
    { id: 9, name: "racheli", price: "20:06", img: "9.jpg", discraption: "בלה בלה" , count: 0},
  ]);

  const [cartArr, setCartArr] = useState([]);
  const [sum, setSum] = useState(0);
  const [exist, setExist] = useState(false);

  // פונקציה להוספת מוצר לעגלה וחישוב הסכום הכולל
  const addToCart = (flower) => {
    const productExists = cartArr.find((item) => item.id === flower.id);
  
    if (productExists) {
      // אם המוצר כבר בעגלה, עדכני את הכמות שלו
      const updatedCart = cartArr.map((item) =>
        item.id === flower.id ? { ...item, count: item.count + 1 } : item
      );
      setCartArr(updatedCart);
    } else {
      // אם המוצר לא בעגלה, הוסיפי אותו עם count = 1
      setCartArr([...cartArr, { ...flower, count: 1 }]);
    }
  
    // עדכני את הסכום הכולל
    setSum(sum + parseFloat(flower.price * flower.count));
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
