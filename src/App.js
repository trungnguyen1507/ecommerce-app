import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/ecommerce-app" element={<Home />} />
                <Route exact path="/ecommerce-app/products" element={<Products />} />
                <Route exact path="/ecommerce-app/products/:id" element={<Product />} />
                <Route exact path="/ecommerce-app/cart" element={<Cart />} />
            </Routes>
        </>
    );
}

export default App;
