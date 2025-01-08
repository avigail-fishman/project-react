import { Link} from "react-router-dom";

function MyCart({ cartArr = [], sum = 0, deleteFromCart }) {
  return (
    <div>
      <h2>עגלת קניות</h2>
      {cartArr.length == 0 ? (<p>העגלה ריקה</p>) : 
        ( <ol>
          {cartArr.map((product, i) => (
            <li key={i}>
              {product.name} - {product.price}₪
              <button onClick={() => deleteFromCart(product)}>מחיקה</button>
            </li>
          ))}
        </ol>
      )}
      <h1>סכום לתשלום: {sum}₪</h1>
      <Link to="/payment">לתשלום</Link>
    </div>
  );
}

export default MyCart;

