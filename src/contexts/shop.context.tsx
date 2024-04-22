import { createContext, useState } from 'react';
import SHOP_DATA from '../SHOP_DATA';

export const shopContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };
  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};
