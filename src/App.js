
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routing } from "./components/Routing";
import { Myprovider } from "./context/context";
import { BrowserRouter, Link } from "react-router-dom";
import { CreateStore } from "./context/store";
import { appContainer, cartItem, cartItemButton, cartLinkButton, cartPopup, cartPopupContent, cartPopupHeader, cartTotal, closeBtn, mainContent } from "./css/appCss";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "זר חגיגי", price: "120.0", img: "1.jpg", discraption: "זר פרחים עשיר במגוון צבעים לחגיגות מיוחדות.", count: 0 },
    { id: 2, name: "זר סולידי", price: "70.0", img: "2.jpg", discraption: "זר קלאסי ועדין, מתאים לכל אירוע.", count: 0 },
    { id: 3, name: "זר צבעוני", price: "100.0", img: "3.jpg", discraption: "מבחר פרחים צבעוניים ליצירת אווירה שמחה.", count: 0 },
    { id: 4, name: "זר יוקרתי", price: "270.0", img: "4.jpg", discraption: "זר מפואר בעיצוב ייחודי לאירועים מרגשים.", count: 0 },
    { id: 5, name: "זר מודרני", price: "90.0", img: "5.jpg", discraption: "עיצוב חדשני ומרשים עם פרחים נבחרים.", count: 0 },
    { id: 6, name: "זר פרחוני", price: "120.0", img: "6.jpg", discraption: "ורדים ופרחים ורודים ליצירת אווירה פרחונית.", count: 0 },
    { id: 7, name: "זר כפרי", price: "70.0", img: "7.jpg", discraption: "זר פרחים טבעי בעיצוב כפרי ופשוט.", count: 0 },
    { id: 8, name: "זר מיוחד", price: "70.0", img: "8.jpg", discraption: "פרחים בעיצוב ייחודי להפתעה מיוחדת.", count: 0 },
    { id: 9, name: "זר קטן", price: "20.0", img: "9.jpg", discraption: "זר קטן ומקסים שמתאים לכל שולחן.", count: 0 },
  ]);



  const [cartArr, setCartArr] = useState([]);
  const [sum, setSum] = useState(0);
  const [isCartVisible, setCartVisible] = useState(false);
  const [popupTimer, setPopupTimer] = useState(null);

  // פונקציית הוספת מוצר לעגלה
  const addToCart = (flower) => {

    const productExists = cartArr.find((item) => item.id === flower.id);

    if (productExists) {
      const updatedCart = cartArr.map((item) =>
        item.id === flower.id ? { ...item, count: item.count + 1 } : item);
      setCartArr(updatedCart);
    } else {
      setCartArr([...cartArr, { ...flower, count: 1 }]);
    }

    setSum((prevSum) => prevSum + parseFloat(flower.price));

    // מראה את הפופאפ עד 15 שניות
    setCartVisible(true);
    if (popupTimer) clearTimeout(popupTimer);
    setPopupTimer(setTimeout(() => setCartVisible(false), 5000));
  };
  // פונקציה למחיקת מוצר מהעגלה
  const deleteFromCart = (flower) => {
    const updatedCart = cartArr.filter((product) => product.id !== flower.id);
    setCartArr(updatedCart);

    setSum((prevSum) => {
      const newSum = prevSum - parseFloat(flower.price * flower.count);
      return newSum >= 0 ? newSum : 0;
    });
  };

  // מחיקה ע"י המנהל
  const deleteByManager = (flower) => {
    const updatedProducts = products.filter((product) => product.id !== flower.id);
    setProducts(updatedProducts);
  };

  const addItemByManager = (newItem) => {
    newItem.id = products.length ? products[products.length - 1].id + 1 : 1;
    newItem.count = 0;
    setProducts([...products, { ...newItem }]);
    alert("המוצר נוסף בהצלחה");
  };

  const updateItemByManager = (newItem) => {
    const updatedProducts = products.map((item) =>
      item.id === newItem.id ? { ...item, ...newItem } : item
    );
    setProducts(updatedProducts);
  };

  const resetCartArr = () => {
    setCartArr([]);
    setSum(0);
  };

  const styles = {

  };

  return (
    <>
      <Myprovider value={CreateStore()}>
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
                sum={sum}
                setCartVisible={setCartVisible}
                deleteFromCart={deleteFromCart}
                deleteByManager={deleteByManager}
                addItemByManager={addItemByManager}
                updateItemByManager={updateItemByManager}
                resetCartArr={resetCartArr}
              />
            </main>
            {isCartVisible && (
              <div style={cartPopup}>
                <div style={cartPopupHeader}>
                  <button onClick={() => setCartVisible(false)} style={closeBtn}>X</button>
                  עגלת קניות
                </div>
                <div style={cartPopupContent}>
                  {cartArr.map((item) => (
                    <div key={item.id} style={cartItem}>
                      <span>{item.name} - {item.count}  {item.price}₪</span>
                      <button onClick={() => deleteFromCart(item)} style={cartItemButton}>הסר</button>
                    </div>
                  ))}
                  <div style={cartTotal}>סך הכל: {sum}₪</div>
                  <Link
                    to="/myCart"
                    onClick={() => {
                      setCartVisible(false); // סוגר את הפופאפ
                      if (popupTimer) clearTimeout(popupTimer); // מבטל טיימר קודם אם קיים
                    }}
                    style={cartLinkButton}
                  >
                    לסל הקניות
                  </Link>
                </div>
              </div>
            )}
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
