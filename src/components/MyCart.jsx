import { useParams } from "react-router-dom";

function MyCart() {
  const { name, price } = useParams();

  return (
    <div>
      <h2>עגלת קניות</h2>
      <p>שם המוצר: {name}</p>
      <p>מחיר המוצר: {price}</p>
    </div>
  );
}

export default MyCart;
