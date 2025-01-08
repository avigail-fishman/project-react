import Home from "./Home";
import ContactUs from "./ContactUs";
import Details from "./Details";
import About from "./About";
import Products from "./Products";
import MyCart from "./MyCart";
import { Route, Routes } from "react-router-dom";
import Payment from "./Payment";


export const Routing = ({ products, addToCart, cartArr, deleteFromCart, sum }) => {

    return (
        <>
            <Routes>
                <Route path="*" element={<h1>404</h1>} />
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contactUs" element={<ContactUs />} />
                {/* <Route path="/details/:name/:discraption" element={<Details />} /> */}
                {/* <Route path="/myCart/:name/:price/:cartArr/:sum" element=
                    {<MyCart deleteFromCart={deleteFromCart} />} /> */}
                <Route path="/myCart" element={<MyCart cartArr={cartArr}
                    sum={sum} deleteFromCart={deleteFromCart}/>}/>
                <Route path="/products" element={<Products products={products}
                    addToCart={addToCart} />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
        </>
    );
}
export default Routing;
