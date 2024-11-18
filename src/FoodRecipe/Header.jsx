import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div className="Header">
            <h1>FoodRecipe</h1>
            <ol>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/cart'}>Cart</Link>
                </li>
            </ol>
        </div>
    );
}

export default Header;
