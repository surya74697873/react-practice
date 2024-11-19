import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div className="Header">
            <h1>FoodRecipe</h1>
            <ol>
                <li>
                    <Link className="Links" to={'/'}>Home</Link>
                </li>
                <li>
                    <Link className="Links" to={'/cart'}>Cart</Link>
                </li>
            </ol>
        </div>
    );
}

export default Header;
