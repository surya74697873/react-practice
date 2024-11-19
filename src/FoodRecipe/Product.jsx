import "./Product.css";
import PropTypes, { func } from "prop-types";
import { cartContext } from "./Context";
import { useContext } from "react";

function Product(item) {
  const { cart, setCart } = useContext(cartContext);
  const {id, name, image, price } = item;

  function addCart() {
    setCart((prevCart) => [...prevCart, item]);
    console.log(cart)
  }

  function removeCart() {
    setCart((prevCart) => prevCart.filter((product) => product.id !== item.id));
    console.log(cart)
  }
  return (
    <div className="Product-item">
      <img src={image} alt={image} />
      <h2>{name}</h2>
      <p>&#8377; {price}</p>
      {cart.some((product) => (item.id === product.idCategory )) ? (
        <button onClick={removeCart}>Remove Cart</button>
      ) : (
        <button onClick={addCart}>Add Cart</button>
      )}
    </div>
  );
}

Product.propTypes = {
  id : PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
