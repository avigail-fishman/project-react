import { Link } from "react-router-dom";
import { 
  cartContainerStyle, 
  cartHeaderStyle, 
  cartItemStyle, 
  deleteButtonStyle, 
  totalStyle, 
  paymentLinkStyle 
} from '../css/myCartCss';


function MyCart({ cartArr = [], sum = 0, deleteFromCart }) {
  return (
    <div style={cartContainerStyle}>
      <h2 style={cartHeaderStyle}>עגלת קניות</h2>
      {cartArr.length === 0 ? (
        <p>העגלה ריקה</p>
      ) : (
        <ol>
          {cartArr.map((product, i) => (
            <li key={i} style={cartItemStyle}>
              {product.name} - {product.price * product.count}₪ 
              {product.count} - כמות
              <button
                onClick={() => deleteFromCart(product)}
                style={deleteButtonStyle}>מחיקה
              </button>
            </li> 
          ))}
        </ol>
      )}
      <h1 style={totalStyle}>סכום לתשלום: {sum}₪</h1>
      <Link to="/payment" style={paymentLinkStyle}>
        לתשלום
      </Link>
    </div>
  );
}

export default MyCart;
