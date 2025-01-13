import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routing } from "./components/Routing";
import { appContainer, mainContent } from "../src/css/appCss"; // ייבוא הסגנונות
import { Myprovider } from "./context/context";
import { BrowserRouter } from "react-router-dom";
import { CreateStore } from "./context/store";

function App() {
  // State עבור מוצרים
  const [products, setProducts] = useState([
    { id: 1, name: "זר עשיר", price: "120.0", img: "1.jpg", discraption: "בלה בלה", count: 0 },
    { id: 2, name: "זר שבתי", price: "70.0", img: "2.jpg", discraption: "בלה בלה", count: 0 },
    { id: 3, name: "זר ססגוני", price: "100.0", img: "3.jpg", discraption: "בלה בלה", count: 0 },
    { id: 4, name: "זר מפואר", price: "270.0", img: "4.jpg", discraption: "בלה בלה", count: 0 },
    { id: 5, name: "זר מעוצב", price: "90.0", img: "5.jpg", discraption: "בלה בלה", count: 0 },
    { id: 6, name: "זר ורדרד", price: "120.0", img: "6.jpg", discraption: "בלה בלה", count: 0 },
    { id: 7, name: "זר", price: "70.0", img: "7.jpg", discraption: "בלה בלה", count: 0 },
    { id: 8, name: "racheli", price: "70.0", img: "8.jpg", discraption: "בלה בלה", count: 0 },
    { id: 9, name: "racheli", price: "20.0", img: "9.jpg", discraption: "בלה בלה", count: 0 },
  ]);

  // State לעגלת הקניות
  const [cartArr, setCartArr] = useState([]);
  const [sum, setSum] = useState(0);

  const store = CreateStore(); // יצירת ה-Store ל-Context

  // פונקציה להוספת מוצר לעגלת הקניות
  const addToCart = (flower) => {
    const productExists = cartArr.find((item) => item.id === flower.id);
    if (productExists) {
      const updatedCart = cartArr.map((item) =>
        item.id === flower.id ? { ...item, count: item.count + 1 } : item
      );
      setCartArr(updatedCart);
    } else {
      setCartArr([...cartArr, { ...flower, count: 1 }]);
    }
    setSum((prevSum) => prevSum + parseFloat(flower.price));
  };

  // פונקציה להסרת מוצר מעגלת הקניות
  const deleteFromCart = (flower) => {
    const updatedCart = cartArr.filter((product) => product.id !== flower.id);
    setCartArr(updatedCart);

    setSum((prevSum) => {
      const newSum = prevSum - parseFloat(flower.price * flower.count);
      return newSum >= 0 ? newSum : 0;
    });
  };

  // פונקציה למחיקת מוצר על ידי מנהל
  const deleteByManager = (flower) => {
    const updatedProducts = products.filter((product) => product.id !== flower.id);
    setProducts(updatedProducts);
  };

  // פונקציה להוספת מוצר חדש על ידי מנהל
  const addItemByManager = (newItem) => {
    newItem.id = products.length ? products[products.length - 1].id + 1 : 1;
    newItem.count = 0;
    setProducts([...products, { ...newItem }]);
    alert("המוצר נוסף בהצלחה");
  };

  // פונקציה לעדכון פרטי מוצר קיים על ידי מנהל
  const updateItemByManager = (newItem) => {
    const updatedProducts = products.map((item) =>
      item.id === newItem.id ? { ...item, ...newItem } : item
    );
    setProducts(updatedProducts);
  };

  return (
    <>
      <Myprovider value={store}>
        <BrowserRouter>
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
                deleteByManager={deleteByManager}
                addItemByManager={addItemByManager}
                updateItemByManager={updateItemByManager}
              />
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </BrowserRouter>
      </Myprovider>
    </>
  );
}

export default App;
