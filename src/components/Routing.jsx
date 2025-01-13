import Home from "./Home";
import ContactUs from "./ContactUs";
import Details from "./Details";
import About from "./About";
import Products from "./Products";
import MyCart from "./MyCart";
import { Route, Routes } from "react-router-dom";
import Payment from "./Payment";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import UsersManager from "./UsersManager";
import AddItem from "./AddItem";
import UpdateItem from "./UpdateItem";

export const Routing = ({ products, addToCart, cartArr,
    deleteFromCart, sum, deleteByManager, addItemByManager, 
    updateItemByManager , resetCartArr}) => {

    return (
        <>
            <Routes>
                <Route path="*" element={<h1>404</h1>} />
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/myCart" element={<MyCart cartArr={cartArr}
                    sum={sum} deleteFromCart={deleteFromCart} />} />
                <Route path="/products" element=
                    {<Products products={products}
                        addToCart={addToCart}
                        deleteByManager={deleteByManager}
                        updateItemByManager={updateItemByManager} />
                    } />
                <Route path="/payment" element={<Payment resetCartArr={resetCartArr} />} />
                <Route path="/logIn" element={<LogIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/usersManager" element={<UsersManager />} />
                <Route path="/addItem" element={<AddItem
                    addItemByManager={addItemByManager} />} />
                <Route path="/updateItem" element={<UpdateItem
                updateItemByManager = {updateItemByManager} />} />


            </Routes>
        </>
    );
}
export default Routing;
