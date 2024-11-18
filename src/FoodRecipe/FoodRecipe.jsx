import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
import './FoodRecipe.css'

const FoodRecipe = () => {

    return (
        <div className="FoodRecipe">
            <BrowserRouter>
                <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default FoodRecipe;
