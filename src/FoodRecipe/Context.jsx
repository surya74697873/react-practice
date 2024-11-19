import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const cartContext = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Context;
