import { useContext, useEffect, useState } from "react";
import { cartContext } from "./Context";
import Product from "./Product";

const Cart = () => {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);

  useEffect(
    () =>
      setTotal(cart.reduce((price,item) => price + Number(item.price), 0)
      ),
    [cart]
  );

  console.log(total)

  return (
    <div className="Cart">
      {cart.length > 0 &&
        cart.map((item) => (
          <Product
            key={item.price}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      <p>The Total Amount : {total}</p>
    </div>
  );
};

export default Cart;
