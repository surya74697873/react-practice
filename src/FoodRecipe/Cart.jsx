import { useContext } from "react";
import { cartContext } from "./Context";
import Product from "./Product";

const Cart = () => {

    const {cart} = useContext(cartContext)

    return (
        <div className="Cart">
            {
                cart.length > 0 && cart.map((item) => (
                <Product
                key={item.price}
                image={item.image}
                name={item.name}
                price={item.price}
              />))
            }
        </div>
    );
}

export default Cart;
