import { createContext, useState } from 'react';

export const shopContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };
  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};
