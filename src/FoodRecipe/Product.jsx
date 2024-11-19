import "./Product.css";
import PropTypes, { func } from "prop-types";
import { cartContext } from "./Context";
import { useContext } from "react";

function Product(item) {
  const { cart, setCart } = useContext(cartContext);
  const { name, image, price } = item;

  function addCart() {
    setCart((prevCart) => [...prevCart, item]);
  }

  function removeCart() {
    setCart((prevCart) => prevCart.filter((product) => product !== item));
  }
  return (
    <div className="Product-item">
      <img src={image} alt={image} />
      <h2>{name}</h2>
      <p>&#8377; {price + 200}</p>
      {cart.includes(item) ? (
        <button onClick={removeCart}>Remove Cart</button>
      ) : (
        <button onClick={addCart}>Add Cart</button>
      )}
    </div>
  );
}

Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
