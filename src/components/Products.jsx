import { useState } from "react";
import Card from "./Card";
import { productsContainerStyle } from "../style";


function Products() {
  const [flowers, setFlowers] = useState([
    {
      id: 1,
      name: "זר עשיר",
      price: "120.0",
      img: "1.jpg",
      discraption:"בלה בלה"
    },
    {
      id: 2,
      name: "זר שבתי",
      price: "70.0",
      img: "2.jpg",
      discraption:"בלה בלה"
    },
    {
      id: 3,
      name: "זר ססגוני",
      price: "100.0",
      img: "3.jpg",
      discraption:"בלה בלה"
    },
    {
      id: 4,
      name: "זר מפואר",
      price: "270.0",
      img: "4.jpg",
      discraption:"בלה בלה"
    },
    {
      id: 5,
      name: "זר מעוצב",
      price: "90.0",
      img: "5.jpg",
      discraption:"בלה בלה"
    },
    {
      id: 6,
      name: "זר ורדרד",
      price: "120.0",
      img: "6.jpg",
      discraption:"בלה בלה"
    },
    {
      id: 7,
      name: "זר",
      price: "70.0",
      img: "7.jpg",
      discraption:"בלה בלה"
    },
    {
      id: 8,
      name: "racheli",
      price: "70.0",
      img: "8.jpg",
      discraption:"בלה בלה"
    },
    {
      id: 9,
      name: "racheli",
      time: "20:06",
      sum: 100,
      img: "9.jpg",
      discraption:"בלה בלה"
    },
  ]);

  return (
    <>
      <h1>פרחים</h1>
      <div style={productsContainerStyle}>
        {flowers.map((f) => (
          <Card flower={{ ...f }} key={f.id} />
        ))}
      </div>
    </>
  );
}

export default Products;
